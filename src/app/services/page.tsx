import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium websites, social media strategy, and content creation - capabilities built for ambitious brands.",
};

const services = [
  {
    id: "websites",
    number: "01",
    title: "Premium Websites",
    image: "/premium_website.png",
    processImage: "/premium_website_process.png",
    subtitle: "Digital experiences that convert and captivate",
    description:
      "We design and develop bespoke websites that are not just functional - they are digital masterpieces. Every pixel is intentional. Every interaction is choreographed. From luxury e-commerce to corporate flagships, we build experiences that convert visitors into devoted clients.",
    details: [
      "Custom UI/UX Design & Prototyping",
      "Responsive Front-End Development",
      "CMS Integration & Custom Backends",
      "Performance & SEO Optimization",
      "E-Commerce Solutions",
      "Ongoing Maintenance & Support",
    ],
    approach:
      "We begin with deep discovery - understanding your audience, your competitors, and your business goals. From there, we craft wireframes, refine through design iterations, and build with clean, performant code that scales with your growth.",
  },
  {
    id: "social",
    number: "02",
    title: "Social Media Strategy",
    image: "/social_media.png",
    processImage: "/social_media_process.png",
    subtitle: "Building communities, not just followers",
    description:
      "Your social presence should be an extension of your brand's soul. We craft strategies that build authentic communities, drive meaningful engagement, and turn followers into brand advocates. We don't chase vanity metrics - we build real, lasting connections.",
    details: [
      "Platform Strategy & Audits",
      "Content Calendar Development",
      "Community Management",
      "Paid Campaign Management",
      "Influencer Partnerships",
      "Analytics & Monthly Reporting",
    ],
    approach:
      "We start by auditing your current presence and defining your brand voice across platforms. Every post, every story, every campaign is strategically crafted to move the needle on awareness, engagement, and ultimately - revenue.",
  },
  {
    id: "content",
    number: "03",
    title: "Content Creation",
    image: "/content_creation.png",
    processImage: "/content_creation_process.png",
    subtitle: "Stories that resonate, visuals that stop the scroll",
    description:
      "Compelling content is the heartbeat of every great brand. From photography to copywriting, from video production to visual identity, we produce stunning and narratively rich content that tells your story with elegance and precision.",
    details: [
      "Brand Photography & Art Direction",
      "Video Production & Editing",
      "Copywriting & Brand Voice",
      "Visual Identity Systems",
      "Motion Graphics & Animation",
      "Editorial & Blog Content",
    ],
    approach:
      "We approach content creation as a craft. Every image, every word, every frame is considered. We blend strategic thinking with creative excellence to produce content that not only looks beautiful but drives measurable business results.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-16 sm:pb-20 max-w-[1440px] mx-auto">
        <SectionReveal>
          <p className="font-label text-sage mb-6">Our Capabilities</p>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h1 className="font-heading-1 text-soft-black max-w-4xl mb-6">
            Capabilities built for{" "}
            <em className="not-italic text-sage-dark">ambitious</em> brands.
          </h1>
        </SectionReveal>
        <SectionReveal delay={200}>
          <p className="text-mid-grey max-w-xl text-base sm:text-lg leading-relaxed">
            We offer a full spectrum of digital services, each executed with the
            same uncompromising standard of excellence.
          </p>
        </SectionReveal>
      </section>

      {/* Services - Sticky Left Panel */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`${idx % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Left - Sticky on desktop */}
              <SectionReveal className="lg:w-5/12">
                <div className="lg:sticky lg:top-28">
                  <span className="font-label text-mid-grey text-xs mb-4 block">
                    {service.number}
                  </span>
                  <h2 className="font-heading-2 text-soft-black mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sage-dark font-medium text-sm sm:text-base mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-mid-grey leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="magnetic-btn text-xs py-3 px-6"
                  >
                    <span className="flex items-center gap-2">
                      Discuss Your Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </SectionReveal>

              {/* Right - Scrolling content */}
              <div className="lg:w-7/12 space-y-10">
                <SectionReveal delay={100}>
                  <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-cream">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </SectionReveal>

                <SectionReveal delay={200}>
                  <h3 className="font-heading-4 text-soft-black mb-6">
                    What&apos;s Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 text-sm text-soft-black"
                      >
                        <Check className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </SectionReveal>

                <SectionReveal delay={300}>
                  <h3 className="font-heading-4 text-soft-black mb-4">
                    Our Approach
                  </h3>
                  <p className="text-mid-grey leading-relaxed">
                    {service.approach}
                  </p>
                </SectionReveal>

                <SectionReveal delay={400}>
                  <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden bg-cream">
                    <Image
                      src={service.processImage}
                      alt={`${service.title} process`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-soft-black">
        <div className="px-5 sm:px-8 lg:px-12 py-[var(--spacing-section)] max-w-[1440px] mx-auto text-center">
          <SectionReveal>
            <p className="font-label text-sage-light mb-6">
              Ready to get started?
            </p>
            <h2 className="font-heading-2 text-alabaster mb-10">
              Let&apos;s build something
              <br className="hidden sm:block" /> remarkable together.
            </h2>
            <Link
              href="/contact"
              className="magnetic-btn border-alabaster text-alabaster hover:text-soft-black text-sm py-4 px-8 mx-auto"
            >
              <span className="flex items-center gap-2 relative z-10">
                Start a Conversation
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
