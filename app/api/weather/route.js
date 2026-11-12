const chennai = { latitude: 13.1, longitude: 80.3, label: "Chennai" };

export async function GET(request) {
  const lat = request.headers.get("x-vercel-ip-latitude");
  const lon = request.headers.get("x-vercel-ip-longitude");
  const nearby =
    lat && lon && Number.isFinite(Number(lat)) && Number.isFinite(Number(lon));
  const location = nearby
    ? {
        latitude: Number(lat).toFixed(1),
        longitude: Number(lon).toFixed(1),
        label: "Near you",
      }
    : chennai;

  const query = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current: "temperature_2m",
  });

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?${query}`,
      {
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok) return new Response(null, { status: 503 });
    const { current } = await response.json();
    if (!Number.isFinite(current?.temperature_2m))
      return new Response(null, { status: 503 });
    return Response.json(
      {
        temperature: Math.round(current.temperature_2m),
        label: location.label,
      },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  } catch {
    return new Response(null, { status: 503 });
  }
}
