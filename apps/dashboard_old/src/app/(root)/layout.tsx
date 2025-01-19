import "@radix-ui/themes/styles.css";

import Footer from "@/components/site-footer";
import Header from "@/components/site-header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container flex-1">{children}</main>
      <Footer />
    </>
  );
}
