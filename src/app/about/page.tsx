import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a collective of designers, strategists, and storytellers who believe every brand deserves a digital presence as extraordinary as the vision behind it.",
};

const values = [
  {
    title: "Craft Over Convention",
    description:
      "We reject templates and generic solutions. Every project is approached as a unique creative challenge, deserving of bespoke thinking and meticulous execution.",
  },
  {
    title: "Strategy Meets Soul",
    description:
      "Beautiful design without strategic intent is decoration. We ensure every creative decision is rooted in data, insight, and a clear understanding of your business goals.",
  },
  {
    title: "Relentless Refinement",
    description:
      "Good enough is never good enough. We iterate, we polish, we obsess over the details that most agencies overlook - because those details are what separate good from extraordinary.",
  },
  {
    title: "Partnership, Not Transactions",
    description:
      "We don't take clients, we build partnerships. Your success is our success, and we invest deeply in understanding your vision, your challenges, and your ambitions.",
  },
];


const stats = [
  { value: "2025", label: "Founded" },
  { value: "5", label: "Projects Delivered" },
  { value: "4", label: "Team Members" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20 max-w-[1440px] mx-auto">
        <SectionReveal>
          <p className="font-label text-sage mb-6">About Us</p>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h1 className="font-heading-1 text-soft-black max-w-4xl mb-6">
            We don&apos;t follow trends -{" "}
            <em className="not-italic text-sage-dark">we set</em> the standard.
          </h1>
        </SectionReveal>
        <SectionReveal delay={200}>
          <p className="text-mid-grey max-w-xl text-base sm:text-lg leading-relaxed">
            Founded in 2025, Artisan Studio helps ambitious brands build digital presences that command attention and drive results.
          </p>
        </SectionReveal>
      </section>

      {/* Hero Image */}
      <SectionReveal className="px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto mb-[var(--spacing-section)]">
        <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden bg-cream">
          <Image
            src="/about_studio.png"
            alt="Artisan Studio Premium Workspace"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </SectionReveal>

      {/* Story Section - Split */}
      <section className="px-5 sm:px-8 lg:px-12 mb-[var(--spacing-section)] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <SectionReveal className="lg:w-1/3">
            <p className="font-label text-sage mb-4">Our Story</p>
            <h2 className="font-heading-2 text-soft-black">
              Born from a belief in better.
            </h2>
          </SectionReveal>
          <SectionReveal delay={150} className="lg:w-2/3 space-y-6">
            <p className="text-mid-grey leading-relaxed">
              Artisan Studio was born from a simple frustration: too many
              talented brands were being served by agencies that prioritized
              speed over quality, trends over timelessness, and volume over
              value. We knew there had to be a better way.
            </p>
            <p className="text-mid-grey leading-relaxed">
              What started as a two-person operation has grown into a highly specialized team of
              4 experts - but our
              founding principle remains unchanged: every brand deserves a
              digital presence as extraordinary as the vision behind it.
            </p>
            <p className="text-mid-grey leading-relaxed">
              Today, we serve clients across 12 countries, from boutique fashion
              houses to global financial institutions. Whether it&apos;s a
              website, a social media strategy, or a complete content ecosystem,
              we approach every project with the same uncompromising commitment
              to craft, strategy, and results.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
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
        </div>
      </section>

      {/* Values */}
      <section className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
        <SectionReveal>
          <p className="font-label text-sage mb-4">Our Values</p>
          <h2 className="font-heading-2 text-soft-black mb-12 sm:mb-16 max-w-2xl">
            The principles that guide every decision we make.
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {values.map((value, i) => (
            <SectionReveal key={value.title} delay={i * 100}>
              <div className="border-t border-warm-grey pt-6 sm:pt-8">
                <h3 className="font-heading-4 text-soft-black mb-3">
                  {value.title}
                </h3>
                <p className="text-mid-grey leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto text-center">
        <SectionReveal>
          <p className="font-label text-sage mb-6">Join our story</p>
          <h2 className="font-heading-2 text-soft-black mb-10 max-w-2xl mx-auto">
            Interested in working with us? We&apos;d love to hear from you.
          </h2>
          <Link
            href="/contact"
            className="magnetic-btn magnetic-btn-filled py-4 px-8 mx-auto"
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </SectionReveal>
      </section>
    </>
  );
}
