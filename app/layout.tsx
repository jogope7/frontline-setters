import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Frontline Setters | Appointment Setting Agency",
  description:
    "Frontline Setters provides dedicated remote appointment setters with full live visibility into every call, every lead, and every booking.",
  keywords: [
    "appointment setting",
    "outbound sales",
    "lead generation",
    "remote setters",
    "sales agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="frontline">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
