import os
import re

def replace_in_file(path, search, replace):
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.replace(search, replace))

def regex_replace_in_file(path, pattern, replace):
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    with open(path, 'w', encoding='utf-8') as f:
        f.write(re.sub(pattern, replace, content))

# 1. Fix Prisma Initialization
for file in ['src/app/blogs/page.tsx', 'src/app/blog/[slug]/page.tsx', 'src/app/api/blogs/route.ts', 'src/app/api/blogs/[slug]/route.ts']:
    replace_in_file(file, "const prisma = new PrismaClient();", "const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;")

# Update blogs page query
public_blogs_query = """  let blogs: any[] = [];
  try {
    if (prisma) {
      blogs = await prisma.blog.findMany({
        where: { status: 'published' },
        orderBy: { createdAt: 'desc' }
      });
    }
  } catch (err) {"""
regex_replace_in_file('src/app/blogs/page.tsx', r'  let blogs: any\[\] = \[\];\n  try \{\n    blogs = await prisma\.blog\.findMany\(\{[\s\S]*?\}\);\n  \} catch \(err\) \{', public_blogs_query)

# Update single blog page query
single_blog_query = """  let blog: any = null;
  try {
    if (prisma) {
      blog = await prisma.blog.findUnique({
        where: { slug }
      });
    }
  } catch (err) {"""
regex_replace_in_file('src/app/blog/[slug]/page.tsx', r'  let blog: any = null;\n  try \{\n    blog = await prisma\.blog\.findUnique\(\{[\s\S]*?\}\);\n  \} catch \(err\) \{', single_blog_query)


# 2. Fix Admin Route Protection
# Admin blogs page
admin_blogs_path = 'src/app/admin/blogs/page.tsx'
search_admin_blogs = """export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
      return;
    }

    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs || []);
        setLoading(false);
      });
  }, []);"""
replace_admin_blogs = """export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
          setBlogs(data.blogs || []);
          setLoading(false);
        }).catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [router]);

  if (!isAuthenticated) return null;"""
replace_in_file(admin_blogs_path, search_admin_blogs, replace_admin_blogs)

# Admin create blog
admin_create_path = 'src/app/admin/blogs/create/page.tsx'
search_admin_create = """export default function CreateBlogPage() {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    }
  }, [router]);"""
replace_admin_create = """export default function CreateBlogPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null;"""
replace_in_file(admin_create_path, search_admin_create, replace_admin_create)
replace_in_file(admin_create_path, "if (!isAuthenticated) return null;\n\n  const [formData", "const [formData") # Clean up order so hooks aren't after early return
replace_in_file(admin_create_path, "  const [loading, setLoading] = useState(false);", "  const [loading, setLoading] = useState(false);\n\n  if (!isAuthenticated) return null;")

# Admin video blog create
admin_video_create_path = 'src/app/admin/video-blogs/create/page.tsx'
search_admin_video_create = """export default function CreateVideoBlogPage() {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    }
  }, [router]);"""
replace_admin_video_create = """export default function CreateVideoBlogPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);"""
replace_in_file(admin_video_create_path, search_admin_video_create, replace_admin_video_create)
replace_in_file(admin_video_create_path, "  const [recordedUrl, setRecordedUrl] = useState('');", "  const [recordedUrl, setRecordedUrl] = useState('');\n\n  if (!isAuthenticated) return null;")

print("Robust fixes applied")
