import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Performance Playground",
  description: "Playing around with performance optimization and demo for Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        <main className="container mx-auto px-4 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
