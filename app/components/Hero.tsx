"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        poster="/images/ponude%20bez%20cijena/garaza.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />

      {/* Industrial noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.5)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/20 bg-black/30 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-[#f59e0b] animate-pulse" />
          <span className="text-white/80 text-xs font-bold tracking-[0.25em] uppercase">
            Bosna &amp; Hercegovina
          </span>
        </motion.div>

        {/* Headline — editorial, not techy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.0] tracking-tight mb-6"
          style={{ fontVariationSettings: '"wght" 800' }}
        >
          Metalne konstrukcije
          <br />
          <span className="text-[#f59e0b]">nove generacije.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed font-normal tracking-wide"
        >
          A-frame vikendice, montažne garaže i čelične hale —
          brzo, kvalitetno, pouzdano.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => handleScroll("#proizvodi")}
            className="px-8 py-4 bg-[#f59e0b] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#d97706] transition-colors duration-200"
          >
            Pogledajte ponudu
          </button>

          <button
            onClick={() => handleScroll("#kontakt")}
            className="px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase hover:border-white/60 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
          >
            Kontaktirajte nas
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-px border border-white/10 bg-white/5 backdrop-blur-sm w-fit mx-auto"
        >
          {[
            { value: "100+", label: "Završenih projekata" },
            { value: "10+", label: "Godina iskustva" },
            { value: "24h", label: "Odgovor na upit" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-8 py-5 bg-black/20 ${i < 2 ? "border-r border-white/10" : ""}`}
            >
              <div className="text-2xl font-black text-[#f59e0b] tabular-nums">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
