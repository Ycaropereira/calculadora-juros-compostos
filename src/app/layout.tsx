import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculadora-juros-compostos-vert.vercel.app"),
  title: "Calculadora de Juros Compostos",
  description:
    "Calculadora online de juros compostos para simular investimentos com aportes mensais e visualizar a evolução do patrimônio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Calculadora de Juros Compostos",
    description:
      "Simule juros compostos com aportes mensais e veja a evolução do seu patrimônio.",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Calculadora de Juros Compostos",
    description:
      "Simule juros compostos com aportes mensais e veja a evolução do seu patrimônio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
