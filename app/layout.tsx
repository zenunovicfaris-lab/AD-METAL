import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AD Metal — Metalne konstrukcije nove generacije",
  description:
    "A-frame vikendice, montažne garaže i čelične hale — brzo, kvalitetno, pouzdano. Kontaktirajte nas za besplatnu ponudu.",
  keywords: [
    "metalne konstrukcije",
    "a-frame vikendice",
    "montažne garaže",
    "čelične hale",
    "bosna",
    "AD Metal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
