"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () =>
      setDark(document.documentElement.dataset.theme === "dark");
    sync();
    const followSystem = () => {
      let saved;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      if (!saved) {
        document.documentElement.dataset.theme = media.matches
          ? "dark"
          : "light";
        sync();
      }
    };
    media.addEventListener("change", followSystem);
    return () => media.removeEventListener("change", followSystem);
  }, []);
  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <Sun className="sun" size={17} aria-hidden="true" />
      <Moon className="moon" size={17} aria-hidden="true" />
    </button>
  );
}
