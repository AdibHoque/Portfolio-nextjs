import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/main/AuroraBackground";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Adib Hoque — Frontend Developer",
  description:
    "Portfolio of Adib Hoque, a frontend developer building fast, user-friendly web applications with React, Next.js and TypeScript.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bg text-text overflow-y-scroll overflow-x-hidden`}
      >
        <AuroraBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
