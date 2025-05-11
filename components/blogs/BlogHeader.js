export default function BlogHeader({ blog }) {
  return (
    <>
      <h1 className="blog-title text-4xl md:text-5xl font-bold text-[var(--bold-text-color)] mb-6">
        {blog.title}
      </h1>
      
      <div className="blog-meta flex flex-wrap gap-4 mb-8 text-[var(--text-color)]">
        <time className="text-sm opacity-75">
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-[var(--navbar-bg)] text-[var(--text-color)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
