"use client";

import { motion } from "framer-motion";

const searchResults = [
  {
    position: 1,
    isClient: true,
    title: "AD Metal – Metalne konstrukcije | A-Frame vikendice, garaže, hale",
    url: "admetalba.com",
    breadcrumb: "admetalba.com › proizvodi",
    description:
      "⭐ Čelične konstrukcije prve klase u BiH. A-frame vikendice od 24.000 KM, montažne garaže od 6.000 KM. Besplatna ponuda za 24h. +387 66 130 622",
    tag: "Vaša kompanija",
  },
  {
    position: 2,
    isClient: false,
    title: "Metal konstrukcije Sarajevo – Hale i garaže",
    url: "metalkons.ba",
    breadcrumb: "metalkons.ba › usluge",
    description:
      "Nudimo montažne metalne garaže i hale. Kontaktirajte nas za ponudu.",
    tag: null,
  },
  {
    position: 3,
    isClient: false,
    title: "Čelična gradnja d.o.o – Bosna i Hercegovina",
    url: "celikagrađnja.ba",
    breadcrumb: "celikagrađnja.ba",
    description:
      "Gradnja čeličnih objekata za industriju i privatne klijente.",
    tag: null,
  },
];

export default function SeoPreview() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#f59e0b] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Vidljivost na internetu
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Vaši klijenti vas{" "}
              <span className="text-[#f59e0b]">traže online.</span>
              <br />
              Da li vas nalaze?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Ovaj sajt je osmišljen da postane vaš broj jedan prodavač — 24 sata dnevno,
              7 dana u sedmici. Optimiziran za Google pretragu, brz na mobilnim uređajima,
              i dizajniran da pretvori posjetioce u klijente.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🎯", text: "Ciljana optimizacija za \"čelične konstrukcije BiH\"" },
                { icon: "📱", text: "Brz na svakom uređaju — Google nagrađuje brzinu" },
                { icon: "🔗", text: "Lokalni SEO — Mostar, Sarajevo, cijela BiH" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Google SERP mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Browser chrome */}
            <div className="bg-[#202124] rounded-t-xl overflow-hidden shadow-2xl shadow-black/60">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-[#303134] rounded-full px-4 py-1.5 flex items-center gap-2">
                  <svg className="w-3 h-3 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-zinc-300 text-xs">google.com/search?q=čelične+konstrukcije+bih</span>
                </div>
              </div>

              {/* Search results area */}
              <div className="bg-white p-5 space-y-1">
                {/* Google search bar replica */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-100">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                    <path fill="#FBBC05" d="M11.68 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.34-5.7z"/>
                    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"/>
                  </svg>
                  <span className="text-zinc-800 text-sm font-medium">čelične konstrukcije bih</span>
                  <div className="ml-auto flex items-center gap-3">
                    <div className="text-zinc-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs mb-3">Oko 12.400 rezultata (0,38 sekundi)</p>

                {/* Results */}
                {searchResults.map((r) => (
                  <div
                    key={r.position}
                    className={`p-3 rounded-lg transition-colors ${r.isClient ? "bg-amber-50 border-l-4 border-[#f59e0b]" : "hover:bg-zinc-50"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-4 h-4 rounded-full bg-zinc-200 flex-shrink-0" />
                      <span className="text-zinc-600 text-xs">{r.breadcrumb}</span>
                      {r.tag && (
                        <span className="ml-auto text-[10px] font-bold text-[#d97706] bg-amber-100 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          {r.tag}
                        </span>
                      )}
                    </div>
                    <h4 className={`text-sm font-medium mb-1 leading-snug ${r.isClient ? "text-[#1a0dab] font-semibold" : "text-[#1a0dab]"}`}>
                      {r.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${r.isClient ? "text-zinc-700" : "text-zinc-500"}`}>
                      {r.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center gap-2 text-zinc-500 text-sm">
              <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Simulacija Google prikaza — vaša kompanija na prvom mjestu
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
