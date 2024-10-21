import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ weight:["500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H3vel Coming Soon",
  description: "H3vel Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-lightblue`}>{children}
      </body>
    </html>
  );
}
