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
    <div className="md:hidden ml-3 relative">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm transition hover:bg-gray-50"
      >
        <span className="text-3xl leading-none">{open ? "×" : "☰"}</span>
      </button>

      {open && (
        <div className="fixed right-4 top-24 z-50 w-[min(320px,calc(100vw-2rem))] rounded-[2rem] border border-gray-200 bg-white p-8 shadow-2xl">
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-gray-900 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-xl font-semibold text-white hover:bg-blue-800 transition"
            >
              Solicitar cotización
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
