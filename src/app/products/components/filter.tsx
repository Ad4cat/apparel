"use client";

import { useState } from "react";
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
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDesigner, setSelectedDesigner] = useState("");

  //   Displays(selectedColor, selectedSize, selectedCategory, selectedDesigner);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md p-2">
      <div className="flex items-center space-x-4 overflow-x-auto px-2 py-2 scrollbar-hide">
        {/* color */}
        <div className="flex flex-col min-w-[180px]">
          <h1 className="p-1 text-sm">Color</h1>
          <Select
            defaultValue="ALL"
            value={selectedColor}
            onValueChange={setSelectedColor}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    <div className="flex items-center space-x-2">
                      {/* 色を表示する円 */}
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></span>
                      {/* 色名 */}
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
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {size.map((size) => (
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
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {category.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* designer */}
        <div className="flex flex-col min-w-[180px]">
          <h1 className="p-1 text-sm">Designer</h1>
          <Select value={selectedDesigner} onValueChange={setSelectedDesigner}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ALL</SelectItem>
                {designer.map((designer) => (
                  <SelectItem key={designer} value={designer}>
                    {designer}
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
            <Button variant="outline" size="icon">
              <Search />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
