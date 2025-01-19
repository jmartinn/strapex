import { RocketIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";

import Globe from "./globe";
import MainDashboard from "./site-dashboard";
export default function Main() {
  return (
    <main className="flex grow flex-col pt-12">
      <h1 className="text-center text-2xl font-bold md:text-6xl">
        Seamless onchain payments for your business
      </h1>

      <div className="mt-4 flex flex-col items-center justify-center">
        <span>Powered by</span>
        <div className="flex flex-row items-center">
          <Text size="4" className="font-bold">
            Starknet
          </Text>
          <img
            src="/starknetLogo.png"
            alt="Starknet logo"
            className="ml-2 w-8"
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
    </main>
  );
}
