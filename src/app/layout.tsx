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
  title: "5 Star Shine Auto Detailing | Premium Detailing & Ceramic Coating",
  description:
    "Professional auto detailing that restores, protects, and maintains your vehicle—inside and out. Mobile detailing, ceramic coating, paint correction in Phoenix, AZ.",
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
