import {ImageResponse} from "next/server";
import {SITE} from "@/constants/site";

export const runtime = "edge";

// Static route (no params) → generated once at build time. Feeds og:image and
// twitter:image automatically, and the Person schema's `image`. 1200×630 is the
// standard social-card size.
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
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 25% 20%, rgba(139,92,246,0.28), transparent 55%), radial-gradient(circle at 85% 90%, rgba(139,92,246,0.18), transparent 50%), #0B0B14",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#C4B5FD",
            fontSize: "30px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#8B5CF6",
              boxShadow: "0 0 20px 2px rgba(139,92,246,0.9)",
            }}
          />
          {SITE.jobTitle}
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "flex",
            fontSize: "108px",
            fontWeight: 800,
            lineHeight: 1,
            color: "#F5F5FA",
            letterSpacing: "-0.03em",
          }}
        >
          {SITE.name}
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "flex",
            fontSize: "34px",
            color: "#9CA3AF",
            maxWidth: "820px",
            lineHeight: 1.35,
          }}
        >
          Building fast, user-friendly web apps with React, Next.js & TypeScript.
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            fontSize: "28px",
            fontWeight: 600,
            color: "#8B5CF6",
          }}
        >
          adibhoque.me
        </div>
      </div>
    ),
    {...size}
  );
}
