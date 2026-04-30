"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const comingSoon = [
  { label: "Stambeni kompleks", location: "Sarajevo" },
  { label: "Turistički resort", location: "Neum" },
  { label: "Industrijska hala", location: "Zenica" },
];

export default function Projects() {
  return (
    <section id="projekti" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#f59e0b] text-sm font-bold tracking-widest uppercase">
            Naš rad
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Projekti &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fcd34d]">
              Reference
            </span>
          </h2>
          <p className="mt-4 text-[#9ca3af] text-lg max-w-2xl mx-auto leading-relaxed">
            Svaki završen projekat je dokaz naše posvećenosti kvalitetu i rokovima.
          </p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#f59e0b] to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Featured project */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-[#f59e0b]/20 group">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(245,158,11,0.05)_25%,transparent_25%,transparent_50%,rgba(245,158,11,0.05)_50%,rgba(245,158,11,0.05)_75%,transparent_75%,transparent)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#111]/95 to-[#111]" />

            <div className="relative p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm font-bold tracking-wider uppercase">
                    Uspješno završeno
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                  Čelična konstrukcija u Mostaru za{" "}
                  <span className="text-[#f59e0b]">Adria Tours Mostar</span>
                </h3>

                <p className="text-[#9ca3af] text-lg leading-relaxed mb-8">
                  Uspješno završena montaža čelične konstrukcije — potvrda naše pouzdanosti u
                  realizaciji zahtjevnih projekata. Isporuka u roku, prema specifikacijama klijenta.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Čelična konstrukcija", "Mostar", "Poslovni objekat", "2024"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-white/10 text-[#9ca3af] text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-[#9ca3af] text-sm">
                  <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Mostar, Bosna i Hercegovina
                </div>
              </div>

              {/* Decorative stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Isporučeno na vrijeme", icon: "✓" },
                  { value: "0", label: "Reklamacija", icon: "★" },
                  { value: "2024", label: "Godina realizacije", icon: "📅" },
                  { value: "BH", label: "Domaći materijali", icon: "🇧🇦" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl bg-[#1a1a1a] border border-white/5 group-hover:border-[#f59e0b]/10 transition-colors duration-500"
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="text-2xl font-black text-[#f59e0b]">{item.value}</div>
                    <div className="text-[#6b7280] text-xs mt-1 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming soon grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {comingSoon.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i + 1}
              className="relative h-48 rounded-xl overflow-hidden bg-[#111] border border-white/5"
            >
              {/* Blurred placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

              {/* Blur overlay */}
              <div className="absolute inset-0 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-[#6b7280] text-xs mt-1">{item.location}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-white/10 text-[#6b7280] text-xs font-medium">
                  Uskoro
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
