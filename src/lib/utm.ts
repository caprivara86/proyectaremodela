export type UtmData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);

  const utmData: UtmData = {
    utm_source: params.get("utm_source") ?? undefined,
    utm_medium: params.get("utm_medium") ?? undefined,
    utm_campaign: params.get("utm_campaign") ?? undefined,
    utm_term: params.get("utm_term") ?? undefined,
    utm_content: params.get("utm_content") ?? undefined,
  };

  const hasAny = Object.values(utmData).some(Boolean);

  if (hasAny) {
    localStorage.setItem("proyecta_utm", JSON.stringify(utmData));
  }
}

export function getStoredUtm(): UtmData | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem("proyecta_utm");
  if (!raw) return null;

  try {
    return JSON.parse(raw) as UtmData;
  } catch {
    return null;
  }
}