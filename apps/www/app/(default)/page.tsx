import type { Metadata } from "next";

export const metadata = {
  title: "Home",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
  return (
    <section>
      <div className="pb-12 pt-32 md:pb-20 md:pt-44">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Seamless online payments on Starknet"
            description="Build the next generation of payment solutions with Starknet's speed and Ethereum's security. Join the waitlist for early access to our developer-first payment infrastructure."
          >
            Open Source
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
