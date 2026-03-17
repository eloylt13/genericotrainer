import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Momentum Coach | Demo de Landing para Entrenador Personal",
  description:
    "Landing demo para entrenador personal con enfoque premium: quiz inicial, propuesta de valor clara, servicios presencial y online, prueba social, FAQ y formulario de captación.",
  keywords: [
    "landing entrenador personal",
    "web entrenador personal",
    "demo landing fitness",
    "personal trainer landing page",
    "entrenador personal online",
    "captacion de leads fitness",
    "landing page entrenador personal",
  ],
  openGraph: {
    title: "Momentum Coach | Demo de Landing para Entrenador Personal",
    description:
      "Demo genérica de landing page para entrenador personal con diseño premium y enfoque de captación.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}