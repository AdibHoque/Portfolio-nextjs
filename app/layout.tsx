import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Adib Hoque Portfolio",
  description: "Frontend Developer portfolio.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
