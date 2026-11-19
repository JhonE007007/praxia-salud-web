import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Aliados, Areas, Contacto, Cursos, Footer, Video, WhatsAppFloat, useReveal } from "@/components/Sections";
import { Ecosistema, Membresia, Nosotros } from "@/components/Ecosistema";

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
        <Ecosistema />
        <Membresia />
        <Video />
        <Aliados />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
