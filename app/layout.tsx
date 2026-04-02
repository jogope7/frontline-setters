import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
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
      <body className={`${bricolage.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
