import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechExpo",
  description: "Zedexel Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <div className="flex h-screen w-full">
          {/* Sidebar/Navbar */}
          <div className="w-37">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-5">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
  