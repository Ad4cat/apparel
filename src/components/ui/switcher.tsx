"use client";

import React, { useState } from "react";

type SwitcherProps = {
  option: string; // カンマ区切りの文字列
  onChange?: (selected: string) => void; // 親コンポーネントに通知
};

const Switcher: React.FC<SwitcherProps> = ({ option, onChange }) => {
  const options = option
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  const [active, setActive] = useState(options[0] || "");

  const handleClick = (selected: string) => {
    setActive(selected);
    if (onChange) onChange(selected);
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex gap-x-1.5 rounded-full bg-gray-600/10 p-1 ring-1 ring-gray-600/5 dark:bg-black/30 dark:ring-white/5">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => handleClick(opt)}
            className={`relative px-4 py-2 flex items-center justify-center min-w-[60px] rounded-full outline-none transition-colors
              ${
                active === opt
                  ? "bg-white text-gray-800 shadow-md ring-1 ring-gray-900/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-white/20"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Switcher;
