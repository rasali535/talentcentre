import os
import re

path = 'src/app/admin/blogs/page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the state
content = content.replace("const [blogs, setBlogs] = useState<any[]>([]);", "const [contentList, setContentList] = useState<any[]>([]);")

# Replace fetch logic
search_fetch = """      fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
          setBlogs(data.blogs || []);
          setLoading(false);
        }).catch(err => {
          console.error(err);
          setLoading(false);
        });"""

replace_fetch = """      Promise.all([
        fetch('/api/blogs').then(res => res.json()),
        fetch('/api/video-blogs').then(res => res.json())
      ]).then(([blogsData, videoData]) => {
        const textBlogs = (blogsData.blogs || []).map((b: any) => ({ ...b, contentType: 'Article' }));
        const videoBlogs = (videoData.videoBlogs || []).map((v: any) => ({ ...v, contentType: 'Video' }));
        const combined = [...textBlogs, ...videoBlogs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setContentList(combined);
        setLoading(false);
      }).catch(err => {
        console.error(err);
        setLoading(false);
      });"""

content = content.replace(search_fetch, replace_fetch)

# Replace delete logic
search_delete = """  const deleteBlog = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    await fetch(`/api/blogs/${slug}`, { method: 'DELETE' });
    setBlogs(blogs.filter(b => b.slug !== slug));
  };"""

replace_delete = """  const deleteContent = async (slug: string, contentType: string) => {
    if (!confirm(`Are you sure you want to delete this ${contentType}?`)) return;
    const endpoint = contentType === 'Video' ? `/api/video-blogs/${slug}` : `/api/blogs/${slug}`;
    await fetch(endpoint, { method: 'DELETE' });
    setContentList(contentList.filter(item => item.slug !== slug));
  };"""

content = content.replace(search_delete, replace_delete)

# Replace table render logic
content = content.replace("blogs.length === 0", "contentList.length === 0")
content = content.replace("blogs.map(blog =>", "contentList.map(item =>")
content = content.replace("key={blog.id}", "key={item.id + item.contentType}")
content = content.replace("{blog.title}", "{item.title}")
content = content.replace("{blog.author}", "{item.contentType}")
content = content.replace("blog.status", "item.status")
content = content.replace("{new Date(blog.createdAt)", "{new Date(item.createdAt)")
content = content.replace("deleteBlog(blog.slug)", "deleteContent(item.slug, item.contentType)")

# Also update the table header from 'Author' to 'Type'
content = content.replace('<th className="p-4 font-semibold text-steel-600">Author</th>', '<th className="p-4 font-semibold text-steel-600">Type</th>')

# View link update
content = content.replace('href={`/blog/${blog.slug}`}', 'href={`/blog/${item.slug}`}') # We might need a separate page for video blogs later, but /blog/[slug] could handle it if we unified them. Right now video blogs are separate in DB. Wait, the video blog public page!

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated admin dashboard")
