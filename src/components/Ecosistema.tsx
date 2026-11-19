import { useState } from "react";
import {
  BadgeCheck, CircleCheck, Cog, Eye, GraduationCap, HeartHandshake, Microscope,
  Presentation, Stethoscope, Target, UserRoundPlus, type LucideIcon,
} from "lucide-react";
import { WhatsApp } from "./Icons";
import { asset } from "@/lib";
import { identidad, membresias, unidades, waLink, type Unidad } from "@/data/site";

const iconos: Record<Unidad["icono"], LucideIcon> = {
  academy: GraduationCap, sim: UserRoundPlus, discovery: Stethoscope, family: HeartHandshake,
  skills: Microscope, biomed: Cog, consulting: Presentation, cert: BadgeCheck,
};

/* ── Nosotros: identidad, misión y visión ───── */
export function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-[70px] md:py-[120px]">
      <div className="blob right-[-100px] top-20 h-[480px] w-[480px] bg-brand-sky opacity-40" />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-5 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-[70px]">
        <div className="reveal relative h-[380px] md:h-[620px]">
          <img src={asset("/img/eco/nosotros.jpg")} alt="Equipo Praxia en entrenamiento de RCP" className="absolute left-0 top-0 h-[74%] w-[74%] rounded-[30px] object-cover shadow-[0_30px_60px_rgba(11,42,85,.25)]" />
          <img src={asset("/img/eco/equipo.jpg")} alt="Instructores y participantes de Praxia" className="absolute bottom-0 right-0 h-[54%] w-[56%] rounded-[30px] border-8 border-white object-cover shadow-[0_30px_60px_rgba(11,42,85,.25)]" />
          <div className="glass glass-light absolute bottom-6 left-4 flex max-w-[270px] items-center gap-3.5 rounded-3xl p-4 md:bottom-10 md:left-6">
            <div className="icon-chip-light h-12 w-12 rounded-2xl"><GraduationCap size={24} strokeWidth={1.6} /></div>
            <div>
              <b className="block text-[15px]">8 unidades</b>
              <small className="text-[13px] text-muted">Un solo ecosistema de formación en salud</small>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="kicker">Quiénes somos</div>
          <h2 className="h2">{identidad.titular} <span className="text-brand">{identidad.destacado}</span></h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {identidad.noSomos.map((t) => (
              <span key={t} className="rounded-full border border-navy/15 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-muted md:text-sm">
                {t}
              </span>
            ))}
          </div>
          <p className="text-lg font-bold leading-snug md:text-[22px]">{identidad.somos}.</p>

          <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
            <Card icon={<Target size={22} strokeWidth={1.6} />} titulo="Nuestra misión" texto={identidad.mision} />
            <Card icon={<Eye size={22} strokeWidth={1.6} />} titulo="Nuestra visión" texto={identidad.vision} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, titulo, texto }: { icon: React.ReactNode; titulo: string; texto: string }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-navy-deep p-6 text-white shadow-[0_20px_40px_rgba(6,26,54,.25)]">
      <div className="blob -right-16 -top-16 h-40 w-40 bg-brand opacity-40" />
      <div className="icon-chip relative h-11 w-11 rounded-xl">{icon}</div>
      <h3 className="relative mb-2 mt-4 text-lg font-bold text-brand-sky">{titulo}</h3>
      <p className="relative text-sm leading-relaxed text-white/80">{texto}</p>
      <i className="absolute inset-x-0 bottom-0 h-1.5 bg-brand" />
    </div>
  );
}

/* ── Ecosistema: 8 unidades de negocio ──────── */
export function Ecosistema() {
  const [activa, setActiva] = useState(unidades[0].id);
  const u = unidades.find((x) => x.id === activa)!;
  const Ico = iconos[u.icono];

  return (
    <section id="ecosistema" className="relative overflow-hidden bg-navy-deep py-[70px] text-white md:py-[120px]">
      <div className="blob right-[-200px] top-[-150px] h-[600px] w-[600px] bg-brand opacity-30" />
      <div className="blob bottom-[-200px] left-[-150px] h-[500px] w-[500px] bg-[#1d4f9a] opacity-60" />
      <div className="relative mx-auto max-w-site px-5 md:px-10">
        <div className="reveal mb-8 md:mb-12">
          <div className="kicker !text-brand-sky">Ecosistema Praxia</div>
          <h2 className="h2">Las grandes <span className="text-brand">unidades de negocio</span></h2>
          <p className="max-w-[640px] text-[15px] leading-relaxed text-white/75 md:text-lg">
            Formación, entrenamiento, certificación y tecnología médica para profesionales, instituciones, estudiantes y familias.
          </p>
        </div>

        <div className="reveal grid gap-5 lg:grid-cols-[300px_1fr] lg:gap-7">
          {/* Selector de unidades */}
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0" role="tablist" aria-label="Unidades de negocio">
            {unidades.map((x) => {
              const I = iconos[x.icono];
              const on = x.id === activa;
              return (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiva(x.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-3.5 py-2.5 text-left transition lg:py-3 ${
                    on ? "glass !bg-brand/25 !border-brand-sky/60" : "border border-white/10 bg-white/[.04] hover:bg-white/10"
                  }`}
                >
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${on ? "bg-brand text-white" : "bg-white/10 text-brand-sky"}`}>
                    <I size={19} strokeWidth={1.7} />
                  </span>
                  <span>
                    <b className="block whitespace-nowrap text-sm tracking-wide">PRAXIA <span className="text-brand-sky">{x.nombre.toUpperCase()}</span></b>
                    <small className="hidden text-xs text-white/60 lg:block">{x.para}</small>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel de la unidad */}
          <article key={u.id} role="tabpanel" className="glass grid animate-[fadeUp_.5s_ease_both] overflow-hidden rounded-[28px] md:rounded-[36px] xl:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[240px] md:min-h-[320px]">
              <img src={asset(u.imagen)} alt={`Praxia ${u.nombre}`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent xl:bg-gradient-to-r xl:from-transparent xl:via-transparent xl:to-navy-deep/40" />
              <span className="glass absolute left-4 top-4 inline-flex items-center gap-2 rounded-full !bg-navy-deep/60 py-1.5 pl-1.5 pr-4 text-xs font-extrabold tracking-wider md:left-6 md:top-6">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand"><Ico size={15} /></span>
                PRAXIA {u.nombre.toUpperCase()}
              </span>
            </div>
            <div className="p-6 md:p-10">
              <h3 className="text-[26px] font-extrabold leading-tight md:text-[34px]">
                {u.titulo} <span className="text-brand-sky">{u.destacado}</span>
              </h3>
              {u.lema && <p className="mt-2 text-sm font-semibold text-white/70 md:text-base">{u.lema}</p>}
              <ul className={`mt-6 grid gap-x-5 gap-y-2.5 ${u.servicios.length > 9 ? "sm:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-1"}`}>
                {u.servicios.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                    <CircleCheck size={18} className="shrink-0 text-brand-sky" strokeWidth={1.7} /> {s}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Praxia Salud, quiero información sobre Praxia ${u.nombre}.`)}
                target="_blank"
                rel="noopener"
                className="btn btn-primary mt-8 w-full sm:w-auto"
              >
                <WhatsApp /> Quiero información
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ── Membresía ──────────────────────────────── */
export function Membresia() {
  return (
    <section id="membresia" className="relative overflow-hidden py-[70px] md:py-[110px]">
      <div className="blob left-[-140px] top-10 h-[460px] w-[460px] bg-brand-sky opacity-45" />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-5 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="reveal">
          <div className="kicker">Membresía Praxia</div>
          <h2 className="h2">Entrena de forma <span className="text-brand">continua</span></h2>
          <p className="lead">Elige el plan que se adapta a tu ritmo y mantén tus habilidades al día con el ecosistema Praxia.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {membresias.map((m) => (
              <div key={m.plan} className="glass glass-light rounded-[24px] p-5 text-center">
                <CircleCheck size={26} className="mx-auto text-brand" strokeWidth={1.6} />
                <b className="mt-3 block text-xl font-extrabold uppercase tracking-wide text-navy">{m.plan}</b>
                <small className="mt-1 block text-sm text-muted">{m.precio ?? "Consulta precio"}</small>
                {m.beneficios && (
                  <ul className="mt-3 space-y-1 text-left text-sm text-muted">
                    {m.beneficios.map((b) => <li key={b}>· {b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <a href={waLink("Hola Praxia Salud, quiero información sobre la membresía.")} target="_blank" rel="noopener" className="btn btn-primary mt-7">
            <WhatsApp /> Consultar membresía
          </a>
        </div>
        <div className="reveal relative">
          <img src={asset("/img/eco/membresia.jpg")} alt="Comunidad Praxia" className="h-[320px] w-full rounded-[32px] object-cover shadow-[0_30px_60px_rgba(11,42,85,.25)] md:h-[480px]" />
        </div>
      </div>
    </section>
  );
}
