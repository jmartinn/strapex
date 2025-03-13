"use client";

import { Loader2, Wallet, ChevronRight, Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WalletLoginProps {
  onSuccess?: () => void;
}

export function WalletConnect({ onSuccess }: WalletLoginProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      icon: "https://avatars.githubusercontent.com/u/37784886",
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: "https://avatars.githubusercontent.com/u/1885080",
    },
    {
      id: "phantom",
      name: "Phantom",
      icon: "https://avatars.githubusercontent.com/u/78782331",
    },
  ];

  const handleConnect = (walletId: string) => {
    setSelectedWallet(walletId);
    setIsConnecting(true);

    setTimeout(() => {
      setIsConnecting(false);
      setConnected(true);

      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 1000);
    }, 2000);
  };

  return (
    <div className="space-y-4 py-2">
      {wallets.map((wallet) => (
        <Card
          key={wallet.id}
          className={`group flex cursor-pointer items-center justify-between p-4 hover:bg-accent/5 ${
            selectedWallet === wallet.id
              ? isConnecting
                ? "border-primary/50 shadow-[0_0_0_1px_rgba(59,130,246,0.3)]"
                : connected
                  ? "border-green-500/50 shadow-[0_0_0_1px_rgba(34,197,94,0.3)]"
                  : "border-primary/50"
              : "border-border"
          }`}
          onClick={() =>
            !isConnecting && !connected && handleConnect(wallet.id)
          }
        >
          <div className="flex items-center space-x-3">
            <div className="wallet-icon flex size-10 items-center justify-center rounded-full bg-accent/10">
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="size-8 transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="font-medium">{wallet.name}</p>
              <p className="text-xs text-muted-foreground">
                Connect using {wallet.name}
              </p>
            </div>
          </div>
          {selectedWallet === wallet.id && (
            <>
              {isConnecting ? (
                <div className="text-primary">
                  <Loader2 className="size-5 animate-spin" />
                </div>
              ) : connected ? (
                <div className="text-green-500">
                  <Check className="size-5" />
                </div>
              ) : (
                <ChevronRight className="size-5 text-primary transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
              )}
            </>
          )}
          {selectedWallet !== wallet.id && (
            <ChevronRight className="size-5 text-muted-foreground transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          )}
        </Card>
      ))}

      <Button
        className="glow-effect mt-4 w-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
        size="lg"
        disabled={isConnecting || connected}
        onClick={() => (selectedWallet ? handleConnect(selectedWallet) : null)}
      >
        {isConnecting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Connecting...
          </>
        ) : connected ? (
          <>
            <Check className="mr-2 size-4" />
            Connected
          </>
        ) : (
          <>
            <Wallet className="mr-2 size-4" />
            Connect Wallet
          </>
        )}
      </Button>
    </div>
  );
}
