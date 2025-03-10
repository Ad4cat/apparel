import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

interface NarrowdownContentProps {
  filters: { category: string; color: string };
  onFilterChange: (key: "category" | "color", value: string) => void;
}

const NarrowdownContent: React.FC<NarrowdownContentProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="flex w-full space-x-6 justify-center items-center p-4 border rounded-md shadow bg-white">
      {/* カテゴリー選択 */}
      <div className="flex flex-col space-y-1 ">
        <p className="font-semibold">カテゴリ</p>
        <RadioGroup
          value={filters.category}
          onValueChange={(val) => onFilterChange("category", val)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">ALL</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="men" id="men" />
            <Label htmlFor="men">MEN</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="women" id="women" />
            <Label htmlFor="women">WOMEN</Label>
          </div>
        </RadioGroup>
      </div>

      {/* カラー選択 */}
      <div className="flex flex-col space-y-1 ">
        <p className="font-semibold">カラー</p>
        <RadioGroup
          value={filters.color}
          onValueChange={(val) => onFilterChange("color", val)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="color-all" />
            <Label htmlFor="color-all">ALL</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="red" id="red" />
            <Label htmlFor="red">RED</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="blue" id="blue" />
            <Label htmlFor="blue">BLUE</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default NarrowdownContent;
