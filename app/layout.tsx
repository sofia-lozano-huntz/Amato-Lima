import "./globals.css";

import localFont from "next/font/local";

const westwood = localFont({
  src: "../public/font/westwood-studio.ttf",
  variable: "--font-westwood",
});

const classyVogue = localFont({
  src: "../public/font/classy-vogue-regular.ttf",
  variable: "--font-classy-vogue",
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
      className={`${westwood.variable} ${classyVogue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
