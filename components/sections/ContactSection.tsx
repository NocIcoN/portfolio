"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { OWNER } from "@/lib/data";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Info column */}
        <div>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-serif text-4xl text-[#1A1916] mb-4">Let&apos;s Work Together</h2>
          <p className="text-sm text-[#6B6860] leading-relaxed mb-8">
            Have a project in mind or want to explore opportunities? I&apos;d love to hear from you.
            Whether it&apos;s freelance work, a full-time role, or just a chat about tech — drop me a
            message.
          </p>

          {[
            { icon: "📍", label: OWNER.location },
            { icon: "💼", label: OWNER.company },
            { icon: "🎓", label: OWNER.university },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#D8F3DC] flex items-center justify-center text-base flex-shrink-0">
                {icon}
              </div>
              <span className="text-sm text-[#1A1916]">{label}</span>
            </div>
          ))}
        </div>

        {/* Form column */}
        <div className="bg-white border border-black/[0.08] rounded-2xl p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <span className="text-5xl">✅</span>
              <h3 className="font-semibold text-lg text-[#1A1916]">Message Sent!</h3>
              <p className="text-sm text-[#6B6860]">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Name" type="text" placeholder="Your name" required />
                <FormField label="Email" type="email" placeholder="your@email.com" required />
              </div>

              <div>
                <label className="block text-[0.72rem] font-semibold text-[#6B6860] uppercase tracking-widest mb-1.5">
                  Subject
                </label>
                <select
                  className="w-full bg-[#F7F5F2] border border-black/[0.08] rounded-lg px-3.5 py-3 text-sm text-[#1A1916] font-sans focus:outline-none focus:border-[#2D6A4F] transition-colors"
                  required
                >
                  <option value="">— Choose a topic —</option>
                  <option>Freelance project</option>
                  <option>Full-time opportunity</option>
                  <option>Collaboration</option>
                  <option>Just saying hi</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.72rem] font-semibold text-[#6B6860] uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full bg-[#F7F5F2] border border-black/[0.08] rounded-lg px-3.5 py-3 text-sm text-[#1A1916] resize-y font-sans focus:outline-none focus:border-[#2D6A4F] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D6A4F] text-white font-semibold text-sm py-3.5 rounded-full hover:bg-[#1B4332] hover:-translate-y-0.5 transition-all duration-200 mt-1"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[0.72rem] font-semibold text-[#6B6860] uppercase tracking-widest mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#F7F5F2] border border-black/[0.08] rounded-lg px-3.5 py-3 text-sm text-[#1A1916] font-sans focus:outline-none focus:border-[#2D6A4F] transition-colors"
      />
    </div>
  );
}
