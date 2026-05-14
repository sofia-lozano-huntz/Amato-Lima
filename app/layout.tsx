import "./globals.css";

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
