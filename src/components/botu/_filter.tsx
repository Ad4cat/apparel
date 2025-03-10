"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// color, size, category, priceで絞り込み
export default function FilterChange({
  colors,
}: {
  colors: string[];
  size: string[];
  category: string[];
  designer: string[];
}) {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="inline-block p-2 h-auto sticky top-0 border-r border-black space-y-4">
      {/* color */}
      <div className="flex flex-col ">
        <h1 className="p-1">Color(ABC順)</h1>
        <RadioGroup
          value={selectedColor}
          onValueChange={(value) => setSelectedColor(value)}
          className="flex-col items-center"
        >
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <RadioGroupItem value={color} id={color} />
              <Label htmlFor={color}>{color}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
