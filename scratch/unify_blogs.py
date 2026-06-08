import os

# 1. Update public blogs listing
path_blogs = 'src/app/blogs/page.tsx'
with open(path_blogs, 'r', encoding='utf-8') as f:
    content_blogs = f.read()

search_query_blogs = """  let blogs: any[] = [];
  try {
    if (prisma) {
      blogs = await prisma.blog.findMany({
        where: { status: 'published' },
        orderBy: { createdAt: 'desc' }
      });
    }
  } catch (err) {"""

replace_query_blogs = """  let blogs: any[] = [];
  try {
    if (prisma) {
      const textBlogs = await prisma.blog.findMany({
        where: { status: 'published' },
        orderBy: { createdAt: 'desc' }
      });
      const videoBlogs = await prisma.videoBlog.findMany({
        where: { status: 'published' },
        orderBy: { createdAt: 'desc' }
      });
      blogs = [...textBlogs.map(b => ({...b, contentType: 'Article'})), ...videoBlogs.map(v => ({...v, contentType: 'Video'}))]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  } catch (err) {"""

content_blogs = content_blogs.replace(search_query_blogs, replace_query_blogs)

# Change read time
content_blogs = content_blogs.replace('<span className="flex items-center gap-1"><Clock className="w-3 h-3"/> 5 min read</span>', 
                                      '<span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {blog.contentType === "Video" ? "Video" : "5 min read"}</span>')

# Update excerpt logic
content_blogs = content_blogs.replace('{blog.excerpt}', '{blog.excerpt || blog.description}')

# Update author logic
content_blogs = content_blogs.replace('{blog.author}', '{blog.author || "Admin"}')

with open(path_blogs, 'w', encoding='utf-8') as f:
    f.write(content_blogs)

# 2. Update single blog page
path_slug = 'src/app/blog/[slug]/page.tsx'
with open(path_slug, 'r', encoding='utf-8') as f:
    content_slug = f.read()

search_query_slug = """  let blog: any = null;
  try {
    if (prisma) {
      blog = await prisma.blog.findUnique({
        where: { slug }
      });
    }
  } catch (err) {"""

replace_query_slug = """  let blog: any = null;
  try {
    if (prisma) {
      blog = await prisma.blog.findUnique({
        where: { slug }
      });
      if (blog) {
        blog.contentType = 'Article';
      } else {
        blog = await prisma.videoBlog.findUnique({
          where: { slug }
        });
        if (blog) blog.contentType = 'Video';
      }
    }
  } catch (err) {"""

content_slug = content_slug.replace(search_query_slug, replace_query_slug)

search_render_slug = """<div className="prose prose-lg md:prose-xl max-w-none text-steel-800 marker:text-accent-red prose-headings:font-heading prose-headings:text-charcoal-800 prose-a:text-accent-red hover:prose-a:text-accent-red-dark prose-img:rounded-3xl prose-img:shadow-xl" dangerouslySetInnerHTML={{ __html: blog.content }} />"""

replace_render_slug = """{blog.contentType === 'Video' ? (
            <div className="space-y-8">
              <div className="aspect-video bg-charcoal-800 rounded-3xl overflow-hidden shadow-xl">
                <iframe 
                  src={blog.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')} 
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xl text-steel-700 leading-relaxed">{blog.description}</p>
            </div>
          ) : (
            <div className="prose prose-lg md:prose-xl max-w-none text-steel-800 marker:text-accent-red prose-headings:font-heading prose-headings:text-charcoal-800 prose-a:text-accent-red hover:prose-a:text-accent-red-dark prose-img:rounded-3xl prose-img:shadow-xl" dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}"""

content_slug = content_slug.replace(search_render_slug, replace_render_slug)
content_slug = content_slug.replace('{blog.author}', '{blog.author || "Admin"}')
content_slug = content_slug.replace('5 min read', '{blog.contentType === "Video" ? "Video Content" : "5 min read"}')

with open(path_slug, 'w', encoding='utf-8') as f:
    f.write(content_slug)

print("Unified blogs on public pages")
