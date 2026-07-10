import "./globals.css";
import SmoothScroller from "@/components/SmootScroller";
import Navbar from "@/components/Navbar";

import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});


export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
