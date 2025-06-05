import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/themeContext";
import NavBar from "@/components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraham Artiga / Ingeniero de Software",
  description: "Soy Ingeniero de software y me gusta programar y desarrollar soluciones web. Tengo experiencia en desarrollo de software en Python y Typescript. Me gusta aprender cosas nuevas y me encanta trabajar en equipo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-inherit via-blue-200 to-gray-400 dark:from-inherit dark:via-cyan-900 dark:to-black transition duration-150 ease-in`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
