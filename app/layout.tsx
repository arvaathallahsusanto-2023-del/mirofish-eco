import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "EksyarHub | Riset Ekonomi Islam",
  description: "Global Ecosystem for Islamic Economics Research. Connecting Scholars, Industry, and Regulators. Curated by Mirofish Architecture.",
  keywords: ["Ekonomi Islam", "EksyarHub", "Riset Hub", "Islamic Finance", "Mirofish"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
