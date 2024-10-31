"use client";
import { PersonIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Switch } from "@radix-ui/themes";
import { useEffect, useState, useRef } from "react";
import { Account } from "starknet";
import {
  StarknetWindowObject,
  connect,
  disconnect,
} from "starknetkit";
import { UserMode, useUser } from "@/contexts/UserContext";
import { useProvider } from "@/contexts/ProviderContext";
import { getRoute } from "@/utils/getRoute";
import { usePathname } from "next/navigation";

export default function ConnectWalletBtn() {
  const userContext = useUser();
  const providerContext = useProvider();
  const pathname = usePathname();

  useEffect(() => {
    if (userContext?.isLoggedIn) {
      console.log("Logged in");
    }
  }, [userContext?.isLoggedIn]);

  return userContext?.isLoggedIn ? (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" className="text-main">
          Account
          <CaretDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <a href={getRoute("/accounts", pathname)}>Accounts</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <a href={getRoute("/createBiz", pathname)}>Create biz</a>
        </DropdownMenu.Item>

        <DropdownMenu.Item onClick={userContext?.toggleMode}>
          Switch to{" "}
          {userContext?.userMode === UserMode.OWNER
            ? "freelancer"
            : "client"}
        </DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <div className="flex items-center">
            <span className="mr-2">Testnet</span>
            <Switch
              checked={providerContext?.network === "mainnet"}
              onCheckedChange={(checked) =>
                providerContext?.switchNetwork(checked ? "mainnet" : "sepolia")
              }
            />
            <span className="ml-2">Mainnet</span>
          </div>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red" onSelect={userContext?.logout}>
          Log out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ) : (
    <Button
      onClick={userContext?.login}
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
    >
      <PersonIcon />
      Sign In
    </Button>
  );
}
