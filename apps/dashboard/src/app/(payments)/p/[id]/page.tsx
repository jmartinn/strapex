"use client";

import { useState } from "react";

import { ArrowLeft } from "lucide-react";
// import type { Metadata } from "next";
import Link from "next/link";

import { CheckoutForm } from "@/components/forms/checkout-form";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// export const metadata: Metadata = {
//   title: "Checkout",
// };

export default function CheckoutPage() {
  const [cart] = useState<CartItem[]>([
    {
      id: "1",
      name: "StarkWolves Limited Edition",
      price: 14.35,
      quantity: 1,
      image: "/product-1.jpg",
    },
    {
      id: "2",
      name: "Pure glow cream",
      price: 32.0,
      quantity: 2,
      image: "/product-2.jpg",
    },
  ]);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.065;
  const total = subtotal + tax;

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Column - Order Summary */}
      <div className="bg-[#1C2333] p-8 text-white lg:w-1/2">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 flex items-center gap-2">
            <Link
              href="/"
              className="group flex items-center text-sm text-gray-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-1 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          <div className="mb-12">
            <h1 className="mb-2 text-lg">Starknet Store</h1>
            <div className="text-4xl font-semibold">${total.toFixed(2)}</div>
          </div>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="size-12 rounded bg-gray-700"></div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-400">Qty {item.quantity}</p>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  {item.quantity > 1 && (
                    <div className="text-sm text-gray-400">
                      ${item.price.toFixed(2)} each
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Sales tax (6.5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between pt-2 text-lg font-semibold">
              <span>Total due</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="bg-white p-8 lg:mt-10 lg:w-1/2 lg:pr-56">
        <div className="mx-auto max-w-lg">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
