"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

const slides = [
  {
    image: "/projects/residenciales/residencial1.jpeg",
    title: "Remodelación integral en CDMX y Estado de México con control, calidad y cumplimiento",
    description:
      "Ejecutamos proyectos residenciales, comerciales y corporativos en CDMX y Estado de México, con metodología profesional, supervisión puntual y acabados de alto estándar.",
  },
  {
    image: "/projects/corporativas/bridgestone1.jpeg",
    title: "Ejecución comercial y retail bajo estándares de marca",
    description:
      "Adecuaciones para franquicias y negocios con control presupuestal, calidad en acabados y cumplimiento operativo.",
  },
  {
    image: "/projects/corporativas/areadetrabajo.jpg",
    title: "Proyectos corporativos con metodología estructurada",
    description:
      "Desarrollamos adecuaciones empresariales con enfoque en tiempos, presupuesto, supervisión y resultados duraderos.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    function start() {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          setCurrent((prev) => (prev + 1) % slides.length);
        }
      }, 4000);
    }

    start();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const els = Array.from(main.querySelectorAll("section")) as HTMLElement[];
    if (!els.length) return;

    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function resetTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          setCurrent((prev) => (prev + 1) % slides.length);
        }
      }, 4000);
    }
  }

  function nextSlide() {
    resetTimer();
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    resetTimer();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
          resetTimer();
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Proyecto Proyecta"
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
          </div>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm font-medium text-white/90 backdrop-blur-sm">
              CDMX y Estado de México · Proyectos residenciales, comerciales y corporativos
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              {slides[current].title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-200">
              {slides[current].description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/contacto"
                className="inline-flex justify-center items-center rounded-xl bg-blue-700 px-7 py-3.5 text-white font-semibold shadow-lg shadow-blue-900/20 transition hover:bg-blue-800"
              >
                Solicitar cotización
              </a>
              <a
                href="/proyectos"
                className="inline-flex justify-center items-center rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-white font-semibold backdrop-blur-sm transition hover:bg-white/15"
              >
                Ver proyectos
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">300+</div>
                <p className="mt-1 text-sm text-gray-200">Proyectos ejecutados</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">85+</div>
                <p className="mt-1 text-sm text-gray-200">Clientes satisfechos</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">2010–2026</div>
                <p className="mt-1 text-sm text-gray-200">Experiencia acumulada en ejecución y remodelación</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/35 hover:bg-black/55 text-white h-11 w-11 rounded-full flex items-center justify-center backdrop-blur-sm transition"
          aria-label="Anterior"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/35 hover:bg-black/55 text-white h-11 w-11 rounded-full flex items-center justify-center backdrop-blur-sm transition"
          aria-label="Siguiente"
        >
          ›
        </button>

                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                resetTimer();
                setCurrent(i);
              }}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] reveal">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Nuestros servicios de remodelación
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
                Soluciones residenciales, comerciales y corporativas con ejecución profesional
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Ejecutamos proyectos en Ciudad de México y Estado de México con planeación, control de obra, supervisión puntual y acabados de alto estándar.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3 text-left">
              <a
                href="/remodelacion-residencial"
                className="group rounded-[24px] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Residencial
                </p>
                <h3 className="mt-4 text-xl font-semibold text-neutral-950">
                  Remodelación residencial
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Remodelación de casas, departamentos y residencias con enfoque en calidad, control de obra y acabados premium.
                </p>
              </a>

              <a
                href="/remodelacion-comercial"
                className="group rounded-[24px] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Comercial
                </p>
                <h3 className="mt-4 text-xl font-semibold text-neutral-950">
                  Remodelación comercial
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Adecuación de locales, restaurantes, franquicias y espacios de atención al cliente con estándares profesionales.
                </p>
              </a>

              <a
                href="/remodelacion-corporativa"
                className="group rounded-[24px] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Corporativo
                </p>
                <h3 className="mt-4 text-xl font-semibold text-neutral-950">
                  Remodelación corporativa
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Adecuación de oficinas y espacios empresariales con metodología estructurada, control presupuestal y seguimiento de proyecto.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section><section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Guías de construcción
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
                Costos, ideas y planificación para remodelar mejor
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Explora guías pensadas para ayudarte a entender costos, materiales, alcances y decisiones clave antes de iniciar una remodelación en CDMX y Estado de México.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a href="/blog/costo-remodelar-cocina-cdmx" className="rounded-2xl border border-neutral-200 p-5 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Costo</p>
                <h3 className="mt-3 text-xl font-semibold text-neutral-950">Cuánto cuesta remodelar una cocina en CDMX</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Factores, materiales y decisiones que influyen en el presupuesto.</p>
              </a>

              <a href="/remodelacion-residencial/cocina" className="rounded-2xl border border-neutral-200 p-5 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Servicio</p>
                <h3 className="mt-3 text-xl font-semibold text-neutral-950">Remodelación de cocina</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Diseño, ejecución y control de obra para cocinas funcionales y duraderas.</p>
              </a>

              <a href="/blog" className="rounded-2xl border border-neutral-200 bg-neutral-900 p-5 text-white transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Explorar</p>
                <h3 className="mt-3 text-xl font-semibold">Ver todas las guías</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">Consulta artículos sobre costos, planeación, materiales y remodelación.</p>
              </a>
            </div>
          </div>
        </div>
      </section>
            <section className="py-24 px-6 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] reveal">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Credenciales operativas
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
                Ejecución con calidad, control financiero y cumplimiento real
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Nuestra operación está diseñada para reducir incertidumbre y elevar el estándar de cada proyecto, desde la planeación hasta la entrega final.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-[24px] border border-neutral-200 bg-white p-7 text-left shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Calidad
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
                  Calidad y excelencia
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  Materiales confiables, supervisión puntual y mano de obra experta para lograr acabados consistentes y resultados duraderos.
                </p>
              </div>

              <div className="rounded-[24px] border border-neutral-200 bg-neutral-950 p-7 text-left text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Control
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Control financiero
                </h3>
                <p className="mt-4 text-base leading-7 text-white/80">
                  Metodología estructurada, seguimiento presupuestal y visibilidad del proyecto para mantener orden y tomar mejores decisiones.
                </p>
              </div>

              <div className="rounded-[24px] border border-neutral-200 bg-white p-7 text-left shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Entrega
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
                  Cumplimiento real
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  Cronogramas realistas, comunicación transparente y enfoque operativo para entregar con seriedad y menor fricción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="py-24 px-6 bg-white reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[32px] border border-neutral-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Empresa de remodelación integral
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
                Empresa de remodelación integral en CDMX y Estado de México
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-600">
                <p>
                  En Proyecta Remodelación y Mantenimiento desarrollamos proyectos residenciales, comerciales y corporativos con un enfoque integral que combina planeación, control presupuestal, supervisión de obra y acabados de alto estándar.
                </p>
                <p>
                  Ejecutamos remodelaciones de casas, departamentos, oficinas, locales comerciales, franquicias y adecuaciones corporativas, adaptándonos a los objetivos operativos, funcionales y estéticos de cada cliente.
                </p>
                <p>
                  Si buscas una empresa de remodelación en CDMX o Estado de México con experiencia real, metodología de ejecución y cumplimiento de tiempos, te ayudamos a transformar tu espacio con orden, calidad y atención profesional.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-950 p-8 md:p-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                Enfoque operativo
              </p>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                Planeación, control y ejecución con estándar profesional
              </h3>

              <div className="mt-8 space-y-5">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Cobertura estratégica</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Atención en Ciudad de México y Estado de México para proyectos habitacionales, comerciales y corporativos.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Metodología clara</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Definición de alcances, control de presupuesto, seguimiento de obra y comunicación transparente durante todo el proyecto.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Resultados duraderos</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Soluciones pensadas para funcionar bien, verse bien y sostener su valor con el paso del tiempo. Nada de maquillaje de obra, que eso luego cobra factura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </section>

      <section className="py-24 px-6 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] reveal">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  Nuestro Book
                </p>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
                  Portafolio visual de proyectos ejecutados con estándar profesional
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  Cada proyecto tiene contexto, restricciones y objetivos distintos. Ejecutamos remodelaciones y adecuaciones con control, metodología y criterios de marca, desde residencial hasta corporativo.
                </p>
              </div>

              <a
                href="/proyectos"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-neutral-50"
              >
                Ver proyectos
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Residenciales", img: "/projects/residenciales/residencial1.jpeg" },
                { t: "Restaurantes", img: "/projects/restaurantes/restaurante2.jpeg" },
                { t: "Temáticos", img: "/projects/proyectos-especiales/bingo1.jpeg" },
                { t: "Corporativo", img: "/projects/corporativas/corporativo2.jpeg" },
                { t: "Automotriz", img: "/projects/corporativas/bridgestone1.jpeg" },
                { t: "Casinos", img: "/projects/casinos/casino1.jpeg" }
              ].map((item) => (
                <div
                  key={item.t}
                  className="group relative h-[280px] overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-950 shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                >
                  <Image
                    src={item.img}
                    alt={item.t}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition group-hover:from-black/70" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Proyecto ejecutado
                    </p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {item.t}
                      </h3>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition group-hover:bg-white/15">
                        →
                      </span>
                    </div>
                    <div className="mt-4 h-px w-full bg-white/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
            </section>

      <section className="bg-neutral-950 text-white py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.015)_100%)] p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.30)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                Resultados medibles
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                Experiencia que se traduce en resultados
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                La ejecución consistente deja huella en números reales: proyectos terminados, clientes que regresan y horas dedicadas a convertir planos, ideas y restricciones en espacios funcionales.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-7 text-left transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Proyectos
                </p>
                <div className="mt-4 text-5xl font-bold tracking-tight text-blue-500">300+</div>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Proyectos ejecutados en distintas categorías, desde remodelación residencial hasta adecuaciones comerciales y corporativas.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-7 text-left transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Confianza
                </p>
                <div className="mt-4 text-5xl font-bold tracking-tight text-blue-500">85+</div>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Clientes satisfechos que valoran el control del proceso, la comunicación clara y la seriedad en la entrega.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-7 text-left transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Ejecución
                </p>
                <div className="mt-4 text-5xl font-bold tracking-tight text-blue-500">5,450+</div>
                <p className="mt-4 text-base leading-7 text-white/75">
                  Horas de trabajo enfocadas en resolver obra real. El concreto no perdona improvisaciones, así que mejor método que drama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><section className="bg-neutral-950 text-white pb-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.30)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                Confianza construida
              </p>
              <h3 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-white">
                Trayectoria con empresas líderes
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Marcas y empresas que han confiado en nuestra ejecución, control y estándares en proyectos residenciales, comerciales y corporativos.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/acuariomichin.jpg" alt="Acuario Michin" width={160} height={80} className="mx-auto object-contain" />
              </div>
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/cmrlogo.png" alt="CMR" width={160} height={80} className="mx-auto object-contain" />
              </div>
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/codere.png" alt="Codere" width={160} height={80} className="mx-auto object-contain" />
              </div>
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/gmlogo.jpg" alt="GM" width={160} height={80} className="mx-auto object-contain" />
              </div>
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/hawkerslogo.jpg" alt="Hawkers" width={160} height={80} className="mx-auto object-contain" />
              </div>
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/JAC_logo.jpg" alt="JAC" width={160} height={80} className="mx-auto object-contain" />
              </div>
              <div className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-white/10 bg-white/5 p-4">
                <Image src="/projects/socios comerciales/Liverpool_logo.svg.png" alt="Liverpool" width={160} height={80} className="mx-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Siguiente paso
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
                ¿Qué tipo de proyecto deseas desarrollar?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Contamos con experiencia tanto en remodelación residencial como en ejecución comercial y corporativa, con planeación, control de obra y atención profesional.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Residencial
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
                  Proyecto Residencial
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  Remodelación integral para viviendas de nivel medio y alto, con acabados premium, supervisión profesional y control de ejecución.
                </p>
                <div className="mt-8">
                  <a
                    href="/contacto"
                    className="inline-flex items-center rounded-full bg-blue-700 px-6 py-3 text-white font-semibold transition hover:bg-blue-800"
                  >
                    Cotizar proyecto residencial
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-950 p-8 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Comercial / Corporativo
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Proyecto Comercial / Corporativo
                </h3>
                <p className="mt-4 text-base leading-7 text-white/80">
                  Ejecución bajo lineamientos de marca, control presupuestal, coordinación operativa y cumplimiento de cronogramas corporativos.
                </p>
                <div className="mt-8">
                  <a
                    href="/contacto"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-white font-semibold transition hover:bg-white/15"
                  >
                    Cotizar proyecto corporativo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section id="contacto" className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-neutral-200 bg-neutral-950 p-8 md:p-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                Contacto
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                Hablemos de tu proyecto
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Atendemos proyectos residenciales, comerciales y corporativos en Ciudad de México y Estado de México, con enfoque en planeación, control de obra y ejecución profesional.
              </p>

              <div className="mt-10 space-y-5">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Cobertura
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    CDMX y Estado de México
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Teléfono
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    55 5105 4340
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Enfoque
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/75">
                    Remodelación integral, adecuaciones comerciales, ejecución corporativa y acompañamiento profesional desde el primer contacto.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Inicio de conversación
              </p>
              <h3 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-neutral-950">
                Solicita una cotización o cuéntanos qué necesitas remodelar
              </h3>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Podemos orientarte sobre alcances, tipo de proyecto y siguiente paso para comenzar con mayor claridad. Menos adivinación, más proyecto bien aterrizado.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3.5 text-white font-semibold transition hover:bg-blue-800"
                >
                  WhatsApp: 55 5105 4340
                </a>

                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3.5 font-semibold text-neutral-950 transition hover:bg-neutral-50"
                >
                  Ir al formulario de contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
