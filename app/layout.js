import { Raleway } from "next/font/google";
import Cursor from "@/components/cursor";
import ProgressBar from "@/components/ProgressBar";
import { toast, ToastContainer } from "react-toastify";
import Providers from "./providers";
import "./globals.css";
import SessionProviderWrapper from "@/components/sessionProvider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: "Talha Aleem - Portfolio",
  description: "Full Stack Developer Portfolio",
  keywords:
    "Talha Aleem, Full-Stack Developer, React Developer, Next.js Developer, MongoDB, JavaScript, Web Development Portfolio, Pakistan Developer, Portfolio, Software Engineer, Frontend, Backend",
  authors: [{ name: "Talha Aleem", url: "https://aleemtdev.vercel.app" }],
  creator: "Talha Aleem",
  openGraph: {
    title: "Talha Aleem | Full-Stack Developer",
    description:
      "Portfolio of Talha Aleem showcasing modern web development skills and full-stack projects.",
    url: "https://aleemtdev.vercel.app",
    siteName: "Talha Aleem Portfolio",
    images: [
      {
        url: "https://aleemtdev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Aleem Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Aleem | Full-Stack Developer",
    description:
      "Explore the professional web development portfolio of Talha Aleem.",
    images: ["https://aleemtdev.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://aleemtdev.vercel.app"),
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="seobility" content="dfbdd208f18174fa0677f384fd03aa1b" />
        <meta
          name="description"
          content="Full Stack Developer Portfolio of Talha Aleem (Aleem Talha, Aleem T Dev, Aleem T.dev, Aleem Talha Dev). Explore modern web development projects, skills, and contact information. Hire Aleem Talha for your next project. See all projects, blogs, and contact details."
        />
        <meta
          name="keywords"
          content="Talha Aleem, Aleem Talha, Aleem T Dev, Aleem T.Dev, Aleem T.dev, Aleem Talha Dev, Full-Stack Developer, React Developer, Next.js Developer, MongoDB, JavaScript, Web Development Portfolio, Pakistan Developer, Portfolio, Software Engineer, Frontend, Backend, Web Developer, TalhaAleem098, archon_aleem, Projects, Blogs, Contact, About"
        />
        <meta name="author" content="Talha Aleem, Aleem Talha, Aleem T Dev, Aleem T.dev, Aleem Talha Dev" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://aleemtdev.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        {/* Main site navigation links for SEO */}
        <link rel="index" href="https://aleemtdev.vercel.app/" />
        <link rel="about" href="https://aleemtdev.vercel.app/about" />
        <link rel="projects" href="https://aleemtdev.vercel.app/projects" />
        <link rel="contact" href="https://aleemtdev.vercel.app/contact" />
        <link rel="blog" href="https://aleemtdev.vercel.app/blogs" />
        {/* Alternative Titles for SEO */}
        <meta property="og:alternate_title" content="Aleem T.dev Portfolio" />
        <meta property="og:alternate_title" content="Aleem Talha Dev Portfolio" />
        <meta property="og:alternate_title" content="Aleem Talha | Aleem T.dev | Portfolio" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Talha Aleem | Aleem Talha | Aleem T Dev | Aleem T.dev | Aleem Talha Dev | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Talha Aleem (Aleem Talha, Aleem T Dev, Aleem T.dev, Aleem Talha Dev) showcasing modern web development skills and full-stack projects. View all projects, blogs, and contact details."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aleemtdev.vercel.app" />
        <meta property="og:site_name" content="Talha Aleem Portfolio" />
        <meta property="og:image" content="https://aleemtdev.vercel.app/aleem.jpg" />
        <meta property="og:image:alt" content="Talha Aleem, Aleem Talha, Aleem T.dev - Portfolio Picture" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        {/* Alternative images for SEO */}
        <link rel="image_src" href="https://aleemtdev.vercel.app/aleem.jpg" />
        <link rel="image_src" href="/assets/aleem/aleem.jpg" />
        {/* Open Graph: Social Profiles */}
        <meta property="og:see_also" content="https://github.com/aleemtalha" />
        <meta property="og:see_also" content="https://github.com/TalhaAleem098" />
        <meta property="og:see_also" content="https://linkedin.com/in/aleemtdev" />
        <meta property="og:see_also" content="https://twitter.com/talhaaleem" />
        <meta property="og:see_also" content="https://www.instagram.com/archon_aleem?igsh=dmVpcmJsdXB4ZW1k" />
        <meta property="og:see_also" content="https://www.facebook.com/share/1APJA1pbao/" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aleem T.Dev | Mern Stack and Next.js Developer" />
        <meta
          name="twitter:description"
          content="Explore the professional web development portfolio of Talha Aleem (Aleem Talha, Aleem T Dev, Aleem T.dev, Aleem Talha Dev). See all projects, blogs, and contact details."
        />
        <meta name="twitter:image" content="https://aleemtdev.vercel.app/aleem.jpg" />
        <meta name="twitter:image:alt" content="Talha Aleem, Aleem Talha, Aleem T.dev - Portfolio Picture" />
        <meta name="twitter:creator" content="@talhaaleem" />
        {/* Backlinks for SEO */}
        <link rel="me" href="https://github.com/aleemtalha" />
        <link rel="me" href="https://github.com/TalhaAleem098" />
        <link rel="me" href="https://linkedin.com/in/aleemtdev" />
        <link rel="me" href="mailto:aleemtalha098@gmail.com" />
        <link rel="me" href="https://twitter.com/talhaaleem" />
        <link rel="me" href="https://www.instagram.com/archon_aleem?igsh=dmVpcmJsdXB4ZW1k" />
        <link rel="me" href="https://www.facebook.com/share/1APJA1pbao/" />
        {/* Theme Color */}
        <meta name="theme-color" content="#0a192f" />
        {/* Structured Data for Person (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Talha Aleem",
            "alternateName": [
              "Aleem Talha",
              "Aleem T Dev",
              "Aleem T.Dev",
              "Aleem T.dev",
              "Aleem Talha Dev",
              "TalhaAleem098",
              "archon_aleem"
            ],
            "url": "https://aleemtdev.vercel.app",
            "image": [
              "https://aleemtdev.vercel.app/aleem.jpg",
              "https://aleemtdev.vercel.app/assets/aleem/aleem.jpg"
            ],
            "sameAs": [
              "https://github.com/aleemtalha",
              "https://github.com/TalhaAleem098",
              "https://linkedin.com/in/aleemtdev",
              "https://twitter.com/talhaaleem",
              "https://www.instagram.com/archon_aleem?igsh=dmVpcmJsdXB4ZW1k",
              "https://www.facebook.com/share/1APJA1pbao/"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "urlLinks": [
              { "@type": "WebPage", "name": "Projects", "url": "https://aleemtdev.vercel.app/projects" },
              { "@type": "WebPage", "name": "Blogs", "url": "https://aleemtdev.vercel.app/blogs" },
              { "@type": "WebPage", "name": "Contact", "url": "https://aleemtdev.vercel.app/contact" },
              { "@type": "WebPage", "name": "About", "url": "https://aleemtdev.vercel.app/about" }
            ]
          })
        }} />
        {/* Structured Data for Projects Page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Talha Aleem Projects",
            "description": "A showcase of web development and full-stack projects by Talha Aleem (Aleem Talha, Aleem T.dev).",
            "url": "https://aleemtdev.vercel.app/projects",
            "mainEntity": {
              "@type": "Person",
              "name": "Talha Aleem"
            }
          })
        }} />
        {/* Structured Data for Website & Breadcrumbs */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Aleem T.Dev Portfolio",
            "url": "https://aleemtdev.vercel.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://aleemtdev.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Aleem T.Dev",
                "item": "https://aleemtdev.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://aleemtdev.vercel.app/about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Projects",
                "item": "https://aleemtdev.vercel.app/projects"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Blogs",
                "item": "https://aleemtdev.vercel.app/blogs"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://aleemtdev.vercel.app/contact"
              }
            ]
          })
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <SessionProviderWrapper>
          <Providers>
            <ProgressBar />
            <Cursor />
            {children}
          </Providers>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
