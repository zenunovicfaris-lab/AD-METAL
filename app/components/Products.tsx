"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const aframeModels = [
  {
    name: "Model Horizont",
    tag: "A-Frame",
    description:
      "Moderan A-frame dom s panoramskim staklenim površinama i prostranom terasom. Idealno za vikendicu ili turistički objekat.",
    image: "/images/ponude bez cijena/model-horizont.jpg",
    specs: [
      { k: "Tip", v: "Panoramsko staklo" },
      { k: "Terasa", v: "Prostrana, otvorena" },
      { k: "Namjena", v: "Vikendica / turizam" },
    ],
    accent: "Najpopularniji",
  },
  {
    name: "Model Aurora",
    tag: "A-Frame",
    description:
      "Kompaktan i funkcionalan A-frame s galerijom i optimalnim rasporedom prostora. Terasa s pogledom, elegancija u svakom detalju.",
    image: "/images/ponude bez cijena/model-aurora.jpg",
    specs: [
      { k: "Galerija", v: "Ugrađena" },
      { k: "Terasa", v: "S pogledom" },
      { k: "Stil", v: "Kompaktan dizajn" },
    ],
    accent: null,
  },
  {
    name: "Model OLIMP",
    tag: "A-Frame",
    description:
      "40.8 m² + galerija 10 m² na tlocrtu 8.5×4.8 m. Premijum A-frame objekat po konkurentnoj cijeni.",
    image: "/images/ponude sa cijenama/olimp.jpg",
    specs: [
      { k: "Površina", v: "40.8 m² + 10 m² galerija" },
      { k: "Dimenzije", v: "8.5 × 4.8 m" },
      { k: "Cijena", v: "24.000 KM (PDV uklj.)" },
    ],
    accent: "24.000 KM",
  },
];

function AFrameGrid() {
  return (
    <div className="mb-20">
      {/* Category header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="flex items-end justify-between mb-8 pb-4 border-b border-zinc-200"
      >
        <div>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.25em] uppercase mb-1">01</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            A-Frame Vikendice
          </h3>
        </div>
        <p className="hidden sm:block text-zinc-500 text-sm max-w-xs text-right leading-relaxed">
          Tri modela za svaki budžet i lokaciju
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
        {aframeModels.map((model, i) => (
          <motion.div
            key={model.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={i + 1}
            className="group bg-white hover:bg-zinc-50 transition-colors duration-300"
          >
            {/* Image — full bleed, sharp corners */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {model.accent && (
                <div className="absolute top-0 right-0 bg-[#f59e0b] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
                  {model.accent}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 border border-zinc-200 px-2 py-0.5">
                  {model.tag}
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-zinc-900 mb-2 tracking-tight">{model.name}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">{model.description}</p>

              {/* Specs */}
              <div className="space-y-2 mb-6">
                {model.specs.map((s) => (
                  <div key={s.k} className="flex justify-between items-center text-sm border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400 font-medium">{s.k}</span>
                    <span className="text-zinc-800 font-bold">{s.v}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full py-3 bg-zinc-900 hover:bg-[#f59e0b] text-white hover:text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
              >
                Zatražite ponudu →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GarageSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      className="mb-20"
    >
      {/* Category header */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-zinc-200">
        <div>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.25em] uppercase mb-1">02</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Montažne Garaže
          </h3>
        </div>
        <p className="hidden sm:block text-zinc-500 text-sm text-right">Već od 6.000 KM</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200">
        {/* Big image */}
        <div className="relative h-72 lg:h-96 bg-white overflow-hidden group">
          <Image
            src="/images/ponude bez cijena/garaza.jpg"
            alt="Montažna garaža"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content panel */}
        <div className="bg-white p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-[#f59e0b] text-black text-xs font-bold tracking-widest uppercase px-3 py-1.5 mb-6">
              Od 6.000 KM
            </div>
            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              Čelična konstrukcija s TR limom ili sendvič panelima. Rolo ili klasična garažna vrata,
              opcija daljinskog upravljanja. Izrada po mjeri kupca.
            </p>

            <div className="grid grid-cols-2 gap-px bg-zinc-100">
              {[
                { k: "Dimenzije", v: "6 × 3 m (po mjeri)" },
                { k: "Konstrukcija", v: "Čelik" },
                { k: "Obloga", v: "TR lim / sendvič" },
                { k: "Vrata", v: "Rolo / klasična" },
              ].map((s) => (
                <div key={s.k} className="bg-white px-4 py-3">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{s.k}</div>
                  <div className="text-sm font-bold text-zinc-800 mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 py-3.5 bg-zinc-900 hover:bg-[#f59e0b] text-white hover:text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
          >
            Zatražite ponudu →
          </button>
        </div>

        {/* Additional images */}
        <div className="relative h-48 bg-white overflow-hidden group">
          <Image
            src="/images/ponude bez cijena/garaza-2.jpg"
            alt="Montažna garaža 2"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
          />
        </div>
        <div className="relative h-48 bg-white overflow-hidden group">
          <Image
            src="/images/ponude bez cijena/garaza-3.jpg"
            alt="Montažna garaža 3"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}

function HaleSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
    >
      {/* Category header */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-zinc-200">
        <div>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.25em] uppercase mb-1">03</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Čelične Hale & Poslovni Objekti
          </h3>
        </div>
        <p className="hidden sm:block text-zinc-500 text-sm text-right">Od 50 KM/m²</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200">
        {/* Content first on this one */}
        <div className="bg-white p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
          <div>
            <div className="inline-block bg-zinc-900 text-[#f59e0b] text-xs font-bold tracking-widest uppercase px-3 py-1.5 mb-6">
              Od 50 KM/m²
            </div>
            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              Industrijske hale, skladišta i poslovni objekti svih veličina.
              Projektujemo i gradimo prema vašim specifikacijama — svaki detalj po mjeri.
            </p>

            <div className="grid grid-cols-2 gap-px bg-zinc-100">
              {[
                { k: "Cijena od", v: "50 KM/m²" },
                { k: "Namjena", v: "Hale, skladišta" },
                { k: "Veličina", v: "Po mjeri" },
                { k: "Rok", v: "Brza isporuka" },
              ].map((s) => (
                <div key={s.k} className="bg-white px-4 py-3">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{s.k}</div>
                  <div className="text-sm font-bold text-zinc-800 mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 py-3.5 bg-zinc-900 hover:bg-[#f59e0b] text-white hover:text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
          >
            Zatražite ponudu →
          </button>
        </div>

        {/* Image */}
        <div className="relative h-80 bg-zinc-100 overflow-hidden group order-1 lg:order-2">
          <Image
            src="/images/ponude sa cijenama/hale-50km.jpg"
            alt="Čelične hale"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="proizvodi" className="py-20 bg-[#f5f4f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mb-16"
        >
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Katalog proizvoda
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Naši proizvodi
          </h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-xl leading-relaxed">
            Od vikendica do industrijskih hala — gradimo objekte koji traju desetljećima.
          </p>
        </motion.div>

        <AFrameGrid />
        <GarageSection />
        <HaleSection />
      </div>
    </section>
  );
}
