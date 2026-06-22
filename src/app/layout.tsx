import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "5 Star Shine Auto Detail LLC | Mobile Detailing & Ceramic Coating | Tampa, FL",
  description:
    "Professional mobile auto detailing in Tampa, FL and surrounding areas. Ceramic coating, paint correction, interior detailing, and pressure washing. We come to you. Call (765) 438-5513.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
