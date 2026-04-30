import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import SeoPreview from "./components/SeoPreview";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <SeoPreview />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
