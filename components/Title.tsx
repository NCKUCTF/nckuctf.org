import React from "react";
import { twMerge } from "tailwind-merge";

interface HackerHeadingProps {
  level: "h1" | "h2";
  text: string;
  className?: string;
}

const Title: React.FC<HackerHeadingProps> = ({ level, text, className }) => {
  const Tag = level;
  return (
    <Tag className={twMerge(className, "text-center", "p-2")}>
      <span className="select-none">{level == "h1" ? "$(" : "/*"} </span>{" "}
      <span className={level == "h1" ? "text-[#F7931E]" : "text-gray-400"}>
        {text}
      </span>
      <span className="select-none"> {level == "h1" ? ")" : "*/"}</span>
    </Tag>
  );
};

export default Title;
