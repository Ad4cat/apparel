"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://apparel-two-delta.vercel.app/success"
      cancelUrl="https://apparel-two-delta.vercel.app/cancel"
      currency="JPY"
      billingAddressCollection={true}
      shouldPersist={true}
      language="ja-JP"
    >
      {children}
    </USCProvider>
  );
}
