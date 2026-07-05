"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

/* ─── Real Project Data ─── */
const projects = [
  {
    slug: "royal-foot",
    title: "Royal Foot Care",
    tagline: "Therapeutic Reflexology Shop",
    category: "Business Website",
    year: "2024",
    image: "/royal.png",
    color: "#E03131",
    description:
      "An immersive, visually rich website for a premium reflexology practice in Trichy. Full-bleed hero imagery, seamless booking integration, and a calming design language that mirrors the therapeutic experience itself.",
    services: ["Website Design", "Photography Direction", "Booking Integration", "Local SEO"],
    result: "Online bookings increased by 240% within two months of launch.",
  },
  {
    slug: "mhc",
    title: "MHC Hospital",
    tagline: "World-Class Multispecialty Healthcare",
    category: "Healthcare Website",
    year: "2024",
    image: "/mhc.png",
    color: "#12B886",
    description:
      "A comprehensive digital presence for a leading multispecialty hospital. Designed to instill trust and provide seamless patient experiences, featuring an advanced department directory and integrated appointment booking.",
    services: ["Healthcare Design", "Web Development", "Patient Portal", "SEO Optimization"],
    result: "Increased online appointment bookings by 150% in the first quarter.",
  },
  {
    slug: "kalvikann",
    title: "Kalvikann Foundation",
    tagline: "Education × Sustainability × Health",
    category: "Non-Profit Website",
    year: "2024",
    image: "/kalvikann.png",
    color: "#099268",
    description:
      "A purpose-driven website for a foundation empowering communities through education, sustainability, and health initiatives. Clean, trustworthy design with impact metrics front and center to inspire confidence and drive donations.",
    services: ["Brand Identity", "Website Development", "Content Creation", "Donation Integration"],
    result: "Volunteer sign-ups grew by 180% and donations increased by 65% post-launch.",
  },
  {
    slug: "clearmind",
    title: "ClearMind",
    tagline: "Student Mental Wellbeing Platform",
    category: "Web Application",
    year: "2024",
    image: "/clearmind.png",
    color: "#7C3AED",
    description:
      "A compassionate digital platform that supports college students emotionally and academically - featuring wellness check-ins, anonymous peer chat, SOS support, and counselor connections. Designed with empathy at its core.",
    services: ["Product Design", "Front-End Development", "Content Strategy", "Accessibility Audit"],
    result: "Adopted by 5,000+ students, with a 92% satisfaction rate in first semester.",
  },
  {
    slug: "vearnify",
    title: "Vearnify",
    tagline: "Website Company - Digital Excellence Redefined",
    category: "Premium Website",
    year: "2025",
    image: "/vearnify.png",
    color: "#6C2BD9",
    description:
      "A stunning, performance-driven website for a digital agency that converts visitors into loyal clients. Built with bold typography, fluid animations, and a dark aesthetic that commands attention from the first pixel.",
    services: ["UI/UX Design", "Front-End Development", "Brand Strategy", "SEO Optimization"],
    result: "3x increase in qualified leads within the first quarter of launch.",
  },
  {
    slug: "hallsync",
    title: "HallSync",
    tagline: "Full-Stack College Operations Platform",
    category: "Full-Stack Web Application",
    year: "2025",
    image: "/hallsync.png",
    color: "#3B5BDB",
    description:
      "A comprehensive full-stack platform that digitizes and streamlines college operations - from faculty management and hall allocation to exam scheduling, audit compliance, and financial claims. Built for scale, built for institutions.",
    services: ["Full-Stack Development", "System Architecture", "UI/UX Design", "Database Engineering"],
    result: "Reduced manual administrative workload by 70% across departments.",
  },
];

/* ─── Featured Project Card ─── */
function FeaturedProject({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <SectionReveal>
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-14 items-center py-12 sm:py-16 lg:py-24 border-t border-warm-grey first:border-t-0`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="w-full lg:w-7/12">
          <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-cream group cursor-pointer">
            {/* Colored accent border on top */}
            <div
              className="absolute top-0 left-0 right-0 h-1 z-10 transition-all duration-500"
              style={{ background: project.color, opacity: isHovered ? 1 : 0 }}
            />
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={`object-cover object-top transition-all duration-700 ${
                isHovered ? "scale-[1.03]" : "scale-100"
              }`}
            />
            {/* Overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* View project button on hover */}
            <div
              className={`absolute bottom-6 left-6 flex items-center gap-2 text-white text-sm font-medium transition-all duration-500 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-5/12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-label text-mid-grey text-[10px]">{project.year}</span>
            <span className="w-6 h-px bg-warm-grey" />
            <span
              className="font-label text-[10px] px-2.5 py-1 rounded-sm"
              style={{ color: project.color, background: `${project.color}10` }}
            >
              {project.category}
            </span>
          </div>

          <h2 className="font-heading-2 text-soft-black mb-2 transition-colors duration-300"
            style={{ color: isHovered ? project.color : undefined }}
          >
            {project.title}
          </h2>
          <p className="text-sage-dark font-medium text-sm mb-5">{project.tagline}</p>
          <p className="text-mid-grey leading-relaxed text-sm sm:text-base mb-6">
            {project.description}
          </p>

          {/* Services tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.services.map((service) => (
              <span
                key={service}
                className="text-xs text-mid-grey border border-warm-grey px-3 py-1.5 rounded-sm"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Result */}
          <div className="bg-cream rounded-sm p-5 mb-6">
            <p className="font-label text-sage text-[10px] mb-2">Impact</p>
            <p className="text-soft-black text-sm font-medium leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20 max-w-[1440px] mx-auto">
        <SectionReveal>
          <p className="font-label text-sage mb-6">Our Portfolio</p>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h1 className="font-heading-1 text-soft-black max-w-4xl mb-6">
            Work that speaks
            <br className="hidden sm:block" />{" "}
            <em className="not-italic text-sage-dark">louder</em> than words.
          </h1>
        </SectionReveal>
        <SectionReveal delay={200}>
          <p className="text-mid-grey max-w-xl text-base sm:text-lg leading-relaxed">
            From business websites to full-stack platforms, every project we
            deliver is a testament to our commitment to craft, strategy, and
            measurable results.
          </p>
        </SectionReveal>

        {/* Project Count */}
        <SectionReveal delay={300}>
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-warm-grey">
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-soft-black">
                {projects.length}
              </p>
              <p className="text-xs text-mid-grey mt-1">Featured Projects</p>
            </div>
            <div className="w-px h-10 bg-warm-grey" />
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-soft-black">
                100%
              </p>
              <p className="text-xs text-mid-grey mt-1">Client Satisfaction</p>
            </div>
            <div className="w-px h-10 bg-warm-grey" />
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-soft-black">
                5+
              </p>
              <p className="text-xs text-mid-grey mt-1">Industries Served</p>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="px-5 sm:px-8 lg:px-12 pb-[var(--spacing-section)] max-w-[1440px] mx-auto">
        {projects.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} index={i} />
        ))}
      </section>

      {/* ─── Quick Grid View ─── */}
      <section className="bg-cream">
        <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="font-label text-sage mb-4">All Projects</p>
            <h2 className="font-heading-2 text-soft-black mb-12 sm:mb-16">
              The complete collection.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <SectionReveal key={project.slug} delay={i * 80}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-alabaster mb-5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg font-medium text-soft-black group-hover:text-sage-dark transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-mid-grey mt-1">{project.category}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-mid-grey group-hover:text-soft-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-soft-black">
        <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto text-center">
          <SectionReveal>
            <p className="font-label text-sage-light mb-6">
              Have a project in mind?
            </p>
            <h2 className="font-heading-2 text-alabaster mb-4">
              Your brand could be next.
            </h2>
            <p className="text-mid-grey max-w-lg mx-auto mb-10 text-sm sm:text-base">
              Whether it&apos;s a website, a platform, or a complete digital
              presence - we&apos;re ready to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="magnetic-btn border-alabaster text-alabaster hover:text-soft-black text-sm py-4 px-8 mx-auto"
            >
              <span className="flex items-center gap-2 relative z-10">
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
