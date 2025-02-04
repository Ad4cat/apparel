import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// 型定義
// buttonに関する型を自動的に定義する
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

// children : 引数 <button>aaa</button>
// ...props でonClickやidなど様々なものを受け取れる
// twMergeを使うとclassNameを上書きできる
const ExButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={twMerge("border", className)} {...props}>
      {children}
    </button>
  );
};

export default ExButton;
