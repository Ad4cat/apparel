import React from "react";
import { Heart, ShoppingCart, House, Menu } from "lucide-react";
import UserIcon from "./usericon";
import Link from "next/link";
import Searchber from "./serchber";

const Header = () => {
  return (
    // 固定, 以下のdivをbetweenかつ中央(水平方向)で一番前にする
    <>
      <div className="fixed inset-0 h-16 bg-gray-50 border-b border-white opacity-55 z-header_bg" />
      <div
        className="fixed flex justify-between items-center h-16 w-full px-6 z-header_strings"
        id="#"
      >
        <div className="flex items-center space-x-2">
          <House />
          <Link href="/" className="ml-2 text-xl font-bold">
            BLAND NAME
          </Link>
        </div>
        <div
          id="center"
          className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-xl"
        >
          <Link
            href="/women"
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer"
          >
            Women
          </Link>
          {/* <p className="hidden lg:flex">|</p> */}
          <Link
            href="/men"
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer"
          >
            Men
          </Link>
          {/* <p className="hidden lg:flex">|</p> */}
          <Link
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer scroll-mt-16"
            href="#latest"
          >
            Latest Arrivals
          </Link>
          {/* <p className="hidden lg:flex">|</p> */}
          <Link
            className="hidden lg:flex text-black font-semibold hover:text-rose-600 transition-colors cursor-pointer"
            href="#lookbook"
          >
            LOOK BOOK
          </Link>
        </div>
        <div className="flex px-4 space-x-7 items-center">
          <Searchber />
          <Heart className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer" />
          <Link href="cart">
            <ShoppingCart className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer" />
          </Link>
          <UserIcon />
          <Menu className="lg:hidden text-gray-700 hover:text-rose-600 transition-colors cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
