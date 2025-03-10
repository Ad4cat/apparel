import React from "react";

const Displays = (
  selectedColor: string,
  selectedCategory: string,
  selectedSize: string,
  selectedDesigner: string
) => {
  return (
    <div>
      <div>
        {selectedCategory}
        {selectedColor}
        {selectedDesigner}
        {selectedSize}
      </div>
    </div>
  );
};

export default Displays;
