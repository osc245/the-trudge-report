import "./globals.css";
import { Inter } from "next/font/google";
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "The Trudge Report",
  description: "Hiking Blog",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-amber-50">
        <header className="py-6">
          <h1 className="text-3xl font-bold tracking-tighter text-center">The Trudge Report</h1>
        </header>
        <main className="container mx-auto">{children}</main>
        <footer className="text-center py-6 flex justify-center">
          <div className="flex justify-center pb-4">
            <Image src="/squiggle.svg" width={200} height={32} alt="Squiggle" />
          </div>
          <p className="text-sm">
            © 2024 Carter Imrie-Milne ∙ Site Created By Oscar Sykes ∙
            <a href="https://github.com/osc245/the-trudge-report"> Source Code</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
