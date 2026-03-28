import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterIAMagica from "@/components/FooterIAMagica";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genericotrainer.vercel.app"),
  title: "Momentum Coach | Entrenador personal en Valencia y online",
  description:
    "Entrenamiento personal adaptado a tu objetivo, tu nivel y tu rutina. Presencial en Valencia y online con seguimiento.",
  verification: {
    google: "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4",
  },
  openGraph: {
    title: "Momentum Coach | Entrenador personal en Valencia y online",
    description:
      "Entrenamiento personal adaptado a tu objetivo, tu nivel y tu rutina. Presencial en Valencia y online con seguimiento.",
    url: "https://genericotrainer.vercel.app",
    siteName: "Momentum Coach",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum Coach | Entrenador personal en Valencia y online",
    description:
      "Entrenamiento personal adaptado a tu objetivo, tu nivel y tu rutina. Presencial en Valencia y online con seguimiento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <FooterIAMagica />
        <Analytics />
      </body>
    </html>
  );
}