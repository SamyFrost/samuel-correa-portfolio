import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Cursor } from "./components/Cursor";
import { Header } from "./components/Header";
import { Preloader } from "./components/Preloader";
import { SmoothScroll } from "./components/SmoothScroll";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Packages } from "./components/sections/Packages";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { lang } = useLanguage();
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <SmoothScroll />
      <Cursor />
      <Header />

      <main style={{ visibility: ready ? "visible" : "hidden" }}>
        {/* Al cambiar de idioma el copy hace un fade corto; el layout no se mueve. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Hero />
            <Marquee />
            <About />
            <Work />
            <Services />
            <Packages />
            <Process />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
