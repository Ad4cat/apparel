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

  return (
    <>
      {!isSearchVisible && (
        <Search
          className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer "
          onClick={toggleSearchBer}
        />
      )}

      {isSearchVisible && (
        <div
          ref={searchRef}
          className="flex items-center w-auto p-2 gap-2 border border-gray-500 rounded-lg backdrop-blur-md"
        >
          <Search className="hover:text-rose-600 transition-colors cursor-pointer" />
          <Searchbutton />
        </div>
      )}
    </>
  );
};

export default Searchber;
