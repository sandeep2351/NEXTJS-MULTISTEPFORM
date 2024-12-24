import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout"; // Import the updated Layout component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "A collaborative multi-step form built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <Layout>
          <div className="min-h-screen flex flex-col">

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-6">
              {children}
            </main>
          </div>
        </Layout>
      </body>
    </html>
  );
}
