import Header from "@/components/header";
import Link from "next/link";
import React from "react";
import ProductList from "./components/display_products";

// plain なオブジェクトの型定義
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div>
      <Header />
      <div className="transform translate-y-20 mx-auto px-6 w-screen justify-center items-center">
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
        {/* ここで plain な searchParams を Promise.resolve() でラップ */}
        <ProductList
          searchParams={Promise.resolve<SearchParams>(searchParams)}
        />
      </div>
    </div>
  );
}
