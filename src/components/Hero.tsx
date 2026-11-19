import { asset } from "@/lib";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Monitor, Play, Users } from "lucide-react";
import { WhatsApp, Icon } from "./Icons";
import { beneficios, cursos, institucional, waLink, type Curso } from "@/data/site";

type Slide = { tipo: "curso"; curso: Curso } | { tipo: "institucional" };

const slides: Slide[] = [
  ...cursos.filter((c) => c.activo).map((curso) => ({ tipo: "curso" as const, curso })),
  { tipo: "institucional" as const },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const go = useCallback((k: number) => setI((k + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setTimeout(() => go(i + 1), 8000);
    return () => clearTimeout(t);
  }, [i, paused, n, go]);

  const s = slides[i];
  const bg = s.tipo === "curso" ? "/img/quirofano.jpg" : institucional.imagen;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-deep text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img src={asset(bg)} alt="" className="absolute inset-0 h-full w-full object-cover object-[60%_35%]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            s.tipo === "curso"
              ? "linear-gradient(90deg,rgba(6,26,54,.96) 0%,rgba(6,26,54,.82) 50%,rgba(6,26,54,.55) 100%),linear-gradient(0deg,rgba(6,26,54,.95),transparent 40%)"
              : "linear-gradient(90deg,rgba(6,26,54,.95) 0%,rgba(6,26,54,.72) 40%,rgba(6,26,54,.15) 75%),linear-gradient(0deg,rgba(6,26,54,.9),transparent 35%)",
        }}
      />

      <div className="relative mx-auto max-w-site px-5 pb-8 pt-36 md:px-10 md:pb-10 md:pt-44 lg:min-h-[860px]">
        <div key={i} className="animate-[fadeUp_.7s_ease_both]">
          {s.tipo === "curso" ? <SlideCurso c={s.curso} /> : <SlideInstitucional />}
        </div>

        {n > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4 lg:mt-6">
            <button onClick={() => go(i - 1)} className="glass grid h-10 w-10 place-items-center rounded-full" aria-label="Anterior">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, k) => (
                <button
                  key={k}
                  onClick={() => go(k)}
                  aria-label={`Ir a la diapositiva ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-7 bg-brand" : "w-2 bg-white/35"}`}
                />
              ))}
            </div>
            <button onClick={() => go(i + 1)} className="glass grid h-10 w-10 place-items-center rounded-full" aria-label="Siguiente">
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Barra de beneficios */}
        <div className="glass mt-8 grid grid-cols-2 rounded-[22px] md:rounded-[28px] lg:grid-cols-4">
          {beneficios.map((b, k) => (
            <div
              key={b.titulo}
              className={`flex items-center gap-3 p-4 md:gap-3.5 md:px-6 md:py-6 ${k % 2 === 1 ? "border-l border-white/20" : ""} ${
                k > 1 ? "border-t border-white/20 lg:border-t-0" : ""
              } ${k === 2 ? "lg:border-l" : ""}`}
            >
              <div className="icon-chip h-10 w-10 rounded-xl md:h-[52px] md:w-[52px] md:rounded-2xl">
                <Icon name={b.icono} size={24} />
              </div>
              <div>
                <b className="block text-[12.5px] leading-tight md:text-base">{b.titulo}</b>
                <small className="hidden text-[13px] text-white/70 md:block">{b.texto}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideCurso({ c }: { c: Curso }) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
      <div className="max-w-[680px] flex-1">
        <span className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-semibold md:text-sm">
          <b className="rounded-full bg-brand px-2.5 py-1 text-[10px] tracking-wider md:text-xs">PRÓXIMO CURSO</b>
          {c.etiqueta}
        </span>
        <h1 className="mb-4 mt-5 text-[44px] font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-[84px]">
          {c.nombre}
          {c.nombreDestacado && (
            <span className="block bg-gradient-to-r from-brand-sky to-brand bg-clip-text text-transparent">{c.nombreDestacado}</span>
          )}
        </h1>
        <p className="max-w-[560px] text-[15.5px] leading-relaxed text-white/85 md:text-xl">{c.descripcion}</p>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap md:mt-8 md:gap-2.5">
          <Meta icon={<Calendar size={22} />} label="Inicio" value={c.inicio} />
          <Meta icon={<Monitor size={22} />} label="Modalidad" value={c.modalidad} />
          <Meta icon={<Users size={22} />} label="Cupos" value={`${c.cupos} disponibles`} />
        </div>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row md:mt-9 md:gap-3.5">
          <a
            href={waLink(`Hola Praxia Salud, quiero reservar mi cupo en el curso ${c.nombre} ${c.nombreDestacado ?? ""} (inicia el ${c.inicio}).`)}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            <WhatsApp /> Reservar mi cupo
          </a>
          <a href="#cursos" className="btn glass">
            Ver programa <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="glass relative h-[300px] w-full shrink-0 rounded-[28px] p-2 md:h-[460px] md:rounded-[36px] md:p-3 lg:h-[560px] lg:w-[470px]">
        <img src={asset(c.imagen)} alt={`Curso ${c.nombre}`} className="h-full w-full rounded-[22px] object-cover md:rounded-[26px]" />
        <div className="glass absolute left-5 top-5 rounded-3xl px-4 py-3 text-center leading-none md:left-8 md:top-8 md:px-5 md:py-4">
          <small className="block text-[11px] font-bold tracking-[0.22em] text-brand-sky">INICIA</small>
          <b className="mb-0.5 mt-1.5 block text-[40px] font-extrabold md:text-[54px]">{c.dia}</b>
          <span className="text-[15px] font-extrabold tracking-[0.2em]">{c.mes}</span>
        </div>
        <div className="glass absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-[20px] px-4 py-3 md:inset-x-7 md:bottom-7 md:px-5 md:py-4">
          <div>
            <small className="block text-xs font-semibold text-white/70">Cupos</small>
            <b className="whitespace-nowrap text-[15px]">{c.cupos} disponibles</b>
          </div>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/15">
            <i className="block h-full rounded-full bg-gradient-to-r from-brand-sky to-brand" style={{ width: `${c.ocupacion}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass flex items-center gap-2.5 rounded-2xl px-3 py-2.5 md:rounded-[18px] md:px-3.5 md:py-3">
      <span className="text-brand-sky">{icon}</span>
      <div>
        <small className="block text-[11px] font-semibold text-white/65 md:text-xs">{label}</small>
        <b className="text-[13px] leading-tight md:whitespace-nowrap md:text-sm">{value}</b>
      </div>
    </div>
  );
}

function SlideInstitucional() {
  return (
    <div className="flex flex-col gap-8 lg:min-h-[560px] lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-[760px]">
        <span className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-semibold md:text-sm">
          <b className="rounded-full bg-brand px-2.5 py-1 text-[10px] tracking-wider md:text-xs">PRAXIA SALUD</b>
          Centro de simulación médica
        </span>
        <h1 className="mb-5 mt-5 text-[44px] font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-[76px]">
          {institucional.titulo}
          <span className="block bg-gradient-to-r from-brand-sky to-brand bg-clip-text text-transparent">{institucional.destacado}</span>
        </h1>
        <p className="max-w-[560px] text-[15.5px] leading-relaxed text-white/85 md:text-xl">{institucional.descripcion}</p>
        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row md:gap-3.5">
          <a href="#simulacion" className="btn btn-primary">Ver áreas de simulación <ArrowRight size={18} /></a>
          <a href="#contacto" className="btn glass">Capacitación para instituciones</a>
        </div>
      </div>
      <a href="#video" className="group flex flex-col items-center gap-3 self-center" aria-label="Ver video institucional">
        <span className="glass grid h-24 w-24 place-items-center rounded-full transition group-hover:scale-105 md:h-32 md:w-32">
          <Play size={40} fill="white" className="ml-1.5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.18em]">Ver video</span>
      </a>
    </div>
  );
}
