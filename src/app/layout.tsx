import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saima Kosser | Full-Stack Developer & MCA Student",
  description:
    "Official portfolio of Saima Kosser - MCA student, Frontend Developer (bgsbu.ac.in), and Data Analysis Intern (IIIT Una) building modern web applications.",
  keywords: [
    "Saima Kosser",
    "MCA Student",
    "Full-Stack Web Developer",
    "bgsbu.ac.in Frontend Developer",
    "IIIT Una Data Analysis Intern",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
  ],
  authors: [{ name: "Saima Kosser", url: "mailto:saimakossermalik@gmail.com" }],
  openGraph: {
    title: "Saima Kosser | Full-Stack Web Developer",
    description:
      "Modern, responsive, and user-friendly web experiences built with purpose.",
    url: "https://saimakosser.dev",
    siteName: "Saima Kosser Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saima Kosser | Full-Stack Web Developer",
    description:
      "MCA Student & Full-Stack Web Developer building high-performance digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth dark`}>
      <body className="bg-[#121210] text-[#ECE7E1] min-h-screen flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#ECE7E1] antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
