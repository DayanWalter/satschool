// Globals
import "./globals.css";
import { Inter } from "next/font/google";

// Next
import type { Metadata } from "next";

// Shadcn
import { Toaster } from "@/components/ui/toaster";

// Provider
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/components/CartContext";

// Components
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SatSchool",
  description: "Bitcoin E-Commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <TopHeader />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
