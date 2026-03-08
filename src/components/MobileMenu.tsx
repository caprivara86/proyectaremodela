"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/remodelacion-residencial", label: "Remodelación residencial" },
    { href: "/remodelacion-comercial", label: "Remodelación comercial" },
    { href: "/remodelacion-corporativa", label: "Remodelación corporativa" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/por-que", label: "Valor agregado" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <div className="relative ml-2 md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:bg-white/15"
      >
        <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
      </button>

      {open && (
        <div className="fixed right-4 top-20 z-50 w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-[2rem] border border-white/15 bg-neutral-950/95 p-7 text-white shadow-[0_24px_80px_rgba(15,23,42,0.34)] backdrop-blur-xl">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-semibold text-white/90 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-950 transition hover:bg-white/90"
            >
              Solicitar cotización
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
