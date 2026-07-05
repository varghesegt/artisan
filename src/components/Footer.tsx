import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* Lightweight inline SVG social icons (brand icons removed from lucide-react) */
const IconInstagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconLinkedIn = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconTwitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const footerLinks = {
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Premium Websites", href: "/services#websites" },
    { label: "Social Media", href: "/services#social" },
    { label: "Content Creation", href: "/services#content" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: IconInstagram },
    { label: "LinkedIn", href: "#", icon: IconLinkedIn },
    { label: "Twitter", href: "#", icon: IconTwitter },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-soft-black text-alabaster">
      {/* CTA Section */}
      <div className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <p className="font-label text-mid-grey mb-6">Ready to elevate?</p>
          <h2 className="font-heading-1 text-alabaster mb-10">
            Let&apos;s create something{" "}
            <em className="text-sage-light not-italic">extraordinary</em>{" "}
            together.
          </h2>
          <Link
            href="/contact"
            className="magnetic-btn border-alabaster text-alabaster hover:text-soft-black text-sm py-4 px-8"
            style={{ ["--color-soft-black" as string]: "#F9F9F8" }}
          >
            <span className="flex items-center gap-2 relative z-10">
              Start a Conversation
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="h-px bg-white/10" />
      </div>

      {/* Footer Grid */}
      <div className="px-5 sm:px-8 lg:px-12 py-16 sm:py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight"
            >
              Artisan<span className="text-sage-light">.</span>
            </Link>
            <p className="mt-4 text-mid-grey text-sm leading-relaxed max-w-xs">
              We craft premium digital experiences that transform businesses and
              captivate audiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-label text-mid-grey mb-6">Navigate</p>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-alabaster/70 hover:text-alabaster transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-label text-mid-grey mb-6">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-alabaster/70 hover:text-alabaster transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-label text-mid-grey mb-6">Connect</p>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-alabaster/70 hover:text-alabaster transition-colors duration-300"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="mailto:hello@artisan.studio"
                className="text-sm text-sage-light hover:text-alabaster transition-colors duration-300"
              >
                hello@artisan.studio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="h-px bg-white/10" />
      </div>
      <div className="px-5 sm:px-8 lg:px-12 py-6 max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-mid-grey">
          © {new Date().getFullYear()} Artisan Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-xs text-mid-grey hover:text-alabaster transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs text-mid-grey hover:text-alabaster transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
