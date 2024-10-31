"use client";
import { BizWalletWithBalance } from '@/types';
import { useEffect, useState, useRef } from 'react';
import { getBusinessAccountById } from "@/services/databaseService";
import { tokenImages } from '@/lib/tokenAssets';
import { Reorder } from "framer-motion";
import { useTransition, animated } from "react-spring";
import * as Realm from "realm-web";
import { useUser } from '@/contexts/UserContext';
import { CallData, EntryPointType, Uint256, uint256} from 'starknet';
import { Button } from '@radix-ui/themes';
import { poseidonSmall,poseidonHashMany} from '@scure/starknet';
import { hashCall } from '@/utils/helpers';
import { useProvider } from '@/contexts/ProviderContext';
const app = new Realm.App({ id: "application-0-skavior" });

interface ProfileTestPageProps {
  params: { id: string; };
}

export default function ProfileTestPage({ params }: ProfileTestPageProps) {
  const { id: contractAddress } = params;
  const [bizWallet, setBizWallet] = useState<BizWalletWithBalance | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const prevTransactionsRef = useRef<string[]>([]);
  const userContext = useUser();
  const providerContext = useProvider();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Provider context network", providerContext?.network)
        const account = await getBusinessAccountById(contractAddress, providerContext);
        if (account) {
          setBizWallet(account);
        }
      } catch (error) {
        console.error("Error fetching biz wallet data:", error);
      }
    };
    fetchData();
  }, [contractAddress, providerContext]);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!bizWallet) return;

      if (app.currentUser === null) {
        console.log("No user logged in");
        return;
      }

      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("strapex-events").collection("events");
      console.log("This is the collection: ", collection);

      const transactions = await collection.find(
        {},
        { sort: { blockNumber: -1 } }
      );
      console.log("transactions", transactions);
      setTransactions(transactions);

      for await (const change of collection.watch()) {
        if (change.operationType === "insert") {
          const newTransaction = change.fullDocument;
          console.log("New transaction", newTransaction);
          setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
        }
      }
    };
    fetchTransactions();
  }, [bizWallet]);

  useEffect(() => {
    prevTransactionsRef.current = transactions.map((item) => item._id);
  }, [transactions]);

  const isItemNew = (id: string) => {
    return !prevTransactionsRef.current.includes(id);
  };

  if (!bizWallet) {
    return <div>Loading...</div>;
  }


  const withdrawAll = async () => {

    if (!userContext?.address) {
      alert("Please connect your wallet first!");
      return;
    }

    const transactions = [

      {
        contractAddress: bizWallet.contractAddress,
        entrypoint: "withdraw",
        // transfer 1 wei to the contract address
        calldata: CallData.compile({}),
      },
    ];

    userContext?.account?.getStarkName
    console.log(`Transactions: ${transactions}`);
    if (userContext?.account) {
      const multiCall = await userContext?.account.execute(transactions);
      console.log(`MultiCall: ${multiCall}`);
      if (multiCall) {
        const hx = multiCall.transaction_hash;
        console.log(`Transaction hash: ${hx}`);
        alert(`Transaction hash: ${hx}`);
      }
    }
  };



  const claimSubscription = async () => {

    const addressOfCostumer = "0x00d099386d761150881b5de9420fabf04af507f9e7d37af34a635baea9bb4f4a"

    const unixTimestamp = Math.floor(Date.now() / 1000);
    const unixTimestampPlus10Minutes = unixTimestamp + 600;
    const unixTimestampMinus10Minutes = unixTimestamp - 600;

    const amount: Uint256 = uint256.bnToUint256(BigInt(0.001 * 1e18));


    if (!userContext?.address) {
      alert("Please connect your wallet first!");
      return;
    }
    
    const transferCall = {
      contractAddress: bizWallet.contractAddress,
      entrypoint: "deposit",
      calldata: CallData.compile({
        id: 1,
        amount: amount,
      }),
    };

    console.log(`Transfer Call: ${JSON.stringify(transferCall)}`);

    const contractAddress = BigInt("0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7")

    //const hash = hashCall(transferCall);  
    // dconsole.log(`Signature: ${hash.toString(16)}`)

    const transactions = [
      {
        contractAddress: addressOfCostumer,
        entrypoint: "execute_from_outside_v2",
        // transfer 1 wei to the contract address
        calldata: CallData.compile({
          caller: userContext?.address,
          nonce: 1,
          execute_after: unixTimestampMinus10Minutes,
          execute_before: unixTimestampPlus10Minutes,
          calls: [
            transferCall
          ],
          signature: [],
        }),
      },
    ];

    

    console.log(`Transactions: ${JSON.stringify(transactions)}`);

    if (userContext?.account) {
      const multiCall = await userContext?.account.execute(transactions);
      console.log(`MultiCall: ${multiCall}`);
      if (multiCall) {
        const hx = multiCall.transaction_hash;
        console.log(`Transaction hash: ${hx}`);
        alert(`Transaction hash: ${hx}`);
      }
    }
  }


    return (
      <div className="bg-white text-gray-800 font-sans py-4 px-6">
        <h1 className="text-2xl font-bold mb-4">Profile Test Page</h1>
        <p className="mb-2">Contract Address: <span className="font-semibold">{contractAddress}</span></p>
        <Button onClick={withdrawAll}>Withdraw</Button>
        <Button onClick={claimSubscription}>Claim Subscription</Button>
        <div>
          <h2 className="text-xl font-semibold mb-3">Token Balances</h2>
          {bizWallet.balances.map((balance, index) => (
            <p key={index} className="mb-1">{balance.ticker}: <span className="font-medium">{balance.balance}</span></p>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Transactions</h2>
          <Reorder.Group
            axis="y"
            values={transactions}
            onReorder={setTransactions}
          >
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <td>Block Number</td>
                  <td>Transaction Hash</td>
                  <td>From</td>
                  <td>Amount</td>
                  <td>Token</td>
                  <td>Deposit ID</td>
                </tr>
              </thead>

              <Reorder.Group
                as="tbody"
                axis="y"
                values={transactions}
                onReorder={setTransactions}
              >
                {transactions.map((transaction, index) => (
                  <Reorder.Item
                    key={transaction._id}
                    value={transaction}
                    as="tr"
                    initial={{ y: isItemNew(transaction._id) ? -50 : 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <td>{transaction.blockNumber}</td>
                    <td>{`${transaction.transactionHash.slice(0, 4)}...${transaction.transactionHash.slice(-4)}`}</td>
                    <td>{`${transaction.from.slice(0, 4)}...${transaction.from.slice(-4)}`}</td>
                    <td>{transaction.amount / 1e18}</td>
                    <td>
                      <img
                        src={tokenImages[transaction.token] || "default_image_path"}
                        alt="Token"
                        className="h-6 w-6"
                      />
                    </td>
                    <td>{transaction.depositId}</td>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </table>
          </Reorder.Group>
        </div>
      </div>
    );
  }