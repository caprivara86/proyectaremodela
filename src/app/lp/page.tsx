export default function LandingIndex() {
  return (
    <main className="min-h-screen bg-transparent text-gray-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600">
          Landings • /lp
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold">Landings de Campaña</h1>

        <p className="mt-6 text-lg text-white/90 max-w-3xl">
          Usa estos ejemplos para validar que la ruta dinámica <code className="px-2 py-1 rounded bg-gray-100">/lp/[slug]</code> captura el slug.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a className="border rounded-xl p-6 hover:bg-gray-50 transition" href="/lp/residencial-premium">
            <div className="font-semibold">Residencial Premium</div>
            <div className="mt-2 text-sm text-gray-600">/lp/residencial-premium</div>
          </a>

          <a className="border rounded-xl p-6 hover:bg-gray-50 transition" href="/lp/adecuacion-corporativa">
            <div className="font-semibold">Adecuación Corporativa</div>
            <div className="mt-2 text-sm text-gray-600">/lp/adecuacion-corporativa</div>
          </a>

          <a className="border rounded-xl p-6 hover:bg-gray-50 transition" href="/lp/restaurantes-franquicias">
            <div className="font-semibold">Restaurantes / Franquicias</div>
            <div className="mt-2 text-sm text-gray-600">/lp/restaurantes-franquicias</div>
          </a>
        </div>
      </div>
    </main>
  );
}
