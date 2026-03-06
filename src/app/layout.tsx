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
                <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(255,255,255,0.82)] shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
            <a href="/" className="flex min-w-0 items-center">
              <Image
                src="/projects/logo/proyecta_logo_alta_res_4000w.png"
                alt="Proyecta Remodela"
                width={176}
                height={44}
                priority
                className="h-auto w-[140px] sm:w-[160px] md:w-[176px]"
              />
              <span className="sr-only">Proyecta</span>
            </a>

            <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-neutral-700">
              <a href="/servicios" className="transition hover:text-neutral-950">Servicios</a>
              <a href="/remodelacion-residencial" className="transition hover:text-neutral-950">Residencial</a>
              <a href="/remodelacion-comercial" className="transition hover:text-neutral-950">Comercial</a>
              <a href="/remodelacion-corporativa" className="transition hover:text-neutral-950">Corporativa</a>
              <a href="/proyectos" className="transition hover:text-neutral-950">Proyectos</a>
              <a href="/por-que" className="transition hover:text-neutral-950">Valor agregado</a>
              <a href="/contacto" className="transition hover:text-neutral-950">Contacto</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+525551054340"
                className="inline-flex items-center whitespace-nowrap text-sm font-semibold text-neutral-900 transition hover:text-blue-700"
              >
                55 5105 4340
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
              >
                WhatsApp
              </a>

              <a
                href="/contacto"
                className="hidden sm:inline-flex items-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Cotizar
              </a>

              <MobileMenu />
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