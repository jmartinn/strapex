import { Button, Text } from "@radix-ui/themes";
import { Strapex } from "strapex-react";
import createGlobe from "cobe";
import MainDashboard from "./MainDashboard";
import Globe from "./Globe";
import { RocketIcon } from "@radix-ui/react-icons";
export default function Main() {
  return (
    <main className="flex-grow flex flex-col">
      <h1 className="text-6xl text-main text-center font-bold">
        Seamless onchain payments for your business
      </h1>

      <div className="flex flex-col justify-center items-center">
        <span>Powered by</span>
        <div className="flex flex-row items-center">
          <Text size="4" className="font-bold">
            Starknet
          </Text>
          <img
            src="/starknetLogo.png"
            alt="Starknet logo"
            className="w-8 ml-2"
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
