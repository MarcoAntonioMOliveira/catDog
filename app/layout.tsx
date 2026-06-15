import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CatDog — Plataforma de Adoção de Animais",
  description: "Conectando animais a lares amorosos. Encontre seu novo melhor amigo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: "64px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
