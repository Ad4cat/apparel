import React from "react";
import ProductLists from "../products/components/async";
import Switcher from "@/components/ui/switcher";

export default async function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      {/* <ProductLists /> */}
      <Switcher option="left, center" />
    </div>
  );
}
