import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/lib/ThemeProvider";
import SmoothScrollProvider from "@/lib/SmoothScrollProvider";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kalidash Odekare | Full Stack Developer",
  description:
    "Portfolio of Kalidash Odekare — Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SmoothScrollProvider>
            <ScrollRevealProvider>{children}</ScrollRevealProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
