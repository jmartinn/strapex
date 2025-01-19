"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import dotenv from "dotenv";
import * as Realm from "realm-web";
import { Account } from "starknet";
import { StarknetWindowObject, connect, disconnect } from "starknetkit";

import { app } from "../../realmconfig";

import { useProvider } from "./provider-context";
dotenv.config();
export enum UserMode {
  OWNER = "owner",
  MULTIOWNER = "multiowner",
}

interface UserContextType {
  isLoggedIn: boolean;
  userMode: UserMode;
  login: () => void;
  logout: () => void;
  toggleMode: () => void;
  connection: StarknetWindowObject | null;
  account: Account | null;
  contractAddress: string | null;
  address: string | null;
  userId: string | null; // Added userId to the context
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMode, setUserMode] = useState<UserMode>(UserMode.OWNER);
  const [connection, setConnection] = useState<StarknetWindowObject | null>(
    null,
  );
  const [account, setAccount] = useState<Account | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [contractAddress, setContractAddress] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null); // Added state for userId
  const providerContext = useProvider();

  useEffect(() => {
    // This effect runs only on the client side
    if (typeof window !== "undefined") {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      if (storedIsLoggedIn !== null) {
        setIsLoggedIn(JSON.parse(storedIsLoggedIn));
      }

      const storedUserMode = localStorage.getItem("userMode");
      if (storedUserMode !== null) {
        setUserMode(storedUserMode as UserMode);
      }

      const storedUserId = localStorage.getItem("userId"); // Retrieve userId from localStorage
      if (storedUserId !== null) {
        setUserId(storedUserId);
      }

      const storedConnection = localStorage.getItem("connection");
      if (storedConnection !== null) {
        setConnection(JSON.parse(storedConnection));
      }

      const storedAccount = localStorage.getItem("account");
      if (storedAccount !== null) {
        setAccount(JSON.parse(storedAccount));
      }

      const storedAddress = localStorage.getItem("address");
      if (storedAddress !== null) {
        setAddress(storedAddress);
      }
    }
  }, []);

  // Effect to persist isLoggedIn state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(isLoggedIn);
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  // Effect to persist userMode state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userMode", userMode);
    }
  }, [userMode]);

  // Effect to persist userId state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userId", userId ?? "");
    }
  }, [userId]);

  // Effect to persist connection state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("connection", JSON.stringify(connection));
    }
  }, [connection]);

  // Effect to persist account state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("account", JSON.stringify(account));
    }
  }, [account]);

  // Effect to persist address state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("address", address ?? "");
    }
  }, [address]);

  // Effect to log out user when provider changes
  useEffect(() => {
    if (providerContext) {
      const { switchNetwork } = providerContext;
      const originalSwitchNetwork = switchNetwork;

      providerContext.switchNetwork = async (newNetwork: string) => {
        await logout();
        originalSwitchNetwork(newNetwork);
      };
    }
  }, [providerContext]);

  const login = async () => {
    const { wallet } = await connect({
      modalMode: "canAsk",
      provider: providerContext?.provider,
    });

    if (wallet && wallet.isConnected) {
      const response = await fetch("/api/generateJWToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ walletAddress: wallet.selectedAddress }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate JWT token");
      }

      const { token } = await response.json();

      await app.logIn(Realm.Credentials.jwt(token));
      const userId = app.currentUser?.id;
      console.log("User logged in: ", userId);

      setConnection(wallet);
      setAccount(wallet.account);
      setAddress(wallet.selectedAddress);
      setUserId(userId ?? null);
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    await disconnect({
      clearLastWallet: true,
    });
    setIsLoggedIn(false);
    setConnection(null);
    setAccount(null);
    setAddress(null);
    setUserId(null);
  };

  const toggleMode = () =>
    setUserMode(
      userMode === UserMode.OWNER ? UserMode.MULTIOWNER : UserMode.OWNER,
    );

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userMode,
        login,
        logout,
        toggleMode,
        connection,
        account,
        address,
        contractAddress,
        userId, // Provide userId in the context value
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
