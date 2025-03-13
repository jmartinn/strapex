import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./styles/globals.css";
import { StarknetProvider } from "@/components/providers/starknet-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
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
  title: {
    default: "Strapex",
    template: "Strapex | %s",
  },
  description: "An open-source alternative to Stripe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StarknetProvider>{children}</StarknetProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
