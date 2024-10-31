
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { UserProvider } from "@/contexts/UserContext";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { ProviderProvider } from "@/contexts/ProviderContext";

// Font files can be colocated inside of `pages`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <ProviderProvider>
        <UserProvider>
          <Theme>
            <Header />
            {children}
            <Footer />
          </Theme>
        </UserProvider>
    </ProviderProvider>

  );
}