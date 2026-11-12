"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "../../content/site";
// No preference UI or session recording. Respect browser Do Not Track.
export default function SiteAnalytics() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(navigator.doNotTrack !== "1");
  }, []);
  if (!enabled) return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">{`
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments);};
    gtag('js',new Date());
    gtag('config','${siteConfig.analytics.measurementId}',{page_location:'${siteConfig.site.url}'+window.location.pathname,page_referrer:'',allow_google_signals:false,allow_ad_personalization_signals:false});
  `}</Script>
      <Script
        id="ga-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.measurementId}`}
        strategy="afterInteractive"
      />
      <Analytics
        beforeSend={(event) => ({
          ...event,
          url: new URL(
            new URL(event.url, siteConfig.site.url).pathname,
            siteConfig.site.url,
          ).href,
        })}
      />
    </>
  );
}
