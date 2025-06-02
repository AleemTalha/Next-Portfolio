import ClientWrapper from "@/components/ClientWrapper";
import TypingEffect from "@/components/typer/typer";
import ScrollButton from "@/components/ScrollButton";
import Organogram from "@/components/Organogram";
import { siteConfig } from "@/app/metadata.config";

export const metadata = {
  title: `${siteConfig.author} | Home – Full Stack Developer`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  openGraph: {
    title: `${siteConfig.author} | Full Stack Web Developer`,
    description: siteConfig.openGraphDescription,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.author} - Developer Portfolio`,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-portfolio-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author} - Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author} | Developer Portfolio`,
    description: siteConfig.twitterDescription,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.siteUrl}/og-portfolio-image.jpg`],
  },
  icons: {
    icon: "/icon.png",
  },
  robots: "index, follow"
};



export default function HomePage() {
  return (
    <ClientWrapper>
      <main className="relative flex items-center justify-center bg-[var(--background)]">
        <div
          className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-[var(--background)] opacity-70"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center text-[var(--background)] px-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--text-color)]">
              Crafting Scalable Web Solutions
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[var(--highlight)] mb-6">
              <TypingEffect />
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 text-[var(--text-color)] max-w-3xl">
              I specialize in building modern, secure, and scalable web
              applications using cutting-edge technologies like React, Next.js,
              Node.js, and MongoDB. Let&apos;s turn your ideas into reality.
            </div>
            <div>
              <ScrollButton targetId="projects" />
            </div>
          </div>
        </div>
      </main>

      <section
        className="bg-[var(--background)] py-12 w-full d-flex justify-center"
        id="about"
      >
        <div className="min-w-[90vw] px-4">
          <div className="text-2xl md:text-3xl font-bold text-[var(--foreground)] text-center mb-8">
            Portfolio Highlights
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 w-[90vw] mx-auto">
            <div className="bg-[var(--foreground)] border border-[var(--border-color)] text-[var(--background)] rounded-lg shadow-sm p-4 lg:col-span-2 lg:row-span-2 flex flex-col gap-4 hover:shadow-lg transition min-h-[300px]">
              <div className="text-lg font-semibold mb-2 text-center">
                Signature Project
              </div>
              <div className="text-[12px] sm:text-xs md:text-sm lg:text-base text-[var(--background)] text-justify">
                A practical full-stack solution built using real-world tools I
                actively use — focused on performance, security, and clean
                UI/UX.
              </div>
              <div className="hidden lg:block text-[12px] sm:text-xs md:text-sm lg:text-base text-[var(--background)] text-justify px-4">
                This project includes a robust backend built with Express.js and
                Node.js, handling encrypted communication using custom AES-based
                security protocols. Real-time features were powered by
                Socket.IO, while WhatsApp integration was achieved via Baileys
                with QR-based session management stored efficiently in MongoDB.
                On the frontend, React ensures dynamic interface handling and a
                responsive design, making the entire system scalable and
                production-ready.
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[var(--card-bg)] p-2 rounded-lg text-center">
                  <div className="text-sm font-semibold text-[var(--foreground)]">
                    React
                  </div>
                  <div className="text-xs text-[var(--text-color)]">
                    Frontend Framework
                  </div>
                </div>
                <div className="bg-[var(--card-bg)] text-[var(--foreground)] p-2 rounded-lg text-center">
                  <div className="text-sm font-semibold">Node.js</div>
                  <div className="text-xs text-[var(--text-color)]">
                    Backend Runtime
                  </div>
                </div>
                <div className="bg-[var(--card-bg)] p-2 rounded-lg text-center">
                  <div className="text-sm text-[var(--foreground)] font-semibold">
                    MongoDB
                  </div>
                  <div className="text-xs text-[var(--text-color)]">
                    NoSQL Database
                  </div>
                </div>
                <div className="bg-[var(--card-bg)] p-2 rounded-lg text-center">
                  <div className="text-sm text-[var(--foreground)] font-semibold">
                    Express.js
                  </div>
                  <div className="text-xs text-[var(--text-color)]">
                    Node Framework
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg shadow-sm p-4 lg:col-span-2 flex flex-col gap-2 hover:shadow-lg transition min-h-[200px]">
              <div className="text-lg font-semibold mb-1 text-center">
                Core Tech Stack
              </div>
              <div className="text-[12px] sm:text-xs md:text-lg text-[var(--text-color)] text-left">
                I have experience in various technologies that enhance my
                development capabilities.
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[var(--foreground)] p-2 rounded-lg text-center">
                  <div className="text-sm text-[var(--background)] font-semibold">
                    Frontend
                  </div>
                  <div className="text-xs text-[var(--background)]">
                    React, Next.js, TailwindCSS
                  </div>
                </div>
                <div className="bg-[var(--foreground)] p-2 rounded-lg text-center">
                  <div className="text-sm text-[var(--background)] font-semibold">
                    Backend
                  </div>
                  <div className="text-xs text-[var(--background)]">
                    Node.js, Express.js
                  </div>
                </div>
                <div className="bg-[var(--foreground)] p-2 rounded-lg text-center">
                  <div className="text-sm text-[var(--background)] font-semibold">
                    Database
                  </div>
                  <div className="text-xs text-[var(--background)]">
                    MongoDB, MySQL
                  </div>
                </div>
                <div className="bg-[var(--foreground)] p-2 rounded-lg text-center">
                  <div className="text-sm text-[var(--background)] font-semibold">
                    Tools & DevOps
                  </div>
                  <div className="text-xs text-[var(--background)]">
                    Docker, Git, CI/CD
                  </div>
                </div>
              </div>
              <div className="text-xs text-justify mt-2 lg:hidden">
                These technologies are part of my daily workflow, helping me
                build efficient, scalable, and modern web applications.
              </div>
            </div>
            <div className="hidden lg:flex bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg shadow-sm p-4 lg:row-span-2 flex-col justify-center items-center hover:shadow-lg transition min-h-[250px]">
              <div className="text-lg font-semibold mb-4">
                Development Journey
              </div>
              <div className="text-[12px] sm:text-xs md:text-sm text-[var(--text-color)] text-justify px-2">
                Every project I&apos;ve built tells a story — from the moment an
                idea sparked in my mind to the countless hours of debugging,
                refactoring, and improving until final deployment. Whether
                it&apos;s building a secure full-stack messaging app with
                encrypted protocols, or creating seamless UI/UX using React and
                Next.js, each challenge helped me evolve as a developer. I
                integrate real-time capabilities, API interactions, and clean
                code structure to make sure the final product isn&apos;t just
                functional, but efficient and scalable. My goal has always been
                to deliver tech that reflects both problem-solving and polish —
                and these stories are the proof of that journey.
              </div>
            </div>

            <div className="hidden lg:flex bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg shadow-sm p-4 flex-col justify-center items-center hover:shadow-lg transition min-h-[200px]">
              <div className="text-lg font-semibold mb-2">Worldwide Reach</div>
              <div className="text-[12px] sm:text-xs md:text-sm text-[var(--text-color)] text-justify px-2">
                My applications serve users across different regions, with
                multi-language support and responsive design. By focusing on
                performance and accessibility, I ensure each solution feels
                native and reliable, no matter where it&apos;s used.
              </div>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg shadow-sm p-4 flex flex-col justify-center items-center hover:shadow-lg transition min-h-[200px] lg:col-span-2">
              <div className="text-lg font-semibold mb-1">
                Cutting-Edge Stack
              </div>
              <div className="text-xs text-[var(--text-color)] text-justify px-2">
                Leveraging cutting-edge technologies to build modern, efficient,
                and user-friendly applications. From powerful JS libraries to
                optimized backend stacks, I embrace innovation at every stage.
              </div>
            </div>

            <div className="bg-[var(--foreground)] border hidden lg:flex border-[var(--border-color)] text-[var(--background)] rounded-lg shadow-sm p-4 flex-col justify-center items-center hover:shadow-lg transition min-h-[200px]">
              <div className="text-lg font-semibold text-[var(--background)] mb-1">
                Proven Reliability
              </div>
              <div className="text-xs text-[var(--background)] text-justify px-2">
                Clients rely on my proven skills, whether it’s delivering stable
                APIs or building production-ready web systems with long-term
                reliability.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <div className="flex justify-center items-center">
        <section className="py-12 max-w-[90vw] min-w-[90vw] rounded-xl border border-[var(--foreground)] mx-auto bg-[var(--card-bg)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--bold-text-color)] mb-4">
              About Me
            </h2>
            <p className="text-[var(--text-color)] text-lg">
              I am Talha Aleem, a passionate full-stack web developer with a
              strong focus on building modern, scalable, and user-friendly web
              applications. With expertise in React, Node.js, and MongoDB, I
              strive to deliver clean and efficient code that solves real-world
              problems.
            </p>
          </div>
        </section>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/images/carousel-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          minHeight: "50vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--background)",
            opacity: 0.7,
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Tumhara content yahan aayega */}
        </div>
      </div>

      <Organogram />
    </ClientWrapper>
  );
}
