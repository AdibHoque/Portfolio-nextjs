import {ImageResponse} from "next/server";
import {SITE} from "@/constants/site";

export const runtime = "edge";

// Static route (no params) → generated once at build time. Feeds og:image and
// twitter:image automatically, and the Person schema's `image`. 1200×630 is the
// standard social-card size. Matches the site's paper-and-ink palette.
export const alt = `${SITE.name} — ${SITE.jobTitle}`;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#EFF0EE",
          color: "#131313",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{display: "flex", fontSize: "28px", color: "#55554F"}}>
          {SITE.jobTitle}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "132px",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          {SITE.name}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(19,19,19,0.2)",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#55554F",
              maxWidth: "720px",
              lineHeight: 1.4,
            }}
          >
            Building web products with React, Next.js and TypeScript.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 600,
              color: "#4338CA",
            }}
          >
            adibhoque.me
          </div>
        </div>
      </div>
    ),
    {...size}
  );
}
