"use client";

import { useEffect, useState } from "react";
import { CloudSun } from "lucide-react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/weather", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) setWeather(data);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <span className="weather-chip" aria-live="polite">
      <CloudSun size={15} aria-hidden="true" />
      {weather
        ? `${weather.label} · ${weather.temperature}°C`
        : "Chennai, India"}
    </span>
  );
}
