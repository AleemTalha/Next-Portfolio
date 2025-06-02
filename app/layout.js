import { Raleway } from "next/font/google";
import Cursor from "@/components/cursor";
import ProgressBar from "@/components/ProgressBar";
import { toast, ToastContainer } from "react-toastify";
import Providers from "./providers";
import "./globals.css";
import SessionProviderWrapper from "@/components/sessionProvider";
import { headers } from "next/headers";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: "Talha Aleem - Portfolio",
  description: "Full Stack Developer Portfolio",
  keywords:
    "Talha Aleem, Full-Stack Developer, React Developer, Next.js Developer, MongoDB, JavaScript, Web Development Portfolio",
  authors: [{ name: "Talha Aleem", url: "https://aleemtalhadev.vercel.app" }],
  creator: "Talha Aleem",
  openGraph: {
    title: "Talha Aleem | Full-Stack Developer",
    description:
      "Portfolio of Talha Aleem showcasing modern web development skills and full-stack projects.",
    url: "https://aleemtalhadev.vercel.app",
    siteName: "Talha Aleem Portfolio",
    images: [
      {
        url: "https://aleemtalhadev.vercel.app/og-image.png",
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
    images: ["https://aleemtalhadev.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://aleemtalhadev.vercel.app"),
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const pathname = headers().get("x-next-url") || "/";
  const canonical = `https://aleemtalhadev.vercel.app${
    pathname === "/" ? "" : pathname
  }`;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Full Stack Developer Portfolio of Talha Aleem. Explore modern web development projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Talha Aleem, Full-Stack Developer, React Developer, Next.js Developer, MongoDB, JavaScript, Web Development Portfolio"
        />
        <meta name="author" content="Talha Aleem" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://aleemtalhadev.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Talha Aleem | Mern stack and Next.js Developer" />
        <meta property="og:description" content="Portfolio of Talha Aleem showcasing modern web development skills and full-stack projects. View all projects, blogs, and contact details." />
        <meta property="og:image" content="https://aleemtalhadev.vercel.app/aleem.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aleemtalhadev.vercel.app" />
        <meta property="twitter:url" content="https://aleemtalhadev.vercel.app/" />
        <meta name="twitter:title" content="Talha Aleem | Mern stack and Next.js Developer" />
        <meta name="twitter:description" content="Portfolio of Talha Aleem showcasing modern web development skills and full-stack projects. View all projects, blogs, and contact details." />
        <meta name="twitter:image" content="https://aleemtalhadev.vercel.app/aleem.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Talha Aleem",
              url: "https://aleemtalhadev.vercel.app",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/aleemtalha",
                "https://linkedin.com/in/aleemtdev",
              ],
            }),
          }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <SessionProviderWrapper>
          <Providers>
            <ProgressBar />
            <Cursor />
            {children}

            {/* Hidden backlinks for SEO crawling */}
            <div
              style={{
                position: "absolute",
                left: "-9999px",
                top: "-9999px",
                visibility: "hidden",
                fontSize: "1px",
                color: "transparent",
              }}
            >
              <nav aria-hidden="true">
                <a href="https://aleemtalhadev.vercel.app/">
                  Home - Talha Aleem Portfolio
                </a>
                <a href="https://aleemtalhadev.vercel.app/about">
                  About - Talha Aleem Full Stack Developer
                </a>
                <a href="https://aleemtalhadev.vercel.app/projects">
                  Projects - Full Stack Development Portfolio
                </a>
                <a href="https://aleemtalhadev.vercel.app/skills">
                  Skills - React Next.js MongoDB Expert
                </a>
                <a href="https://aleemtalhadev.vercel.app/blogs">
                  Blogs - Web Development Articles
                </a>
                <a href="https://aleemtalhadev.vercel.app/contact">
                  Contact - Hire Talha Aleem
                </a>
                <a href="https://aleemtalhadev.vercel.app/sitemap.xml">
                  Sitemap
                </a>
                <a href="https://aleemtalhadev.vercel.app/robots.txt">Robots</a>
                <a href="mailto:aleemtalha098@gmail.com">Email Talha Aleem</a>
                <a href="https://github.com/aleemtalha">GitHub Profile</a>
                <a href="https://linkedin.com/in/aleemtdev">LinkedIn Profile</a>
                <span>Talha Aleem Full Stack Developer Portfolio</span>
                <span>React Developer Next.js Expert MongoDB Specialist</span>
                <span>MERN Stack Developer Portfolio</span>
                <span>Web Development Services Pakistan</span>
              </nav>
            </div>
          </Providers>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
