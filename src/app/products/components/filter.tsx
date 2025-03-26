"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterChange({
  colors,
  size,
  category,
  designer,
}: {
  colors: string[];
  size: string[];
  category: string[];
  designer: string[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 初期値を URL から取得する例
  const initialColor = searchParams.get("color") || "all";
  const initialSize = searchParams.get("size") || "all";
  const initialCategory = searchParams.get("category") || "all";
  const initialDesigner = searchParams.get("designer") || "all";

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDesigner, setSelectedDesigner] = useState(initialDesigner);

  const updateQuery = (key: string, value: string) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );
    currentParams.set(key, value);
    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md p-2 w-full">
      <div className="flex items-center space-x-4 overflow-x-auto px-2 py-2 scrollbar-hide w-full max-w-6xl mx-auto">
        {/* color */}
        <div className="flex flex-col min-w-[180px]">
          <h1 className="p-1 text-sm">Color</h1>
          <Select
            value={selectedColor}
            onValueChange={(value) => {
              setSelectedColor(value);
              updateQuery("color", value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {colors.map((color: string) => (
                  <SelectItem key={color} value={color}>
                    <div className="flex items-center space-x-2">
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></span>
                      <span>{color}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* size */}
        <div className="flex flex-col min-w-[180px]">
          <h1 className="p-1 text-sm">Size</h1>
          <Select
            value={selectedSize}
            onValueChange={(value) => {
              setSelectedSize(value);
              updateQuery("size", value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {size.map((size: string) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* category */}
        <div className="flex flex-col min-w-[180px]">
          <h1 className="p-1 text-sm">Category</h1>
          <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value);
              updateQuery("category", value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {category.map((cat: string) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* designer */}
        <div className="flex flex-col min-w-[180px]">
          <h1 className="p-1 text-sm">Designer</h1>
          <Select
            value={selectedDesigner}
            onValueChange={(value) => {
              setSelectedDesigner(value);
              updateQuery("designer", value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {designer.map((d: string) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* 価格 */}
        <div className="flex flex-col min-w-[220px]">
          <h1 className="p-1 text-sm">Price</h1>
          <div className="flex space-x-1 items-center">
            <Input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="0"
              className="w-1/2"
            />
            <h2>〜</h2>
            <Input
              type="number"
              min="0"
              inputMode="numeric"
              placeholder="123,456"
              className="w-1/2"
            />
            <Button variant="outline" size="icon" className="aspect-square">
              <Search />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
