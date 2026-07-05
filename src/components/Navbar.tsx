"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-alabaster/90 backdrop-blur-md border-b border-warm-grey/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-serif text-xl sm:text-2xl font-semibold tracking-tight text-soft-black z-50 relative group"
          >
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 -my-4 -ml-2 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Artisan Studio Logo" 
                fill 
                sizes="100px"
                quality={100}
                className="object-contain" 
                priority
              />
            </div>
            <span>
              Artisan<span className="text-sage">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-300 group ${
                  pathname === link.href
                    ? "text-soft-black"
                    : "text-mid-grey hover:text-soft-black"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-soft-black transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="magnetic-btn magnetic-btn-filled text-xs py-3 px-6"
            >
              <span className="flex items-center gap-2">
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-soft-black" />
            ) : (
              <Menu className="w-6 h-6 text-soft-black" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-alabaster transition-all duration-500 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 sm:px-12">
          <div className="space-y-2 w-full">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-serif text-4xl sm:text-5xl font-medium tracking-tight transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  pathname === link.href
                    ? "text-soft-black"
                    : "text-mid-grey hover:text-soft-black"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 80 + 200}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className={`mt-12 pt-8 border-t border-warm-grey w-full transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
          >
            <p className="font-label text-mid-grey mb-4">Get in touch</p>
            <a
              href="mailto:artisanstudio.in@gmail.com"
              className="text-soft-black text-lg font-medium hover:text-sage transition-colors break-all"
            >
              artisanstudio.in@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
