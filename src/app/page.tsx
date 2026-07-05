"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

/* ─── Portfolio Data (Real Projects) ─── */
const projects = [
  {
    title: "Royal Foot Care",
    category: "Business Website",
    image: "/royal.png",
  },
  {
    title: "MHC Hospital",
    category: "Healthcare Website",
    image: "/mhc.png",
  },
  {
    title: "Kalvikann Foundation",
    category: "Non-Profit Website",
    image: "/kalvikann.png",
  },
  {
    title: "ClearMind",
    category: "Web Application",
    image: "/clearmind.png",
  },
  {
    title: "Vearnify",
    category: "Premium Website",
    image: "/vearnify.png",
  },
  {
    title: "HallSync",
    category: "Full-Stack Platform",
    image: "/hallsync.png",
  },
];

/* ─── Services Data ─── */
const services = [
  {
    id: "websites",
    number: "01",
    title: "Premium Websites",
    image: "/premium_website.png",
    description:
      "We design and develop bespoke websites that are not just functional, but are digital masterpieces. Every pixel is intentional. Every interaction is choreographed. We build experiences that convert visitors into devoted clients.",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
      "CMS Integration",
    ],
  },
  {
    id: "social",
    number: "02",
    title: "Social Media",
    image: "/social_media.png",
    description:
      "Your social presence should be an extension of your brand's soul. We craft strategies that build authentic communities, drive meaningful engagement, and turn followers into brand advocates.",
    features: [
      "Content Strategy",
      "Community Management",
      "Brand Voice Development",
      "Performance Analytics",
    ],
  },
  {
    id: "content",
    number: "03",
    title: "Content Creation",
    image: "/content_creation.png",
    description:
      "Compelling content is the heartbeat of every great brand. From photography to copywriting, we produce visually stunning and narratively rich content that tells your story with elegance and precision.",
    features: [
      "Brand Photography",
      "Video Production",
      "Copywriting",
      "Visual Identity Systems",
    ],
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote:
      "An immersive and visually rich website that perfectly captures the therapeutic essence of our reflexology practice. Absolutely premium.",
    name: "Thomas GV",
    title: "Owner, Royal Foot Care",
  },
  {
    quote:
      "The digital presence crafted for our World-Class Renal Transplant Centre instills trust and offers a seamless, premium patient experience.",
    name: "Dr. Sundaravelu M",
    title: "Director, MHC Hospital",
  },
  {
    quote:
      "HallSync has completely revolutionized our college operations, digitizing everything from faculty management to exam scheduling effortlessly.",
    name: "Dr. D Srinivasan",
    title: "Principal, K. Ramakrishnan College of Engineering",
  },
];

/* ─── Stats ─── */
const stats = [
  { value: "5", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "4", label: "Team Members" },
];

export default function HomePage() {
  const [openService, setOpenService] = useState<string | null>("websites");

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 pt-24 pb-16 sm:pt-32 sm:pb-24 max-w-[1440px] mx-auto">
        <div className="max-w-5xl">
          <p
            className="font-label text-sage mb-6 sm:mb-8 opacity-0 animate-[slide-up_0.6s_0.2s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            Digital Agency for the Ambitious
          </p>
          <h1
            className="font-display text-soft-black mb-8 sm:mb-10 opacity-0 animate-[fade-up_0.8s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            We engineer
            <br />
            digital{" "}
            <em className="not-italic text-sage-dark">prestige</em>.
          </h1>
          <p
            className="max-w-xl text-mid-grey text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 opacity-0 animate-[fade-up_0.8s_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            Premium websites, social media mastery, and content that commands
            attention. We don&apos;t do ordinary - we craft digital experiences
            that elevate brands to their highest potential.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-up_0.8s_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            <Link href="/contact" className="magnetic-btn magnetic-btn-filled py-4 px-8">
              <span className="flex items-center gap-2">
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/work" className="magnetic-btn py-4 px-8">
              <span className="flex items-center gap-2">
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator removed per user request */}
      </section>

      {/* ═══════════════════════════════════════════════
          HERO IMAGE - Royal Foot Care Featured
      ═══════════════════════════════════════════════ */}
      <SectionReveal className="px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto mb-[var(--spacing-section)]">
        <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-cream">
          <Image
            src="/royal.png"
            alt="Royal Foot Care - Featured project showcase"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════
          ABOUT SNIPPET
      ═══════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto mb-[var(--spacing-section)]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <SectionReveal className="lg:w-1/2">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-cream">
              <Image
                src="/about_studio.png"
                alt="Artisan Studio Premium Workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={150} className="lg:w-1/2 lg:pl-10">
            <p className="font-label text-sage mb-6">Who We Are</p>
            <p className="font-heading-3 text-soft-black leading-snug mb-8">
              We are a collective of designers, strategists, and storytellers
              who believe that every brand deserves a digital presence as{" "}
              <em className="text-sage-dark not-italic font-semibold">
                extraordinary
              </em>{" "}
              as the vision behind it. We don&apos;t follow trends - we set the
              standard.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-soft-black group"
            >
              Discover our story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PORTFOLIO PREVIEW
      ═══════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto mb-[var(--spacing-section)]">
        <SectionReveal>
          <div className="flex items-end justify-between mb-12 sm:mb-16">
            <div>
              <p className="font-label text-sage mb-4">Selected Work</p>
              <h2 className="font-heading-2 text-soft-black">
                Projects that
                <br className="hidden sm:block" /> speak for themselves.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-soft-black group"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <SectionReveal
              key={project.title}
              delay={i * 100}
              className={i === 1 ? "md:mt-16" : i === 3 ? "md:mt-16" : ""}
            >
              <Link href="/work" className="group block">
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-cream mb-5 sm:mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading-4 text-soft-black group-hover:text-sage-dark transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-mid-grey mt-1">
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-mid-grey group-hover:text-soft-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 mt-1" />
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        <Link
          href="/work"
          className="flex sm:hidden items-center gap-2 text-sm font-medium text-soft-black mt-10 group"
        >
          View all projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES ACCORDION
      ═══════════════════════════════════════════════ */}
      <section className="bg-cream">
        <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="font-label text-sage mb-4">What We Do</p>
            <h2 className="font-heading-2 text-soft-black mb-12 sm:mb-16">
              Capabilities built for
              <br className="hidden sm:block" /> ambitious brands.
            </h2>
          </SectionReveal>

          <div className="space-y-0">
            {services.map((service) => (
              <SectionReveal key={service.id}>
                <div className="border-t border-warm-grey">
                  <button
                    onClick={() =>
                      setOpenService(
                        openService === service.id ? null : service.id
                      )
                    }
                    className="w-full py-6 sm:py-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-label text-mid-grey text-xs">
                        {service.number}
                      </span>
                      <h3 className="font-heading-3 text-soft-black group-hover:text-sage-dark transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-mid-grey transition-transform duration-500 ${
                        openService === service.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      openService === service.id
                        ? "max-h-[500px] opacity-100 pb-8 sm:pb-10"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pl-0 sm:pl-16">
                      <div>
                        <p className="text-mid-grey leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-sm text-soft-black"
                            >
                              <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-cream">
                        <Image
                          src={service.image!}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
            <div className="border-t border-warm-grey" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-soft-black tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-mid-grey mt-2">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section className="bg-cream">
        <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
          <SectionReveal>
            <p className="font-label text-sage mb-4">Client Voices</p>
            <h2 className="font-heading-2 text-soft-black mb-12 sm:mb-16">
              Trusted by brands
              <br className="hidden sm:block" /> that demand excellence.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 150}>
                <div className="bg-alabaster p-8 sm:p-10 rounded-sm h-full flex flex-col justify-between">
                  <p className="font-serif text-lg sm:text-xl text-soft-black leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-soft-black">
                      {t.name}
                    </p>
                    <p className="text-xs text-mid-grey mt-1">{t.title}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROCESS SECTION
      ═══════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
        <SectionReveal>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3">
              <p className="font-label text-sage mb-4">Our Process</p>
              <h2 className="font-heading-2 text-soft-black">
                Precision at every stage.
              </h2>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We immerse ourselves in your brand, audience, and ambitions to uncover the strategic foundation.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "We distill insights into a clear roadmap that aligns creative execution with business objectives.",
                },
                {
                  step: "03",
                  title: "Craft",
                  desc: "Our designers and developers bring the vision to life with meticulous attention to every detail.",
                },
                {
                  step: "04",
                  title: "Elevate",
                  desc: "We launch, measure, and continuously refine to ensure lasting impact and sustainable growth.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <span className="font-label text-sage text-xs">
                    {item.step}
                  </span>
                  <h3 className="font-heading-4 text-soft-black mt-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mid-grey leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
