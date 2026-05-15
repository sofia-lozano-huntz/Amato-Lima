import "./globals.css";

import localFont from "next/font/local";

import { Bodoni_Moda } from "next/font/google";

const westwood = localFont({
  src: "../public/font/westwood-studio.ttf",
  variable: "--font-westwood",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bodoni",
});

export const metadata = {
  title: "Amato Lima",
  description: "Ativos imobiliários",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${westwood.variable} ${bodoni.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
