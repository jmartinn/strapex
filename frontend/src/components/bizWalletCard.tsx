// BizWalletCard.tsx
import { BizWalletWithBalance } from "@/types";

interface BizWalletCardProps {
  account: BizWalletWithBalance;
}

export default function BizWalletCard({ account }: BizWalletCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{account.name}</h2>
      <p className="text-gray-600 mb-4">{account.description}</p>
      <div className="flex space-x-2">
        {account.tags.split(",").map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {tag.trim()}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">Contract Address: {account.contractAddress}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Balances</h3>
        <ul>
          {account.balances.map((balance) => (
            <li key={balance.address} className="mb-2">
              <span className="font-semibold">{balance.ticker}:</span> {balance.balance.toFixed(6)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}