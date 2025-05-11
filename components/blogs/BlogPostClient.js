"use client";

import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export default function BlogPostClient({ blog, relatedPosts }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="animate-fade-up space-y-8">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-[var(--text-color)] hover:text-[var(--button-bg)] transition-colors"
        >
          <IoArrowBack className="mr-2" /> Back to Blogs
        </Link>

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

        <div className="blog-content prose prose-lg max-w-none text-[var(--text-color)]">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <div className="related-posts mt-16 pt-8 border-t border-[var(--border-color)]">
            <h2 className="text-2xl font-bold text-[var(--bold-text-color)] mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="block group"
                >
                  <article className="bg-[var(--card-bg)] p-4 rounded-lg shadow-sm border border-[var(--border-color)] transition-transform group-hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[var(--bold-text-color)] mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--text-color)] opacity-75 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
