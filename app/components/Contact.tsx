"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Telefon",
    value: "+387 66 130 622",
    href: "tel:+38766130622",
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/10",
    border: "border-[#f59e0b]/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    value: "AD Metal Construction",
    href: "https://facebook.com/profile.php?id=61584035964875",
    color: "text-[#3b82f6]",
    bg: "bg-[#3b82f6]/10",
    border: "border-[#3b82f6]/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    value: "@ad.metal_construction",
    href: "https://instagram.com/ad.metal_construction",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

const objectTypes = [
  { value: "", label: "Odaberite vrstu objekta" },
  { value: "aframe", label: "A-Frame vikendica" },
  { value: "garaza", label: "Montažna garaža" },
  { value: "hala", label: "Čelična hala" },
  { value: "ostalo", label: "Ostalo" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#f59e0b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#f59e0b] text-sm font-bold tracking-widest uppercase">
            Stupite u kontakt
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Kontaktirajte{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fcd34d]">
              nas
            </span>
          </h2>
          <p className="mt-4 text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Besplatna ponuda u roku od 24 sata. Opišite nam vaš projekat.
          </p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#f59e0b] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#111] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">Direktan kontakt</h3>
              <p className="text-[#9ca3af] text-sm mb-8 leading-relaxed">
                Dostupni smo svaki radni dan. Za hitne upite nazovite direktno.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl ${item.bg} border ${item.border} hover:opacity-80 transition-opacity duration-200 group`}
                  >
                    <div className={`${item.color} flex-shrink-0`}>{item.icon}</div>
                    <div>
                      <div className="text-[#6b7280] text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      <div className={`${item.color} font-semibold text-sm`}>{item.value}</div>
                    </div>
                    <svg
                      className="w-4 h-4 text-[#6b7280] ml-auto group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Working hours */}
              <div className="mt-8 p-4 rounded-xl bg-[#1a1a1a] border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#f59e0b]">🕐</span>
                  <span className="text-white font-semibold text-sm">Radno vrijeme</span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Pon – Pet</span>
                    <span className="text-white font-medium">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Subota</span>
                    <span className="text-white font-medium">09:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Nedjelja</span>
                    <span className="text-[#6b7280]">Zatvoreno</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-[#111] border border-white/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Hvala na upitu!</h3>
                  <p className="text-[#9ca3af] leading-relaxed">
                    Vaša poruka je primljena. Kontaktiraćemo vas u roku od 24 sata s besplatnom ponudom.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#f59e0b] text-sm hover:underline"
                  >
                    Pošalji novi upit →
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Zatražite besplatnu ponudu</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#9ca3af] text-xs uppercase tracking-wider mb-2">
                          Ime i prezime *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Vaše ime"
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-[#4b5563] focus:outline-none focus:border-[#f59e0b]/50 focus:bg-[#1a1a1a] transition-colors duration-200 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[#9ca3af] text-xs uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="vas@email.com"
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-[#4b5563] focus:outline-none focus:border-[#f59e0b]/50 transition-colors duration-200 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#9ca3af] text-xs uppercase tracking-wider mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+387 xx xxx xxx"
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-[#4b5563] focus:outline-none focus:border-[#f59e0b]/50 transition-colors duration-200 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[#9ca3af] text-xs uppercase tracking-wider mb-2">
                          Vrsta objekta *
                        </label>
                        <select
                          required
                          value={form.type}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#f59e0b]/50 transition-colors duration-200 text-sm appearance-none cursor-pointer"
                        >
                          {objectTypes.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#9ca3af] text-xs uppercase tracking-wider mb-2">
                        Poruka *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Opišite vaš projekat — dimenzije, lokacija, željeni rok..."
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-[#4b5563] focus:outline-none focus:border-[#f59e0b]/50 transition-colors duration-200 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-base rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#f59e0b]/20 hover:-translate-y-0.5"
                    >
                      Pošaljite upit →
                    </button>

                    <p className="text-center text-[#6b7280] text-xs">
                      Odgovaramo u roku od 24 sata. Bez obaveza.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
