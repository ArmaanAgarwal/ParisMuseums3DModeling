import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { DataProvider } from "@/providers/DataProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { MUSEUM_IDENTITY } from "@/content/museumIdentity";

export const metadata: Metadata = {
  title: `${MUSEUM_IDENTITY.name} | Interactive Museum Experience`,
  description: MUSEUM_IDENTITY.mission,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
      >
        <LanguageProvider>
          <DataProvider>
            <NavBar />
            {children}
            <Footer />
          </DataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
