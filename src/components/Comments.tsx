"use client";

import { useEffect, useRef } from "react";

// EchoThread comments (see docs/DECISIONS.md, 2026-11-25).
// The API key is EchoThread's public, embeddable key: it's meant to sit in
// page HTML, and the widget only runs on the domains allowed in EchoThread's
// site settings. It is NOT the private `et_` API token.
const SCRIPT_SRC = "https://cdn.echothread.io/widget.js";
const SHORTNAME = "our-economy";
const PUBLIC_KEY = "lkw1-BPQM9QiPYcelPB2hzo1-4NhEVEmpPtBW2y9Nqs";

export function Comments({
  pageId,
  pageTitle,
  pageUrl,
}: {
  pageId: string;
  pageTitle: string;
  pageUrl: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // EchoThread documents no way to re-initialize the widget after
    // client-side navigation, so load a fresh copy of the script each time
    // a page's comments mount, and remove it again when they unmount.
    const el = container.current;
    document.getElementById("echothread-widget")?.remove();
    const script = document.createElement("script");
    script.id = "echothread-widget";
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
      if (el) el.replaceChildren();
    };
  }, [pageId]);

  return (
    <div
      ref={container}
      id="echothread"
      data-shortname={SHORTNAME}
      data-api-key={PUBLIC_KEY}
      data-page-url={pageUrl}
      data-identifier={pageId}
      data-page-title={pageTitle}
      data-lang="en"
    />
  );
}
