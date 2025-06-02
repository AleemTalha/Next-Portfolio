import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
import { siteConfig } from "@/app/metadata.config";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Talha Aleem, Full Stack Developer. Let's discuss your project ideas and bring them to life with modern web technologies.",
  twitter: {
    card: "summary_large_image",
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left - Profile Info */}
          <div className="lg:w-[35%] bg-[var(--card-bg)] rounded-2xl p-8 shadow-xl border border-[var(--border-color)]">
            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full overflow-hidden mb-5 relative border-4 border-[var(--highlight)] shadow-md">
                <Image
                  src="/images/profile.jpg"
                  alt={`${siteConfig.author} - Full Stack Developer`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                Aleem T
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-5 text-center">
                Full Stack Developer | React & Next.js Expert
              </p>

              <div className="space-y-4 w-full mt-4">
                <div className="flex items-center gap-3 text-[var(--text-secondary)] border border-[var(--border-color)] p-3 rounded-lg">
                  <FaEnvelope className="text-xl text-[var(--highlight)]" />
                  <a
                    href="mailto:aleemtalha.dev098@gmail.com"
                    target="_blank"
                    className="text-[var(--text-color)] font-normal hover:underline"
                  >
                    <span>aleemtalha.dev098@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-secondary)] border border-[var(--border-color)] p-3 rounded-lg">
                  <FaPhone className="text-xl text-[var(--highlight)]" />
                  <a
                    target="_blank"
                    href="https://wa.me/923270445135"
                    className="text-[var(--text-secondary)] font-normal"
                  >
                    +92 3270445135
                  </a>
                </div>

                <div className="flex items-center gap-3 text-[var(--text-secondary)] border border-[var(--border-color)] p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-xl text-[var(--highlight)]" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              <div className="flex gap-5 mt-6">
                <a
                  href="https://github.com/yourusername"
                  className="text-2xl text-[var(--text-secondary)] hover:text-[var(--highlight)] transition-all scale-100 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  className="text-2xl text-[var(--text-secondary)] hover:text-[var(--highlight)] transition-all scale-100 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:w-[65%] bg-[var(--card-bg)] rounded-2xl p-10 shadow-xl border border-[var(--border-color)]">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Let’s Talk
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
              Have an idea or project in mind? I&apos;d love to hear from you
              and help bring it to life. Fill out the form below to get started.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
