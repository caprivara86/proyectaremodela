import "./globals.css";
import Image from "next/image";
import MobileMenu from "../components/MobileMenu";
import CookieBanner from "@/components/CookieBanner";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

export const metadata = {
  metadataBase: new URL("https://www.proyectaremodela.com"),
  title: "Proyecta Remodelación | Construcción Inteligente",
  description: "Remodelación integral residencial y corporativa en CDMX y Estado de México.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
  openGraph: {
    title: "Proyecta Remodelación | Construcción Inteligente",
    description: "Remodelación integral residencial y corporativa en CDMX y Estado de México.",
    url: "https://www.proyectaremodela.com",
    siteName: "Proyecta Remodelación",
    images: [
      {
        url: "/projects/logo/proyecta_logo_alta_res_4000w.png",
        width: 1200,
        height: 630,
        alt: "Proyecta Remodelación",
      }
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecta Remodelación | Construcción Inteligente",
    description: "Remodelación integral residencial y corporativa en CDMX y Estado de México.",
    images: ["/projects/logo/proyecta_logo_alta_res_4000w.png"],
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
              <a href="/remodelacion-residencial" className="hover:text-gray-900 transition">Remodelación residencial</a>
              <a href="/remodelacion-comercial" className="hover:text-gray-900 transition">Remodelación comercial</a>
              <a href="/remodelacion-corporativa" className="hover:text-gray-900 transition">Remodelación corporativa</a>
              <a href="/proyectos" className="hover:text-gray-900 transition">Proyectos</a>
              <a href="/por-que" className="hover:text-gray-900 transition">Valor agregado</a>
              <a href="/contacto" className="hover:text-gray-900 transition">Contacto</a>
            </nav>

            <div className="flex items-center gap-3">
              <MobileMenu />
              <a
                href="tel:+525551054340"
                className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-700 transition whitespace-nowrap"
              >
                55 5105 4340
              </a>
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

        <footer className="border-t border-gray-200 bg-gray-50 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-gray-600">
            <div className="space-y-4">
              <Image
                src="/projects/logo/proyecta_logo_alta_res_4000w.png"
                alt="Proyecta Remodelación"
                width={160}
                height={40}
              />
              <p className="text-gray-600 leading-relaxed">
                Remodelación integral residencial, comercial y corporativa en CDMX y Estado de México.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Contacto</h3>
              <p>CDMX y Estado de México</p>
              <a href="tel:+525551054340" className="hover:text-gray-900 transition">
                55 5105 4340
              </a>
              <a href="mailto:contacto@proyectaremodela.com" className="block hover:text-gray-900 transition">
                contacto@proyectaremodela.com
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Legal</h3>
              <a href="/privacidad" className="block hover:text-gray-900 transition">
                Aviso de privacidad
              </a>
              <a href="https://wa.me/525551054340" target="_blank" rel="noopener noreferrer" className="block hover:text-gray-900 transition">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
              <span>© 2026 Proyecta Remodelación y Mantenimiento</span>
              <span>Construcción Inteligente</span>
            </div>
          </div>
        </footer>

        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow-lg hover:brightness-95"
        >
          WhatsApp
        </a>

        <CookieBanner />
      </body>
    </html>
  );
}