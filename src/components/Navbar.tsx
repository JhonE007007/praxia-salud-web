import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsApp } from "./Icons";
import { waLink } from "@/data/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#simulacion", label: "Simulación" },
  { href: "#cursos", label: "Cursos" },
  { href: "#aliados", label: "Aliados" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 z-50 transition-all duration-300 ${scrolled ? "top-3" : "top-4 md:top-6"}`}>
      <div className="mx-auto max-w-site px-4 md:px-10">
        <nav
          className={`glass flex items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 md:py-3 md:pl-7 md:pr-3.5 ${
            scrolled ? "!bg-navy-deep/70" : ""
          }`}
          aria-label="Principal"
        >
          <a href="#inicio" aria-label="Praxia Salud, inicio">
            <img src="/img/logo_white.png" alt="Praxia · Del conocimiento a la práctica" className="h-8 md:h-10" />
          </a>

          <ul className="hidden items-center gap-8 text-[15px] font-semibold text-white lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-brand-sky">{l.label}</a>
              </li>
            ))}
          </ul>

          <a
            href={waLink("Hola Praxia Salud, quiero información sobre sus cursos.")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary hidden lg:inline-flex"
          >
            <WhatsApp /> Inscríbete
          </a>

          <button
            className="glass grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-3 rounded-[28px] !bg-navy-deep/80 p-3 lg:hidden">
            <ul className="flex flex-col text-white">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-white/10">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={waLink("Hola Praxia Salud, quiero información sobre sus cursos.")}
              target="_blank"
              rel="noopener"
              className="btn btn-primary mt-2 w-full"
            >
              <WhatsApp /> Inscríbete
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
