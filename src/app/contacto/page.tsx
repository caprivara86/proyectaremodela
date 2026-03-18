"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipoProyecto: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    let storedUtm: any = null;
    try {
      const raw = localStorage.getItem("proyecta_utm");
      storedUtm = raw ? JSON.parse(raw) : null;
    } catch {}

    const leadData = {
      ...form,
      source: "website_contact_page",
      utm: storedUtm ?? undefined,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          (json && (json.error || json.message)) || "No se pudo enviar el formulario. Intenta de nuevo."
        );
        return;
      }

      setStatus("ok");
      setForm({ nombre: "", telefono: "", email: "", tipoProyecto: "", mensaje: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg("Error de red. Revisa tu conexión e inténtalo de nuevo.");
    }
  }

  return (
    <main className="min-h-screen bg-transparent text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/residenciales/residencial1.jpeg"
            alt="Contacto Proyecta"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
              Contacto · CDMX y Estado de México
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Solicita tu cotización
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80">
              Cuéntanos qué quieres construir o remodelar. Te respondemos con una ruta clara: alcance, tiempos y presupuesto estimado.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white hover:brightness-95 transition"
              >
                WhatsApp
              </a>

              <a
                href="#form"
                className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-black/50 transition"
              >
                Llenar formulario
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 md:p-10" id="form">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Formulario de contacto</h2>
                <p className="mt-3 text-gray-600">
                  Responderemos lo antes posible. Si ya tienes planos o fotos, menciona el detalle en el mensaje.
                </p>
              </div>
              <div className="hidden md:block rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
                <div className="font-semibold text-gray-900">Tiempo de respuesta</div>
                <div className="text-gray-600">Mismo día hábil</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-900">Nombre</label>
                  <input
                    name="nombre"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-900">Teléfono</label>
                  <input
                    name="telefono"
                    placeholder="55 0000 0000"
                    value={form.telefono}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900">Tipo de proyecto</label>
                <select
                  name="tipoProyecto"
                  value={form.tipoProyecto}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Residencial">Residencial</option>
                  <option value="Corporativo">Corporativo</option>
                  <option value="Restaurantes">Restaurantes</option>
                  <option value="Casinos">Casinos</option>
                  <option value="Automotriz">Automotriz</option>
                  <option value="Temáticos">Temáticos</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900">Mensaje</label>
                <textarea
                  name="mensaje"
                  placeholder="Ubicación, m² aproximados, tiempos y lo que te gustaría lograr…"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </div>
              )}

              {status === "ok" && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  ¡Listo! Recibimos tu solicitud. Te contactaremos en breve.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition disabled:opacity-60"
              >
                {status === "loading" ? "Enviando…" : "Enviar"}
              </button>

              <div className="text-xs text-gray-500">
                Al enviar aceptas que podamos contactarte para dar seguimiento a tu solicitud.
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 md:p-10">
              <h3 className="text-xl font-semibold">Contacto directo</h3>
              <p className="mt-3 text-gray-600">
                Si prefieres, contáctanos por WhatsApp. Te ayudamos a definir el mejor camino para tu remodelación.
              </p>

              <div className="mt-6 space-y-3 text-white/90">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Teléfono</span>
                  <span>55 5105 4340</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Zona</span>
                  <span>CDMX y Estado de México</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:brightness-95 transition"
                >
                  WhatsApp
                </a>
                <a
                  href="/servicios"
                  className="inline-flex justify-center rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
              <h3 className="text-xl font-semibold">Qué información ayuda para cotizar</h3>
              <ul className="mt-4 space-y-3 text-white/90">
                {[
                  "Ubicación del inmueble",
                  "Tipo de proyecto (residencial, corporativo, retail, etc.)",
                  "m² aproximados o alcance",
                  "Plazo deseado",
                  "Fotos o referencias (si aplica)",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white text-xs">
                      ✓
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

