"use client";

import React from "react";
import { Heart, House } from "lucide-react";
import UserIcon from "./usericon";
import Link from "next/link";
import Searchber from "./searchber";
import ShoppingCartCom from "./ShoppingCart";
import Hamburger from "./hamburger";
// import { usePathname } from "next/navigation";

const Header = () => {
  // const pathname = usePathname();
  return (
    // 固定, 以下のdivをbetweenかつ中央(水平方向)で一番前にする
    <>
      <div className="fixed inset-0 h-16 bg-gray-200 border-b border-white opacity-55 z-header_bg" />
      <div
        className="fixed flex justify-between items-center h-16 w-full px-6 z-header_strings"
        id="#"
      >
        <div className="flex items-center">
          <Link href="/" className="ml-2 text-xl font-bold">
            <div className="flex items-center space-x-1">
              <House />
              <p>BLAND NAME</p>
            </div>
          </Link>
        </div>
        <div
          id="center"
          className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-xl"
        >
          <Link
            href="/products"
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer"
          >
            ALL
          </Link>
          {/* <p className="hidden lg:flex">|</p> */}
          <Link
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer scroll-mt-16"
            href="/#latest"
          >
            Latest Arrivals
          </Link>
          {/* <p className="hidden lg:flex">|</p> */}
          <Link
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer"
            href="/#lookbook"
          >
            LOOK BOOK
          </Link>
        </div>
        <div className="flex px-4 space-x-7 items-center">
          <div className="hidden lg:block">
            <Searchber />
          </div>
          <Heart className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer" />
          <ShoppingCartCom />
          <UserIcon />
          <div className="lg:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
