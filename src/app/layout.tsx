import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedTech Skin AI - Hautkrebsfrüherkennung",
  description:
    "KI-gestützte Hautkrebsfrüherkennung - Analysieren Sie Hautveränderungen mit modernster künstlicher Intelligenz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-navy-900 antialiased">{children}</body>
    </html>
  );
}
