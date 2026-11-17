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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
