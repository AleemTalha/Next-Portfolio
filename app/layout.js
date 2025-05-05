import { Raleway } from "next/font/google";
import Cursor from "@/components/cursor";
import ProgressBar from "@/components/ProgressBar";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: "Talha Aleem | Full-Stack Web Developer",
  description:
    "Talha Aleem is a full-stack developer focused on building scalable, user-centric applications with React, Next.js, and Node.js.",
  keywords:
    "Talha Aleem, Full-Stack Developer, React Developer, Next.js Developer, MongoDB, JavaScript, Web Development Portfolio, Pakistan Developer",
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
    icon: "/icon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://aleemtdev.vercel.app" />
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
        <Providers>
          <Navbar />
          <ProgressBar />
          <Cursor />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
