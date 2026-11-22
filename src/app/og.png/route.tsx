import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { en } from "@/content/en";

// The picture shown when a link to the site is shared (WhatsApp, Discord,
// LinkedIn, email...). Generated once at build time, so there's no image file
// to keep in sync with the copy. Colors match the light theme in globals.css.
//
// This is a route named `og.png` rather than Next's `opengraph-image`
// convention on purpose: the static export writes the convention's image to
// a file with no extension, which Azure serves as application/octet-stream
// (with nosniff) and won't override. A `.png` filename gets image/png.
// layout.tsx points the og:image / twitter:image tags here.
export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

// next/og's built-in font has no bold weight, so load Inter (OFL-licensed,
// from @fontsource/inter). Only used at build time; nothing ships to visitors.
const fontDir = join(process.cwd(), "node_modules/@fontsource/inter/files");

export async function GET() {
  const [regular, semibold, bold] = await Promise.all(
    [400, 600, 700].map((w) =>
      readFile(join(fontDir, `inter-latin-${w}-normal.woff`)),
    ),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#faf7f1",
          color: "#1b1d1b",
          borderLeft: "24px solid #1d5e48",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 600, color: "#1d5e48" }}>
          {en.hero.name}
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginTop: 8,
          }}
        >
          {en.hero.tagline}
        </div>
        <div
          style={{
            fontSize: 38,
            lineHeight: 1.3,
            marginTop: 32,
            maxWidth: 940,
            color: "#3a3f3b",
          }}
        >
          {en.hero.offer}
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#1d5e48" }}>
          oureconomy.net
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
