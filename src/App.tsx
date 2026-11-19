import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Aliados, Areas, Contacto, Cursos, Footer, Nosotros, Video, WhatsAppFloat, useReveal } from "@/components/Sections";

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Areas />
        <Cursos />
        <Nosotros />
        <Video />
        <Aliados />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
