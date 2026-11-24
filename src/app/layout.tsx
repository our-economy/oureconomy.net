import type { Metadata } from "next";
import { en } from "@/content/en";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oureconomy.net"),
  title: en.meta.title,
  description: en.meta.description,
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    url: "https://oureconomy.net",
    siteName: "Our Economy",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: en.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.title,
    description: en.meta.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
