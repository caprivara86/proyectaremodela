"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm">
          Este sitio utiliza cookies para mejorar la experiencia de navegación y analizar el tráfico.
        </p>

        <div className="flex gap-3">
          <button
            onClick={accept}
            className="bg-blue-600 px-4 py-2 rounded text-white"
          >
            Aceptar
          </button>

          <button
            onClick={reject}
            className="border border-white px-4 py-2 rounded"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
