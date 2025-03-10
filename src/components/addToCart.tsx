"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  price_id: string;
}

const AddToCart = ({
  name,
  currency,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id,
  };

  return (
    <div>
      <Button
        onClick={() => {
          addItem(product);
          handleCartClick();
        }}
        className="bg-black text-white w-full"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
