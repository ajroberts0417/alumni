import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Mono, Press_Start_2P } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: "--font-mono",
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Fractal Tech Alumni Roster",
  description: "Fractal Tech Alumni Roster - hire talented AI engineers from Fractal's tech program",
  keywords: "fractal, tech, alumni, engineers, developers, hiring, talent, ai engineers",
  openGraph: {
    title: "Fractal Tech AI Talent",
    description: "Hire the next generation of AI talent, locally sourced from NYC's Fractal Tech accelerator.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${pressStart2P.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
