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
      >
        <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem>
          <NavBar />
          <main className="mt-20 mx-6 md:mx-[20vh] lg:mx-[30vh]">
            {children}
          </main>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
