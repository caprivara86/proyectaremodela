import "./globals.css";
import Script from "next/script";
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
      <body className="bg-neutral-950 text-white antialiased tracking-tight bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/projects/proyectos-especiales/remodelacion-acuario-michin.jpeg")' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7JBMXSDTT"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7JBMXSDTT');
          `}
        </Script>

        <header
          className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/10 shadow-[0_10px_40px_rgba(15,23,42,0.25)] bg-neutral-900 bg-center bg-repeat-x transition-all duration-500"
          style={{ backgroundImage: 'url("/textures/metal-plate.jpg")', backgroundSize: "420px auto" }}
        >
          <div className="absolute inset-0 bg-[rgba(2,6,23,0.72)]" />
          <div className="steel-light" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-[2px] h-[28px] bg-gradient-to-b from-white/[0.10] via-white/[0.04] to-transparent" />
          <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
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

            <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-white/85">
              <a href="/servicios" className="transition hover:text-white">Servicios</a>
              <a href="/remodelacion-residencial" className="transition hover:text-white">Residencial</a>
              <a href="/remodelacion-comercial" className="transition hover:text-white">Comercial</a>
              <a href="/remodelacion-corporativa" className="transition hover:text-white">Corporativa</a>
              <a href="/proyectos" className="transition hover:text-white">Proyectos</a>
              <a href="/por-que" className="transition hover:text-white">Valor agregado</a>
              <a href="/contacto" className="transition hover:text-white">Contacto</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+525551054340"
                className="inline-flex flex-1 justify-center items-center whitespace-nowrap text-sm font-semibold text-white transition hover:text-blue-300 mr-10 sm:mr-6"
              >
                55 5105 4340
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp
              </a>

              <a
                href="/contacto"
                className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
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

        <footer className="relative overflow-hidden border-t border-white/10 shadow-[0_-10px_40px_rgba(15,23,42,0.18)] bg-neutral-900 bg-center bg-repeat-x mt-24" style={{ backgroundImage: 'url("/textures/metal-plate.jpg")', backgroundSize: '420px auto' }}>`r`n          <div className="absolute inset-0 bg-[rgba(2,6,23,0.72)]" />`r`n          <div className="steel-light" />`r`n          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-white">
            <div className="space-y-4">
              <Image
                src="/projects/logo/proyecta_logo_alta_res_4000w.png"
                alt="Proyecta Remodelación"
                width={160}
                height={40}
              />
              <p className="text-white/90 leading-relaxed">
                Remodelación integral residencial, comercial y corporativa en CDMX y Estado de México.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-white">Contacto</h3>
              <p>CDMX y Estado de México</p>
              <a href="tel:+525551054340" className="hover:text-white transition">
                55 5105 4340
              </a>
              <a href="mailto:contacto@proyectaremodela.com" className="block hover:text-white transition">
                contacto@proyectaremodela.com
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-white">Legal</h3>
              <a href="/privacidad" className="block hover:text-white transition">
                Aviso de privacidad
              </a>
              <a href="https://wa.me/525551054340" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/15">
            <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-white flex flex-col md:flex-row items-center justify-between gap-3">
              <span>© 2026 Proyecta Remodelación y Mantenimiento</span>
              <span>Construcción Inteligente</span>
            </div>
          </div>
        </footer>

        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow-lg hover:brightness-95 whatsapp-pulse"
        >
          WhatsApp
        </a>

        <CookieBanner />
      </body>
    </html>
  );
}

