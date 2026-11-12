import { ImageResponse } from "next/og";
import { siteConfig as c } from "../content/site";
export const alt = c.site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f6f3eb",
          color: "#232622",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "65px 85px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 25 }}>advaith.co</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontSize: 105, color: "#2445d8", letterSpacing: "-6px" }}
          >
            {c.profile.name}
          </div>
          <div style={{ fontSize: 40, marginTop: 20 }}>
            {c.profile.headline}
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            borderTop: "1px solid #c8cabb",
            paddingTop: 25,
          }}
        >
          {c.investing.focus.join("  /  ")}
        </div>
      </div>
    ),
    size,
  );
}
