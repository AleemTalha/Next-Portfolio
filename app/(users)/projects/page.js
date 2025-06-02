import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { siteConfig } from "@/app/metadata.config";
import Head from "next/head";

export const metadata = {
  title: "Projects",
  description:
    "Explore my projects showcasing modern web development skills including React, Next.js, MongoDB, and full-stack applications.",
  twitter: {
    card: "summary_large_image",
  },
  robots: "index, follow"
};

const Page = () => {
  return (
    <>
      <Head>
        <title>Projects | Talha Aleem - Mern Stack and Next.js Developer</title>
        <meta
          name="description"
          content="Explore my projects showcasing modern web development skills including React, Next.js, MongoDB, and full-stack applications."
        />

        <meta
          property="og:url"
          content="https://aleemtalhadev.vercel.app/projects"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Projects | Talha Aleem - Mern Stack and Next.js Developer"
        />
        <meta
          property="og:description"
          content="Explore my projects showcasing modern web development skills including React, Next.js, MongoDB, and full-stack applications."
        />
        <meta
          property="og:image"
          content="https://aleemtalhadev.vercel.app/aleem.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aleemtalhadev.vercel.app" />
        <meta
          property="twitter:url"
          content="https://aleemtalhadev.vercel.app/projects"
        />
        <meta
          name="twitter:title"
          content="Projects | Talha Aleem - Mern Stack and Next.js Developer"
        />
        <meta
          name="twitter:description"
          content="Explore my projects showcasing modern web development skills including React, Next.js, MongoDB, and full-stack applications."
        />
        <meta
          name="twitter:image"
          content="https://aleemtalhadev.vercel.app/aleem.jpg"
        />
      </Head>

      <div className="min-h-screen bg-[#f3f6fa]">
        <ProjectHero />
      </div>
    </>
  );
};

export default Page;
