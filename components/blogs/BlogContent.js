"use client";
import BlogHeader from './BlogHeader';
import RelatedPosts from './RelatedPosts';
import BackButton from './BackButton';

export default function BlogContent({ blog, relatedPosts }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BackButton />
      <BlogHeader blog={blog} />
      
      <div className="blog-content prose prose-lg max-w-none text-[var(--text-color)]">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </div>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  );
}
