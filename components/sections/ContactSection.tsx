"use client";

import { useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/lib/LanguageContext";
import { OWNER } from "@/lib/data";

export default function ContactSection() {
  const { t } = useLang();
  const form = t.contact.form;

  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown) return;

    // Honeypot check — if this hidden field has a value, it's a bot
    if (honeypotRef.current?.value) return;

    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value.trim() || "";

    // Basic validation
    if (!name || !email.includes("@") || !subject || !message) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const text = `Hi Ilham! 👋
*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}`;

    const url = `https://wa.me/${OWNER.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setCooldown(true);
    setTimeout(() => setCooldown(false), 60000);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Info column */}
        <div>
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2 className="font-serif text-4xl text-[#1A1916] mb-4">{t.contact.heading}</h2>
          <p className="text-sm text-[#6B6860] leading-relaxed mb-8">{t.contact.description}</p>

          {[
            { icon: "📍", label: t.contact.details.location },
            { icon: "💼", label: t.contact.details.company },
            { icon: "🎓", label: t.contact.details.university },
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
              <h3 className="font-semibold text-lg text-[#1A1916]">{form.successTitle}</h3>
              <p className="text-sm text-[#6B6860]">{form.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Honeypot field — hidden from real users, traps bots */}
              <input
                ref={honeypotRef}
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label={form.name}
                  type="text"
                  placeholder={form.namePlaceholder}
                  required
                  inputRef={nameRef}
                />
                <FormField
                  label={form.email}
                  type="email"
                  placeholder={form.emailPlaceholder}
                  required
                  inputRef={emailRef}
                />
              </div>

              <div>
                <label className="block text-[0.72rem] font-semibold text-[#6B6860] uppercase tracking-widest mb-1.5">
                  {form.subject}
                </label>
                <select
                  ref={subjectRef}
                  defaultValue=""
                  required
                  className="w-full bg-[#F7F5F2] border border-black/[0.08] rounded-lg px-3.5 py-3 text-sm text-[#1A1916] font-sans focus:outline-none focus:border-[#2D6A4F] transition-colors"
                >
                  <option value="" disabled>
                    {form.subjectPlaceholder}
                  </option>
                  {form.subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[0.72rem] font-semibold text-[#6B6860] uppercase tracking-widest mb-1.5">
                  {form.message}
                </label>
                <textarea
                  ref={messageRef}
                  rows={5}
                  placeholder={form.messagePlaceholder}
                  required
                  className="w-full bg-[#F7F5F2] border border-black/[0.08] rounded-lg px-3.5 py-3 text-sm text-[#1A1916] resize-y font-sans focus:outline-none focus:border-[#2D6A4F] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={cooldown}
                className="w-full bg-[#2D6A4F] text-white font-semibold text-sm py-3.5 rounded-full hover:bg-[#1B4332] hover:-translate-y-0.5 transition-all duration-200 mt-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {cooldown ? form.sending : form.submit}
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
  inputRef,
}: {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      <label className="block text-[0.72rem] font-semibold text-[#6B6860] uppercase tracking-widest mb-1.5">
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#F7F5F2] border border-black/[0.08] rounded-lg px-3.5 py-3 text-sm text-[#1A1916] font-sans focus:outline-none focus:border-[#2D6A4F] transition-colors"
      />
    </div>
  );
}
