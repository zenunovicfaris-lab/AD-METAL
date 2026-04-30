"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    icon: "⚡",
    title: "Brza montaža",
    description:
      "Minimalno čekanje, maksimalna efikasnost. Vaš objekat gotov u roku koji odgovara vama.",
    stat: "< 30 dana",
    statLabel: "prosječna montaža",
  },
  {
    number: "02",
    icon: "🏗️",
    title: "Vrhunska kvaliteta",
    description:
      "Čelična konstrukcija koja traje desetljećima. Samo certificirani materijali, bez kompromisa.",
    stat: "10+",
    statLabel: "godina garancije",
  },
  {
    number: "03",
    icon: "📐",
    title: "Po vašoj mjeri",
    description:
      "Svaki objekat prilagođen vašim potrebama. Od dimenzija do završnih detalja.",
    stat: "100%",
    statLabel: "prilagodljivo",
  },
  {
    number: "04",
    icon: "💰",
    title: "Konkurentna cijena",
    description:
      "Transparentna kalkulacija bez skrivenih troškova. Najbolji odnos cijene i kvaliteta u regionu.",
    stat: "#1",
    statLabel: "u regiji",
  },
];

export default function WhyUs() {
  return (
    <section id="o-nama" className="py-24 bg-[#141414] relative overflow-hidden">
      {/* Subtle brushed metal grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — same editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Naše prednosti
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Zašto AD Metal?
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl leading-relaxed">
            Više od 10 godina gradimo povjerenje kroz kvalitet, brzinu i transparentnost.
          </p>
        </motion.div>

        {/* Cards — sharp, steel-profile borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
          {features.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#1a1a1a] hover:bg-[#1f1f1f] p-7 transition-colors duration-300"
            >
              {/* Number */}
              <div className="text-[#f59e0b] text-xs font-bold tracking-[0.3em] uppercase mb-6">
                {f.number}
              </div>

              {/* Stat — amber, prominent */}
              <div className="mb-6">
                <div className="text-[#f59e0b] text-3xl font-black tabular-nums leading-none">
                  {f.stat}
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                  {f.statLabel}
                </div>
              </div>

              {/* Divider — steel profile feel */}
              <div className="w-8 h-[2px] bg-zinc-700 group-hover:bg-[#f59e0b] mb-5 transition-colors duration-500" />

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2 tracking-tight">{f.title}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip — industrial feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-px bg-[#f59e0b] grid grid-cols-1 sm:grid-cols-2 items-center"
        >
          <div className="px-8 py-6 bg-[#1a1a1a] border-r border-zinc-800 sm:border-r-0">
            <div className="text-white font-bold text-lg tracking-tight">
              Besplatna konsultacija i kalkulacija
            </div>
            <div className="text-zinc-400 text-sm mt-1">
              Opišite nam vaš projekat — odgovaramo u roku od 24 sata.
            </div>
          </div>
          <button
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-6 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-sm tracking-[0.2em] uppercase text-left sm:text-right transition-colors duration-200"
          >
            Kontaktirajte nas →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
