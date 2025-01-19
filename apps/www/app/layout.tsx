import "./css/styles.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

import { cn } from "@/lib/utils";

import ThemeProvider from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Strapex",
    template: "Strapex | %s",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          inter_tight.variable,
          "bg-indigo-100 font-inter tracking-tight text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-200",
        )}
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:text-clip">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
