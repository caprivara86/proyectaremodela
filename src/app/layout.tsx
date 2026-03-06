import "./globals.css";
import Image from "next/image";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

export const metadata = {
  title: "Proyecta Remodelación",
  description: "Remodelación integral residencial y corporativa en CDMX y Estado de México.",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className="bg-white text-gray-900 antialiased tracking-tight">
        <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-wide text-white">
              <Image
                src="/projects/logo/proyecta_logo_alta_res_4000w.png"
                alt="Proyecta Remodela"
                width={180}
                height={44}
                priority
              />
              <span className="sr-only">Proyecta</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a href="/servicios" className="hover:text-gray-900 transition">Servicios</a>
              <a href="/proyectos" className="hover:text-gray-900 transition">Proyectos</a>
              <a href="/por-que" className="hover:text-gray-900 transition">Valor agregado</a>
              <a href="/contacto" className="hover:text-gray-900 transition">Contacto</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                WhatsApp
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition"
              >
                Cotizar
              </a>
            </div>
          </div>
        </header>

        <div className="pt-20">
          {children}
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow-lg hover:brightness-95"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}