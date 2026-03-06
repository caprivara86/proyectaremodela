"use client";

import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/por-que", label: "Valor agregado" },
  { href: "/contacto", label: "Contacto" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-3 md:hidden">
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50 transition"
      >
        <span className="ml-3 text-xl leading-none">{open ? "×" : "☰"}</span>
      </button>

      {open && (
        <div className="ml-3 absolute left-4 right-4 top-16 z-50 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
          <nav className="ml-3 flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="ml-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contacto"
              onClick={() => setOpen(false)}
              className="ml-3 mt-3 inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition"
            >
              Solicitar cotización
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}