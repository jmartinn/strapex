import { RocketIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

import Globe from "@/components/globe";
import MainDashboard from "@/components/site-dashboard";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold md:text-6xl">
        Seamless onchain payments for your business
      </h1>

      <div className="mt-4 flex flex-col items-center justify-center">
        <span className="text-sm">Powered by</span>
        <div className="flex flex-row items-center">
          <p className="font-bold">Starknet</p>
          <img
            src="/starknetLogo.png"
            alt="Starknet logo"
            className="ml-2 w-4 pt-0.5"
          />
        </div>
        <Globe />

        <a href="/createBiz" className="ml-4">
          <Button>
            <RocketIcon />
            Create Business
          </Button>
        </a>

        <MainDashboard />
      </div>
    </section>
  );
}
