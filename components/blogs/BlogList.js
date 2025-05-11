"use client";
import { useState } from 'react';
import BlogCard from './BlogCard';

export default function BlogList({ initialBlogs }) {
  const [visibleBlogs, setVisibleBlogs] = useState(5);
  
  const loadMore = () => {
    setVisibleBlogs(prev => Math.min(prev + 5, initialBlogs.length));
  };

  return (
    <section className="max-w-[90rem] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {initialBlogs.slice(0, visibleBlogs).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {visibleBlogs < initialBlogs.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[var(--button-bg)] rounded-lg hover:opacity-90 transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
