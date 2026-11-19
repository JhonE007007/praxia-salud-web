import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, CircleCheck, Clock, Mail, MapPin, Monitor, Pause, Play, Users, Volume2, VolumeX } from "lucide-react";
import { Icon, WhatsApp, Instagram, Facebook, TikTok, LinkedIn } from "./Icons";
import { areas, contacto, cursos, galeria, nosotros, waLink } from "@/data/site";

/* ── Reveal on scroll ───────────────────────── */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Áreas de simulación ────────────────────── */
export function Areas() {
  return (
    <section id="simulacion" className="relative overflow-hidden py-[70px] md:py-[120px]">
      <div className="blob left-[-160px] top-[60px] h-[520px] w-[520px] bg-brand-sky opacity-50" />
      <div className="blob bottom-[-80px] right-[-120px] h-[460px] w-[460px] bg-[#9bd6ff] opacity-50" />
      <div className="relative mx-auto max-w-site px-5 md:px-10">
        <div className="reveal mb-8 flex items-end justify-between gap-10 md:mb-14">
          <div>
            <div className="kicker">Áreas de simulación</div>
            <h2 className="h2">Entrenamiento que se <span className="text-brand">siente real</span></h2>
            <p className="lead">Escenarios clínicos con maniquíes y monitores que responden en tiempo real, guiados por especialistas.</p>
          </div>
          <a href="#cursos" className="btn btn-primary hidden md:inline-flex">Ver cursos <ArrowRight size={18} /></a>
        </div>
        <div className="grid gap-3.5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {areas.map((a, k) => (
            <article
              key={a.titulo}
              className="reveal glass glass-light grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-[22px] p-6 md:block md:rounded-[28px] md:p-8"
              style={{ transitionDelay: `${(k % 3) * 80}ms` }}
            >
              <div className="icon-chip-light row-span-2 h-[52px] w-[52px] rounded-[18px] md:h-[62px] md:w-[62px] md:rounded-[20px]">
                <Icon name={a.icono} size={28} />
              </div>
              <h3 className="mt-0.5 text-[17px] font-bold md:mb-2.5 md:mt-6 md:text-[21px]">{a.titulo}</h3>
              <p className="text-[13.5px] leading-relaxed text-muted md:text-[15px]">{a.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Cursos ─────────────────────────────────── */
export function Cursos() {
  const activos = cursos.filter((c) => c.activo);
  return (
    <section id="cursos" className="relative overflow-hidden bg-navy-deep py-[70px] text-white md:py-[120px]">
      <div className="blob right-[-200px] top-[-150px] h-[600px] w-[600px] bg-brand opacity-30" />
      <div className="blob bottom-[-200px] left-[-150px] h-[500px] w-[500px] bg-[#1d4f9a] opacity-60" />
      <div className="relative mx-auto max-w-site px-5 md:px-10">
        <div className="reveal mb-8 md:mb-12">
          <div className="kicker !text-brand-sky">Cursos</div>
          <h2 className="h2">Próximos <span className="text-brand">cursos</span></h2>
        </div>
        <div className="flex flex-col gap-8">
          {activos.map((c) => (
            <article key={c.id} className="reveal glass grid overflow-hidden rounded-[28px] md:rounded-[36px] lg:grid-cols-[1.05fr_1fr]">
              <div className="relative min-h-[260px] lg:min-h-[540px]">
                <img src={c.imagen} alt={`Curso ${c.nombre}`} className="absolute inset-0 h-full w-full object-cover" />
                <div className="glass absolute left-4 top-4 rounded-3xl px-4 py-3 text-center leading-none md:left-7 md:top-7 md:px-5 md:py-4">
                  <small className="block text-[11px] font-bold tracking-[0.22em] text-brand-sky">INICIA</small>
                  <b className="mb-0.5 mt-1.5 block text-[40px] font-extrabold md:text-[54px]">{c.dia}</b>
                  <span className="text-[15px] font-extrabold tracking-[0.2em]">{c.mes}</span>
                </div>
              </div>
              <div className="p-6 md:p-14">
                <div className="kicker !text-brand-sky">Programa</div>
                <h3 className="mt-3 text-[34px] font-extrabold leading-none md:text-5xl">
                  {c.nombre} {c.nombreDestacado}
                </h3>
                <div className="my-5 flex flex-wrap gap-2 md:my-6">
                  <Tag icon={<Monitor size={16} />}>{c.modalidad}</Tag>
                  <Tag icon={<Calendar size={16} />}>Inicia {c.inicio}</Tag>
                  <Tag icon={<Users size={16} />}>{c.cupos} cupos</Tag>
                </div>
                <p className="text-[15px] leading-relaxed text-white/80 md:text-[17px]">{c.descripcion}</p>
                {c.temario && (
                  <ul className="my-6 grid gap-2.5 sm:grid-cols-2 md:my-8 md:gap-3.5">
                    {c.temario.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm font-semibold md:text-[15px]">
                        <CircleCheck size={22} className="shrink-0 text-brand-sky" strokeWidth={1.6} /> {t}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mb-7 flex items-center gap-3.5">
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/15">
                    <i className="block h-full rounded-full bg-gradient-to-r from-brand-sky to-brand" style={{ width: `${c.ocupacion}%` }} />
                  </div>
                  <small className="whitespace-nowrap text-sm font-bold text-white/80">{c.cupos} cupos disponibles</small>
                </div>
                <a
                  href={waLink(`Hola Praxia Salud, quiero reservar mi cupo en el curso ${c.nombre} ${c.nombreDestacado ?? ""} (inicia el ${c.inicio}).`)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  <WhatsApp /> Reservar mi cupo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tag({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold md:text-[13px]">
      {icon}
      {children}
    </span>
  );
}

/* ── Nosotros ───────────────────────────────── */
export function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-[70px] md:py-[120px]">
      <div className="blob right-[-100px] top-20 h-[480px] w-[480px] bg-brand-sky opacity-40" />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-[70px]">
        <div className="reveal relative h-[380px] md:h-[600px]">
          <img src="/img/v34.jpg" alt="Equipo de salud en simulación" className="absolute left-0 top-0 h-[72%] w-[72%] rounded-[30px] object-cover object-[50%_35%] shadow-[0_30px_60px_rgba(11,42,85,.25)]" />
          <img src="/img/v7.jpg" alt="Simulación en quirófano" className="absolute bottom-0 right-0 h-[56%] w-[56%] rounded-[30px] border-8 border-white object-cover shadow-[0_30px_60px_rgba(11,42,85,.25)]" />
          <div className="glass glass-light absolute bottom-6 left-4 flex max-w-[280px] items-center gap-3.5 rounded-3xl p-4 md:bottom-8 md:left-6">
            <div className="icon-chip-light h-12 w-12 rounded-2xl"><Users size={24} strokeWidth={1.6} /></div>
            <div>
              <b className="block text-[15px]">Grupos reducidos</b>
              <small className="text-[13px] text-muted">Práctica supervisada por especialistas</small>
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="kicker">Quiénes somos</div>
          <h2 className="h2">{nosotros.titulo} <span className="text-brand">{nosotros.destacado}</span></h2>
          <p className="lead">{nosotros.texto}</p>
          <div className="mt-8 flex flex-col gap-3.5">
            {nosotros.pasos.map((p, k) => (
              <div key={p.titulo} className="glass glass-light flex items-center gap-4 rounded-[22px] px-5 py-4">
                <div className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#2bb6ff] to-navy font-extrabold text-white">
                  0{k + 1}
                </div>
                <div>
                  <b className="block text-[17px]">{p.titulo}</b>
                  <small className="text-sm text-muted">{p.texto}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Video + galería ────────────────────────── */
export function Video() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <section id="video" className="relative overflow-hidden bg-navy-deep py-[70px] text-white md:py-[120px]">
      <div className="blob left-[30%] top-[-160px] h-[520px] w-[520px] bg-brand opacity-30" />
      <div className="relative mx-auto max-w-site px-5 md:px-10">
        <div className="reveal mb-8 text-center md:mb-12">
          <div className="kicker !text-brand-sky">Conoce Praxia</div>
          <h2 className="h2">Aprender <span className="text-brand">haciendo</span></h2>
        </div>
        <div className="reveal grid gap-4 lg:grid-cols-[380px_1fr] lg:gap-6">
          <div className="glass relative mx-auto aspect-[9/16] w-full max-w-[380px] rounded-[32px] p-2.5">
            <video
              ref={ref}
              src="/video/praxia.mp4"
              poster="/img/poster.jpg"
              muted={muted}
              loop
              playsInline
              preload="metadata"
              className="h-full w-full rounded-[24px] object-cover"
              onClick={toggle}
            />
            <div className="absolute inset-x-5 bottom-5 flex justify-between">
              <button onClick={toggle} className="glass grid h-12 w-12 place-items-center rounded-full" aria-label={playing ? "Pausar video" : "Reproducir video"}>
                {playing ? <Pause size={20} /> : <Play size={20} fill="white" className="ml-0.5" />}
              </button>
              <button onClick={() => setMuted((m) => !m)} className="glass grid h-12 w-12 place-items-center rounded-full" aria-label={muted ? "Activar sonido" : "Silenciar"}>
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {galeria.map((g, k) => (
              <figure key={g.src} className={`group relative overflow-hidden rounded-[22px] ${k === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={g.src} alt={g.titulo} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="glass absolute bottom-3 left-3 rounded-xl px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide">{g.titulo}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Aliados ────────────────────────────────── */
export function Aliados() {
  return (
    <section id="aliados" className="bg-white py-16 md:py-20">
      <div className="reveal mx-auto max-w-site px-5 text-center md:px-10">
        <div className="kicker">Confían en nosotros</div>
        <h2 className="h2 !text-[28px] md:!text-[40px]">Instituciones y aliados</h2>
        <div className="-mx-5 mt-8 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0">
        <img
          src="/img/aliados_wide.jpg"
          alt="FLASIC, SANESPI, Society of Critical Care Medicine, ARMTY, MSP, Universidad Central del Ecuador, IESS, UDLA, Ministerio del Trabajo, PUCE, Clínicas Atlas"
          className="mx-auto w-[760px] max-w-none opacity-70 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0 md:w-full md:max-w-[1100px]"
        />
        </div>
      </div>
    </section>
  );
}

/* ── Contacto ───────────────────────────────── */
export function Contacto() {
  const items = [
    { icon: <WhatsApp size={22} />, label: "WhatsApp", value: contacto.whatsappVisible, href: waLink("Hola Praxia Salud, quiero información.") },
    { icon: <Mail size={22} strokeWidth={1.6} />, label: "Correo", value: contacto.email, href: `mailto:${contacto.email}` },
    { icon: <MapPin size={22} strokeWidth={1.6} />, label: contacto.ciudad, value: contacto.direccion, href: contacto.mapsUrl || undefined },
    { icon: <Clock size={22} strokeWidth={1.6} />, label: "Horario", value: contacto.horario },
  ];
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy-deep py-[70px] text-white md:py-[110px]">
      <img src="/img/v28.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="blob left-[30%] top-[-120px] h-[520px] w-[520px] bg-brand opacity-35" />
      <div className="relative mx-auto max-w-site px-5 md:px-10">
        <div className="reveal glass grid items-center gap-10 rounded-[28px] p-6 md:rounded-[40px] md:p-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="kicker !text-brand-sky">Capacita a tu equipo</div>
            <h2 className="h2">Vive la experiencia <span className="text-brand">Praxia</span></h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Cursos abiertos, programas a medida para hospitales y clínicas, y convenios con universidades.
            </p>
            <a href={waLink("Hola Praxia Salud, quiero información sobre capacitaciones.")} target="_blank" rel="noopener" className="btn btn-primary mt-8">
              <WhatsApp /> Escríbenos por WhatsApp
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {items.map((it) => {
              const inner = (
                <>
                  <div className="icon-chip h-[46px] w-[46px] rounded-2xl">{it.icon}</div>
                  <div className="min-w-0">
                    <small className="block text-[13px] text-white/70">{it.label}</small>
                    <b className="block truncate text-base md:text-[17px]">{it.value}</b>
                  </div>
                </>
              );
              return it.href ? (
                <a key={it.label} href={it.href} target="_blank" rel="noopener" className="glass flex items-center gap-3.5 rounded-[20px] px-5 py-4 transition hover:-translate-y-0.5">{inner}</a>
              ) : (
                <div key={it.label} className="glass flex items-center gap-3.5 rounded-[20px] px-5 py-4">{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────── */
export function Footer() {
  const redes = [
    { href: contacto.redes.instagram, icon: <Instagram size={20} />, label: "Instagram" },
    { href: contacto.redes.facebook, icon: <Facebook size={20} />, label: "Facebook" },
    { href: contacto.redes.tiktok, icon: <TikTok size={20} />, label: "TikTok" },
    { href: contacto.redes.linkedin, icon: <LinkedIn size={20} />, label: "LinkedIn" },
  ].filter((r) => r.href);
  return (
    <footer className="bg-navy-night py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-10">
        <img src="/img/logo_white.png" alt="Praxia" className="h-9 opacity-90" />
        {redes.length > 0 && (
          <div className="flex gap-2">
            {redes.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener" aria-label={r.label} className="glass grid h-10 w-10 place-items-center rounded-full text-white">{r.icon}</a>
            ))}
          </div>
        )}
        <span>© {new Date().getFullYear()} Praxia Salud · Del conocimiento a la práctica</span>
      </div>
    </footer>
  );
}

/* ── Botón flotante de WhatsApp ─────────────── */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola Praxia Salud, quiero información.")}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.45)] transition hover:scale-105 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <WhatsApp size={30} />
    </a>
  );
}
