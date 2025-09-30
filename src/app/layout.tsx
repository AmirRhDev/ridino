import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "../assets/styles/globals.css";
import MobileNavigation from "@/components/layout/mobile-navigation";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Ridino",
  description: "An Application for Buy & Sell cars",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO: handle global errors

  return (
    <html lang="en">
      <body
        dir="rtl"
        className={"antialiased bg-background min-h-screen font-[YekanBakh]"}
      >
        <Providers>
          <Header />
          <main className="min-h-screen px-8 sm:px-11 py-12 sm:py-16">
            {children}
          </main>
          <Footer />
        </Providers>
        <MobileNavigation />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
