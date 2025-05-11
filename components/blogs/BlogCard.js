import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <article
      className="bg-[var(--card-bg)] rounded-2xl shadow-md border border-[var(--border-color)] transition-all duration-300 hover:shadow-xl overflow-hidden"
      aria-label={`Blog post titled ${blog.title} by Talha Aleem`}
    >
      <div className="p-5 md:p-6 flex flex-col h-full">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[9px] sm:text-[10px] md:text-xs rounded-full bg-[var(--navbar-bg)] text-[var(--text-color)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-2 text-[var(--bold-text-color)] line-clamp-2 hover:text-[var(--button-bg)] transition-colors duration-300">
          {blog.title}
        </h2>

        {/* Keyword Rich Description */}
        <p className="text-xs sm:text-sm text-[var(--text-color)] mb-6 line-clamp-3 flex-grow leading-relaxed">
          {blog.excerpt} — written by Talha Aleem, Aleem Talha, Talha Aleeem, Talhaa Aleeem. This article on {blog.tags.join(', ')} is part of latest blogs by developer Talha Aleem.
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-color)]">
          <span className="text-[11px] sm:text-xs text-[var(--text-color)] opacity-70">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>

          <Link
            href={`/blogs/${blog.slug}`}
            className="border border-[var(--text-color)] text-[var(--text-color)] px-2 py-1 rounded-lg   "
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
