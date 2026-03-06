import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proyecta Remodelación",
  description: "Sitio y landings para captación de leads con UTMs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
