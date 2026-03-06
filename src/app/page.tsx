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
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                resetTimer();
                setCurrent(i);
              }}
              className={`h-2.5 w-8 rounded-full transition ${
                i === current ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestros servicios de remodelación
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ejecutamos proyectos residenciales, comerciales y corporativos en CDMX y Estado de México.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <a href="/remodelacion-residencial" className="block rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold">Remodelación residencial</h3>
              <p className="mt-3 text-gray-600">
                Remodelación de casas, departamentos y residencias con acabados premium.
              </p>
            </a>

            <a href="/remodelacion-comercial" className="block rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold">Remodelación comercial</h3>
              <p className="mt-3 text-gray-600">
                Adecuación de locales, restaurantes, franquicias y espacios de atención al cliente.
              </p>
            </a>

            <a href="/remodelacion-corporativa" className="block rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold">Remodelación corporativa</h3>
              <p className="mt-3 text-gray-600">
                Adecuación de oficinas y espacios empresariales con control de proyecto.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
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
      <section className="py-20 px-6 reveal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Calidad y Excelencia</h3>
            <p className="mt-3 text-gray-600">
              Materiales premium y mano de obra experta en cada proyecto.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Control Financiero</h3>
            <p className="mt-3 text-gray-600">
              Metodología estructurada y cumplimiento de presupuesto.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Cumplimiento Real</h3>
            <p className="mt-3 text-gray-600">
              Entregas en tiempo y comunicación transparente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empresa de remodelación integral en CDMX y Estado de México
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              En Proyecta Remodelación y Mantenimiento desarrollamos proyectos de remodelación integral
              para espacios residenciales, comerciales y corporativos, con atención en CDMX y Estado de México.
              Nuestro enfoque combina planeación, control de presupuesto, supervisión de obra y acabados de alto estándar.
            </p>
            <p>
              Ejecutamos remodelaciones de casas, departamentos, oficinas, locales comerciales, franquicias
              y adecuaciones corporativas, adaptándonos a los objetivos operativos, funcionales y estéticos de cada cliente.
            </p>
            <p>
              Si buscas una empresa de remodelación en CDMX o Estado de México con experiencia real,
              metodología de ejecución y cumplimiento de tiempos, en Proyecta te ayudamos a transformar
              tu espacio con control, calidad y atención profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Nuestro Book</h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Cada proyecto es único. Ejecutamos remodelaciones y adecuaciones con control, metodología
                y estándares de marca, desde residencial hasta corporativo.
              </p>
            </div>
            <a
              href="/proyectos"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              Ver Proyectos
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Residenciales", img: "/projects/residenciales/residencial1.jpeg" },
              { t: "Restaurantes", img: "/projects/restaurantes/restaurante2.jpeg" },
              { t: "Temáticos", img: "/projects/proyectos-especiales/bingo1.jpeg" },
              { t: "Corporativo", img: "/projects/corporativas/corporativo2.jpeg" },
              { t: "Automotriz", img: "/projects/corporativas/bridgestone1.jpeg" },
              { t: "Casinos", img: "/projects/casinos/casino1.jpeg" },
            ].map((item) => (
              <div key={item.t} className="relative h-[260px] rounded-2xl overflow-hidden group">
                <Image
                  src={item.img}
                  alt={item.t}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">{item.t}</div>
                  <div className="mt-2 h-1 w-12 bg-blue-500 group-hover:w-20 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experiencia que se traduce en resultados
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl font-bold text-blue-500">300+</div>
              <p className="mt-3 text-gray-400">Proyectos ejecutados</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-blue-500">85+</div>
              <p className="mt-3 text-gray-400">Clientes satisfechos</p>
            </div>

            <div>
              <div className="text-5xl font-bold text-blue-500">5,450+</div>
              <p className="mt-3 text-gray-400">Horas creando resultados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white pb-24 px-6 reveal">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Trayectoria con empresas líderes</h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Marcas y empresas que han confiado en nuestra ejecución, control y estándares.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center opacity-90">
            <Image src="/projects/socios comerciales/acuariomichin.jpg" alt="Acuario Michin" width={160} height={80} className="mx-auto object-contain" />
            <Image src="/projects/socios comerciales/cmrlogo.png" alt="CMR" width={160} height={80} className="mx-auto object-contain" />
            <Image src="/projects/socios comerciales/codere.png" alt="Codere" width={160} height={80} className="mx-auto object-contain" />
            <Image src="/projects/socios comerciales/gmlogo.jpg" alt="GM" width={160} height={80} className="mx-auto object-contain" />
            <Image src="/projects/socios comerciales/hawkerslogo.jpg" alt="Hawkers" width={160} height={80} className="mx-auto object-contain" />
            <Image src="/projects/socios comerciales/JAC_logo.jpg" alt="JAC" width={160} height={80} className="mx-auto object-contain" />
            <Image src="/projects/socios comerciales/Liverpool_logo.svg.png" alt="Liverpool" width={160} height={80} className="mx-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Qué tipo de proyecto deseas desarrollar?
          </h2>
          <p className="mt-4 text-gray-600">
            Contamos con experiencia tanto en remodelación residencial como en ejecución corporativa.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-10 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold">Proyecto Residencial</h3>
              <p className="mt-4 text-gray-600">
                Remodelación integral para viviendas de nivel medio y alto, con acabados premium y supervisión profesional.
              </p>
              <div className="mt-6">
                <a
                  href="/contacto"
                  className="inline-flex bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-md text-white font-semibold"
                >
                  Cotizar Proyecto Residencial
                </a>
              </div>
            </div>

            <div className="border rounded-xl p-10 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold">Proyecto Comercial / Corporativo</h3>
              <p className="mt-4 text-gray-600">
                Ejecución bajo lineamientos de marca, control presupuestal y cumplimiento de cronogramas corporativos.
              </p>
              <div className="mt-6">
                <a
                  href="/contacto"
                  className="inline-flex bg-neutral-900 hover:bg-neutral-800 transition px-6 py-3 rounded-md text-white font-semibold"
                >
                  Cotizar Proyecto Corporativo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-gray-100 py-20 px-6 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Contáctanos</h2>
          <p className="mt-4 text-gray-600">CDMX y Estado de México</p>
          <p className="mt-2 font-semibold">55 5105 4340</p>
          <div className="mt-6">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-semibold hover:bg-neutral-800 transition"
            >
              WhatsApp: 55 5105 4340
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}