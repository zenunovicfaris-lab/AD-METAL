"use client";

import Image from "next/image";

const quickLinks = [
  { label: "Proizvodi", href: "#proizvodi" },
  { label: "O nama", href: "#o-nama" },
  { label: "Projekti", href: "#projekti" },
  { label: "Kontakt", href: "#kontakt" },
];

const products = [
  { label: "A-Frame vikendice", href: "#proizvodi" },
  { label: "Montažne garaže", href: "#proizvodi" },
  { label: "Čelične hale", href: "#proizvodi" },
];

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/logo.png"
                  alt="AD Metal logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-xl leading-tight">AD METAL</div>
                <div className="text-[#f59e0b] text-xs tracking-widest uppercase font-medium">
                  Konstrukcije
                </div>
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs mb-6">
              AD METAL – metalne konstrukcije nove generacije. Gradimo snove od čelika — brzo,
              kvalitetno, pouzdano.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/profile.php?id=61584035964875"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/10 flex items-center justify-center text-[#9ca3af] hover:text-[#3b82f6] transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ad.metal_construction"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 flex items-center justify-center text-[#9ca3af] hover:text-pink-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Navigacija
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-[#9ca3af] hover:text-[#f59e0b] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#f59e0b] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Proizvodi
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    onClick={(e) => handleSmoothScroll(e, p.href)}
                    className="text-[#9ca3af] hover:text-[#f59e0b] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#f59e0b] transition-all duration-300" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 p-4 rounded-xl bg-[#f59e0b]/5 border border-[#f59e0b]/20">
              <p className="text-[#9ca3af] text-xs mb-3 leading-relaxed">
                Besplatna ponuda u 24h
              </p>
              <a
                href="tel:+38766130622"
                className="flex items-center gap-2 text-[#f59e0b] font-bold text-sm hover:underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +387 66 130 622
              </a>
            </div>
          </div>
        </div>

        {/* Developer credit bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7280] text-xs">
            © 2025 AD Metal. Sva prava zadržana.
          </p>

          {/* Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            <span className="text-[#6b7280] text-xs">
              Dizajn &amp; razvoj:{" "}
              <a
                href="https://www.fariszenunovic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] hover:text-white transition-colors duration-200 font-semibold"
              >
                Faris Zenunović
              </a>
              <span className="text-[#4b5563] mx-1">·</span>
              <span className="text-[#9ca3af]">Lead Developer &amp; SEO Inženjer</span>
            </span>

            <div className="flex items-center gap-3">
              {/* Portfolio */}
              <a
                href="https://www.fariszenunovic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-[#f59e0b] transition-colors duration-200"
                aria-label="Portfolio"
                title="Portfolio"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/znnvyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/faris.zenunovic.9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-[#3b82f6] transition-colors duration-200"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Agency */}
              <a
                href="https://www.zt-media.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-[#f59e0b] transition-colors duration-200 text-[10px] font-bold tracking-wider uppercase border border-[#6b7280]/30 hover:border-[#f59e0b]/40 px-2 py-0.5"
                title="ZT Media Digital"
              >
                ZT Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
