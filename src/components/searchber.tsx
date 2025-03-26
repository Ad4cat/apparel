"use client";

import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Searchbutton from "./ui/searchbutton";

const Searchber = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearchBer = () => {
    setSearchVisible(!isSearchVisible);
  };

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchVisible(false);
      }
    };

    // クリックイベントを常に監視
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const down = (e: globalThis.KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setSearchVisible((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setSearchVisible]);

  return (
    <>
      {!isSearchVisible && (
        <div
          className="border border-gray-300 rounded-lg p-2 space-x-1 hover:opacity-80 cursor-pointer"
          onClick={toggleSearchBer}
        >
          <div className="flex items-center space-x-1">
            <Search className="hidden lg:flex text-gray-400 hover:cursor-pointer w-4 h-4" />
            <div className="flex justify-center items-center text-gray-500 text-xs">
              <span>press &apos; / &apos;</span>
            </div>
          </div>
        </div>
      )}

      {isSearchVisible && (
        <div
          ref={searchRef}
          className="flex items-center w-auto p-2 gap-2 border border-gray-300 rounded-lg backdrop-blur-md"
        >
          <Search className="text-gray-400 hover:cursor-pointer w-4 h-4" />
          <Searchbutton />
        </div>
      )}
    </>
  );
};

export default Searchber;
