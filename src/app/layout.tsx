import type { Metadata } from "next";
import { Days_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const days_one = Days_One({ preload: false, weight: ["400"] });

export const metadata: Metadata = {
  title: "ASTech",
  description: "Assistência 24h para seus equipamentos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={days_one.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
