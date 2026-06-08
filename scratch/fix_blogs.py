import os

def replace_in_file(path, search, replace):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.content = f.read()
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.replace(search, replace))

# 1. Fix public blogs page
public_blogs_path = 'src/app/blogs/page.tsx'
search_blogs = """  const blogs = await prisma.blog.findMany({
    where: { status: 'published' },
    orderBy: { createdAt: 'desc' }
  });"""
replace_blogs = """  let blogs: any[] = [];
  try {
    blogs = await prisma.blog.findMany({
      where: { status: 'published' },
      orderBy: { createdAt: 'desc' }
    });
  } catch (err) {
    console.error(err);
  }"""
replace_in_file(public_blogs_path, search_blogs, replace_blogs)

# 2. Fix single blog page
single_blog_path = 'src/app/blog/[slug]/page.tsx'
search_single = """  const blog = await prisma.blog.findUnique({
    where: { slug }
  });"""
replace_single = """  let blog: any = null;
  try {
    blog = await prisma.blog.findUnique({
      where: { slug }
    });
  } catch (err) {
    console.error(err);
  }"""
replace_in_file(single_blog_path, search_single, replace_single)

# 3. Add auth to admin blogs page
admin_blogs_path = 'src/app/admin/blogs/page.tsx'
search_admin_blogs = """export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {"""
replace_admin_blogs = """import { useRouter } from 'next/navigation';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
      return;
    }
"""
replace_in_file(admin_blogs_path, search_admin_blogs, replace_admin_blogs)

# 4. Add auth to admin blog create page
admin_create_path = 'src/app/admin/blogs/create/page.tsx'
search_admin_create = """export default function CreateBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({"""
replace_admin_create = """export default function CreateBlogPage() {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    }
  }, [router]);

  const [formData, setFormData] = useState({"""
replace_in_file(admin_create_path, search_admin_create, replace_admin_create)

# 5. Add auth to admin video blog create page
admin_video_create_path = 'src/app/admin/video-blogs/create/page.tsx'
search_admin_video_create = """export default function CreateVideoBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({"""
replace_admin_video_create = """export default function CreateVideoBlogPage() {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      router.push('/admin');
    }
  }, [router]);

  const [formData, setFormData] = useState({"""
replace_in_file(admin_video_create_path, search_admin_video_create, replace_admin_video_create)

print("Fixed blogs and added auth")
