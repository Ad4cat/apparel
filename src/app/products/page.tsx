import Header from "@/components/header";
import Link from "next/link";
import React from "react";
import ProductList from "./components/display_products";

const page = () => {
  return (
    <div>
      <Header />
      <div className="transform translate-y-20 max-w-6xl mx-auto px-6">
        <div className="flex text-2xl font-bold mb-4">
          <h1>Products</h1>
          <p className="mx-5">|</p>
          <h1>
            <Link
              href={`/products/designers`}
              className="text-blue-500 hover:underline"
            >
              DESIGNERS
            </Link>
          </h1>
        </div>
        <div className="w-full border-b border-gray-300 mb-2" />
        <ProductList />
      </div>
    </div>
  );
};

export default page;
