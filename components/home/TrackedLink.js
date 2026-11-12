"use client";
import { validLink } from "../../content/site";
export default function TrackedLink({
  href,
  id,
  kind = "outbound",
  children,
  ...props
}) {
  if (!validLink(href)) return null;
  return (
    <a
      {...props}
      href={href}
      onClick={() => {
        if (window.gtag)
          window.gtag("event", "contact_click", {
            link_id: id,
            link_kind: kind,
          });
      }}
    >
      {children}
    </a>
  );
}
