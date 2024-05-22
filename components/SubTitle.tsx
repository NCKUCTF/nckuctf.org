import React from "react";
import { twMerge } from "tailwind-merge";

interface HackerHeadingProps {
  text: string;
  className?: string;
}

const SubTitle: React.FC<HackerHeadingProps> = ({ text, className }) => {
  return (
    <h2 className={twMerge(className, "text-center", "p-2")}>
      <span className="select-none"> {"/*"} </span>{" "}
      <span className={"text-gray-400"}>{text}</span>
      <span className="select-none"> {"*/"}</span>
    </h2>
  );
};

export default SubTitle;
