
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import localFont from "next/font/local";
import { UserProvider } from "@/contexts/UserContext";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./SF-Pro.ttf" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
