import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { ProviderProvider } from "@/contexts/provider-context";
import { UserProvider } from "@/contexts/user-context";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderProvider>
      <UserProvider>
        <Theme>{children}</Theme>
      </UserProvider>
    </ProviderProvider>
  );
}
