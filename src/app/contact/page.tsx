"use client";

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-16 max-w-[1440px] mx-auto">
        <SectionReveal>
          <p className="font-label text-sage mb-6 tracking-widest uppercase">Start a Conversation</p>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h1 className="font-heading-1 text-soft-black max-w-4xl mb-8 leading-tight">
            Let&apos;s build something <br className="hidden sm:block" />
            <em className="not-italic text-sage-dark">extraordinary</em> together.
          </h1>
        </SectionReveal>
      </section>

      {/* Contact Info - Ultra Premium Layout */}
      <section className="px-5 sm:px-8 lg:px-12 pb-[var(--spacing-section)] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-warm-grey pt-16">
          
          {/* Location */}
          <SectionReveal delay={150}>
            <div className="flex flex-col h-full group">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-5 h-5 text-sage-dark" />
              </div>
              <h2 className="font-label text-mid-grey mb-3 uppercase tracking-widest">Headquarters</h2>
              <a 
                href="https://maps.google.com/?q=Trichy,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-serif text-3xl sm:text-4xl font-medium text-soft-black leading-snug hover:text-sage-dark transition-colors duration-300"
              >
                Trichy, <br />
                India
              </a>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sage-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                View on Map <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </SectionReveal>

          {/* Email */}
          <SectionReveal delay={250}>
            <div className="flex flex-col h-full group">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-5 h-5 text-sage-dark" />
              </div>
              <h2 className="font-label text-mid-grey mb-3 uppercase tracking-widest">Inquiries</h2>
              <a 
                href="mailto:artisanstudio.in@gmail.com" 
                className="font-serif text-3xl sm:text-4xl font-medium text-soft-black leading-snug hover:text-sage-dark transition-colors duration-300"
              >
                artisanstudio.in
                <br />
                @gmail.com
              </a>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sage-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                Send an Email <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </SectionReveal>

          {/* Phone */}
          <SectionReveal delay={350}>
            <div className="flex flex-col h-full group">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-5 h-5 text-sage-dark" />
              </div>
              <h2 className="font-label text-mid-grey mb-3 uppercase tracking-widest">Direct Line</h2>
              <a 
                href="tel:+919487740471" 
                className="font-serif text-3xl sm:text-4xl font-medium text-soft-black leading-snug hover:text-sage-dark transition-colors duration-300 tracking-tight"
              >
                +91 94877
                <br />
                40471
              </a>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sage-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                Call Us <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* Full Width Image / Vibe Section */}
      <section className="px-5 sm:px-8 lg:px-12 pb-[var(--spacing-section)] max-w-[1440px] mx-auto">
        <SectionReveal delay={450}>
          <div className="relative w-full aspect-[21/9] bg-cream rounded-sm overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-sage-dark/5 z-10" />
             <div className="text-center z-20 px-4">
                <p className="font-serif text-2xl sm:text-4xl font-medium text-soft-black leading-relaxed max-w-2xl mx-auto">
                  "Design is the silent ambassador of your brand."
                </p>
                <p className="font-label text-sage mt-6">— Paul Rand</p>
             </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
