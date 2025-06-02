import Cursor from "@/components/cursor";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
// Rename metadataConfig to metadata and remove the 'skills' nesting for Next.js App Router compatibility
export const metadata = {
  title: {
    default: "Talha Aleem – Full-Stack Web Developer",
    template: "%s | Talha Aleem – Full-Stack Web Developer",
  },
  description:
    "Explore the technical skills of Talha Aleem, a full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Talha Aleem",
    "Talha A.",
    "T Aleem",
    "Aleem Dev",
    "TDev",
    "Talha Developer",
    "Full Stack Developer",
    "Full-Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express",
    "JavaScript",
    "Web Development Portfolio",
    "Pakistani Developer",
    "Modern Web Developer",
    "Full Stack Skills",
    "Talha Skills",
    "Talha Aleem Developer Skills",
    "Taleem Dev",
    "Talha A Skills",
    "Talha React Dev",
    "Aleem Web Technologies",
    "Talha Dev Stack",
    "Talha Aleem Stack",
    "Talha Aleem Programming",
    "Talha Aleem Web Stack",
    "Talha Aleem MERN Stack",
    "Talha Aleem Tech Stack",
    "Talha Web Expertise",
  ],
  authors: [{ name: "Talha Aleem", url: "https://aleemtalhadev.vercel.app" }],
  creator: "Talha Aleem",
  openGraph: {
    title: "Talha Aleem | Developer Skills & Tech Stack",
    description:
      "Talha Aleem showcases a modern tech stack and full-stack web development expertise using JavaScript, React, Next.js, Node.js, and MongoDB.",
    url: "https://aleemtalhadev.vercel.app",
    siteName: "Talha Aleem Portfolio",
    images: [
      {
        url: "https://aleemtalhadev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Aleem Skills",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Aleem | Full-Stack Skills",
    description:
      "Explore the web development skills and tech stack of Talha Aleem – React, Next.js, Node.js, MongoDB and more.",
    images: ["https://aleemtalhadev.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://aleemtalhadev.vercel.app"),
  robots: "index, follow",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <div className={``}>
      <Navbar />
      <ProgressBar />
      <Cursor />
      {children}
      <Footer />
    </div>
  );
}
