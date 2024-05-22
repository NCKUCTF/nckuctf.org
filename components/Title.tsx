import React from "react";
import { twMerge } from "tailwind-merge";

interface HackerHeadingProps {
  text: string;
  className?: string;
}

const Title: React.FC<HackerHeadingProps> = ({ text, className }) => {
  return (
    <>
      <h1 className={twMerge(className, "text-center", "p-2")}>
        <span className="select-none">{"$("} </span>{" "}
        <span className="text-[#F7931E]">{text}</span>
        <span className="select-none"> {")"}</span>
      </h1>
      <div className="h-[2px] opacity-30 flex-1 bg-gradient-to-r from-[#1a1a1a] via-[#FFFFFF] to-[#1a1a1a] mb-8" />
    </>
  );
};

export default Title;
