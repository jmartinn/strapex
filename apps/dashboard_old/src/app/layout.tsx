import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const sanFrancisco = localFont({
  src: "./SF-Pro.ttf",
  variable: "--font-sf-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
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
          "min-h-screen font-sans antialiased",
          sanFrancisco.variable,
        )}
      >
        <div className="relative flex flex-col">{children}</div>
      </body>
    </html>
  );
}
