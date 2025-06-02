import { Raleway } from "next/font/google";
import Cursor from "@/components/cursor";
import ProgressBar from "@/components/ProgressBar";
import Providers from "./providers";
import "./globals.css";
import SessionProviderWrapper from "@/components/sessionProvider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: {
    default: "Aleem Talha",
    template: "%s | Aleem T.Dev",
  },
  description:
    "A powerful platform for taxation, shopping, and business handling — all in one place.",
  keywords: [
    "Talha Aleem",
    "Aleem T.Dev",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Development",
    "MERN Stack",
    "JavaScript",
    "MongoDB",
    "Express",
    "Pakistan Developer",
  ],
  authors: [{ name: "Talha Aleem", url: "https://aleemtalhadev.vercel.app" }],
  creator: "Talha Aleem",
  openGraph: {
    title: "Aleem Talha | Full Stack Developer",
    description:
      "Explore the portfolio and skills of Talha Aleem, a full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://aleemtalhadev.vercel.app",
    siteName: "Talha Aleem Portfolio",
    images: [
      {
        url: "https://aleemtalhadev.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Talha Aleem Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleem Talha | Full Stack Developer",
    description:
      "Explore the portfolio and skills of Talha Aleem, a full-stack developer specializing in React, Next.js, Node.js, and more.",
    images: ["https://aleemtalhadev.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://aleemtalhadev.vercel.app"),
  robots: "index, follow",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Aleem Talha | Full Stack Developer</title>
        <meta name="description" content="Explore the portfolio and skills of Talha Aleem, a full-stack developer specializing in React, Next.js, Node.js, and modern web technologies." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#18181b" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        {/* These will be overridden by child pages if they export metadata */}
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <SessionProviderWrapper>
          <Providers>
            <ProgressBar />
            <Cursor />
            {children}
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
