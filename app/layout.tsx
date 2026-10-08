import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Used Mobile Store",
  description: "Buy, Sell, Exchange & Repair Mobile Phones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
