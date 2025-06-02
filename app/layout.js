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
  title: {
    default: "Aleem Talha",
    template: "%s | Aleem T.Dev",
  },
  description:
    "A powerful platform for taxation, shopping, and business handling — all in one place.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
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
