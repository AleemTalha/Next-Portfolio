import { notFound } from 'next/navigation';
import blogData from '@/data/blog.json';
import { siteConfig } from '@/app/metadata.config';
import BlogPostClient from '@/components/blogs/BlogPostClient';

export async function generateMetadata({ params }) {
  const blog = blogData.find((blog) => blog.slug === params.slug);
  
  if (!blog) {
    return { title: 'Blog Post Not Found' };
  }

  const metadata = {
    title: `${blog.title} | ${siteConfig.author}`,
    description: blog.excerpt,
    keywords: [...blog.tags, siteConfig.author, "web development", "tutorial"],
    author: siteConfig.author,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${siteConfig.siteUrl}/blogs/${blog.slug}`,
      type: 'article',
      images: [siteConfig.defaultImage],
      article: {
        publishedTime: blog.date,
        modifiedTime: blog.date,
        authors: [siteConfig.author],
        tags: blog.tags,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} | ${siteConfig.author}`,
      description: blog.excerpt,
      images: [siteConfig.defaultImage],
      creator: siteConfig.twitterHandle,
    },
  };

  return metadata;
}

export default function BlogPost({ params }) {
  const blog = blogData.find((blog) => blog.slug === params.slug);
  
  if (!blog) {
    notFound();
  }

  const relatedPosts = blogData
    .filter((post) => 
      post.slug !== params.slug && 
      post.tags.some((tag) => blog.tags.includes(tag))
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Person",
      "name": siteConfig.author
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "keywords": blog.tags.join(", "),
    "url": `${siteConfig.siteUrl}/blogs/${blog.slug}`,
    "image": siteConfig.defaultImage,
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <BlogPostClient blog={blog} relatedPosts={relatedPosts} />
    </div>
  );
}
