import Link from "next/link";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[var(--navbar-bg)] text-[var(--text-color)] py-12 w-full border-t border-[var(--border-color)]">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
        <div>
          <h2 className="text-lg font-bold text-[var(--bold-text-color)] mb-4">
            About Me
          </h2>
          <p className="text-sm leading-relaxed text-center">
            I&apos;m a developer focused on building scalable, secure, and
            beautiful web applications using modern full-stack tools.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[var(--bold-text-color)] mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-left">
            <li>
              <Link
                href="/projects"
                className="hover:text-[var(--link-color)] transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="hover:text-[var(--link-color)] transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[var(--link-color)] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--link-color)] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[var(--bold-text-color)] mb-4">
            Expertise
          </h2>
          <ul className="space-y-2 text-sm text-left">
            <li>Frontend Development</li>
            <li>REST APIs & Auth</li>
            <li>Secure Backends</li>
            <li>Responsive UI/UX</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[var(--bold-text-color)] mb-4">
            Contact
          </h2>
          <ul className="space-y-2 text-sm text-left">
            <li className="flex items-center gap-2">
              <FiMail className="text-[var(--highlight)]" />
              aleemtalha.dev098@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-[var(--highlight)]" />
              Lahore, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="https://github.com/AleemTalha"
                target="_blank"
                className="flex items-center gap-2 hover:text-[var(--link-color)]"
              >
                <FiGithub />
                GitHub
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-[var(--link-color)]"
              >
                <FiLinkedin />
                LinkedIn
              </Link>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              href="mailto:aleemtalha.dev098@gmail.com"
              target="_blank"
              className="inline-block text-[var(--highlight)] hover:underline text-sm border border-[var(--text-color)] px-4 py-2 rounded-md transition-colors duration-300"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[var(--border-color)] pt-6 text-center text-xs text-[var(--text-color)]">
        © {new Date().getFullYear()} Talha Aleem. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
