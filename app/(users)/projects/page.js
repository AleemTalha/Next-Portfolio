import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { siteConfig } from "@/app/metadata.config";

export const metadata = {
  title: `Projects | ${siteConfig.author} - Full Stack Developer (ReactJS, NextJS)`,
  description: `Explore professional projects by ${siteConfig.author}, featuring ReactJS, NextJS, Node.js, MongoDB, Express, and modern web technologies.`,
  keywords: [
    "Talha Aleem", "Aleem", "Aleem Dev", "Aleem T.Dev", "Talha Dev", "Talha Developer", "Aleem Projects", "Projects by Aleem", "Aleem Code", "Code by Talha", "Aleem Stack", "T.Dev", "T.Dev Projects",
    "ReactJS Projects", "NextJS Projects", "Node.js Projects", "MongoDB Projects", "JavaScript Projects", "Frontend Projects", "Backend Projects", "MERN Projects", "Web Development Projects", "Portfolio Projects",
    "Full Stack Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer", "React Developer", "NextJS Developer", "NodeJS Developer", "Talha Web Developer", "Aleem Full Stack",
    "Clean UI", "Modern Design", "Professional UI", "Responsive Web Projects", "Advanced Projects", "Digital Products", "Code Showcase", "Web Apps", "Modern Web Apps", "UI/UX Projects",
    "Frontend Engineering", "Backend Logic", "Full Stack Applications", "Next React Mongo", "RESTful Projects", "ExpressJS Projects", "Tailwind Projects", "Styled Components", "Web Design Projects", "Interactive UIs",
    "React Interfaces", "NextJS Websites", "Backend APIs", "App Creations", "Talha Software", "Web Experiments", "React Creations", "Web Solutions", "Next Apps", "Mongo Projects",
    "Web Portfolio", "Projects Talha", "Projects Dev", "Aleem T.Dev Work", "Dev Work", "Dev Builds", "Modern Stack", "Tech Stack Projects", "Responsive Interfaces", "UI Systems",
    "Professional Interfaces", "Project Gallery", "Talha Work", "Next Dev Work", "Next Level Dev", "Next Gen Projects", "Digital Developer", "Web Wonders", "React Developer Work", "Code by Aleem",
    "Frontend Wizard", "Backend Builder", "Next Level Web", "React Specialist", "Aleem TDev", "T Dev Code", "Aleem Works", "Modern UI Work", "Fullstack Showcase", "Code Magic"
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  openGraph: {
    title: `${siteConfig.author} | Projects - Full Stack Developer`,
    description: `Browse the projects of ${siteConfig.author} (Aleem T.Dev), including modern web apps, scalable solutions, and full stack development.`,
    url: `${siteConfig.siteUrl}/projects`,
    siteName: `${siteConfig.author} Projects`,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-projects-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author} - Projects`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author} | Projects - Web Developer`,
    description: `Projects by ${siteConfig.author}, featuring React, Next.js, Node.js, and MongoDB apps.`,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.siteUrl}/og-projects-image.jpg`],
  },
  icons: {
    icon: siteConfig.defaultImage,
  },
};


const Page = () => {
  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      {/* SEO Structured Data for Projects Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${siteConfig.author} Projects`,
            "description": `A showcase of web development and full-stack projects by ${siteConfig.author} (Aleem Talha, Aleem T.dev).`,
            "url": `${siteConfig.siteUrl}/projects`,
            "mainEntity": {
              "@type": "Person",
              "name": siteConfig.author,
              "url": siteConfig.siteUrl,
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": siteConfig.siteUrl,
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projects",
                  "item": `${siteConfig.siteUrl}/projects`,
                },
              ],
            },
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Projects Listing",
                "url": `${siteConfig.siteUrl}/projects`
              },
              {
                "@type": "WebPage",
                "name": "Project Details",
                "url": `${siteConfig.siteUrl}/projects/{slug}`,
                "potentialAction": {
                  "@type": "ReadAction",
                  "target": [
                    `${siteConfig.siteUrl}/projects/{slug}`
                  ]
                }
              }
            ]
          }),
        }}
      />
      <ProjectHero />
    </div>
  );
};

export default Page;
