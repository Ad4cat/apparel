"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ShoppingCart } from "lucide-react";
import { MouseEvent } from "react";

const ShoppingCartModal = () => {
  const { cartCount, cartDetails, removeItem, totalPrice, redirectToCheckout } =
    useShoppingCart();

  async function handleCheckoutClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error("Checkout Error:", result.error);
      }
    } catch (err) {
      console.error("Error during checkout:", err);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer" />
      </SheetTrigger>{" "}
      <SheetContent className="sm:max-w-lg w-[90vw] z-sideBar">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            {cartCount === 0 ? (
              <h1 className="py-6">You do not have any items</h1>
            ) : (
              <ul className="-my-6 divide-y divide-gray-200">
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <li key={entry.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={entry.image as string}
                        alt="Product Image"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{entry.name}</h3>
                        <p className="ml-4">{entry.price} PLN</p>
                      </div>

                      <p className="text-gray-500">QTY: {entry.quantity}</p>

                      <button
                        onClick={() => removeItem(entry.id)}
                        type="button"
                        className="font-medium text-primary hover:text-primary/80"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{totalPrice} JPY</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout
            </p>

            <div className="mt-6">
              <Button
                onClick={handleCheckoutClick}
                className="w-full bg-black text-white"
              >
                Pay now
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <SheetClose asChild>
                <Button>Continue shopping</Button>
              </SheetClose>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
