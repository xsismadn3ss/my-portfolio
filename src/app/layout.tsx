import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/themeContext";
import NavBar from "@/components/navBar";
import { Toaster } from "@/components/ui/sonner";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-150 ease-in`}
        data-vaul-drawer-wrapper=""
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <NavBar />
          <main className="px-6 md:px-[20vh] lg:px-[30vh] bg-background rounded-md">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
