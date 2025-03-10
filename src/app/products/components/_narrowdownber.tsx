"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import NarrowdownContent from "./_narrowdownContent";

function Narrowdown() {
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useState<{ category: string; color: string }>({
    category: "all",
    color: "all",
  });

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* トリガー部分 */}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={toggleIsOpen}
      >
        <Button variant="ghost" className="hover:shadow-sm">
          絞り込み
          <ChevronDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {/* 開いたときにコンテンツを下に押し下げるエリア */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        {isOpen && (
          <div className="w-full p-2 px-2 border rounded-md shadow bg-white">
            <NarrowdownContent
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Narrowdown;
