import React, { useState, useEffect } from "react";

interface FeatureBoxProps {
  targetValue: number;
  imagePath: string;
  unit?: string;
  text?: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  targetValue,
  imagePath,
  unit,
  text,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < targetValue) {
          return prevValue + 1;
        } else {
          clearInterval(interval);
          return prevValue;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <div className="bg-black px-2 py-4 rounded-lg overflow-hidden relative flex flex-col pt-40 hover:pt-20 hover:pb-20 hover:shadow-xl group transition-all hover:scale-105 duration-300 ease-in-out">
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 group-hover:opacity-50 transition-all duration-300 ease-in-out group-hover:blur-sm"
        style={{
          backgroundImage: `url('${imagePath}')`,
          mask: "linear-gradient(180deg, #000 60%, #0000 100%)",
          WebkitMask: "linear-gradient(180deg, #000 60%, #0000 100%)",
        }}
      />
      <div
        className="relative text-xs sm:text-sm md:text-base flex flex-col items-center text-white group-hover:scale-125 transition-all h-full justify-end group-hover:justify-center duration-300 ease-in-out"
        style={{
          textShadow: "0 0 8px rgba(0,0,0,0.5)",
        }}
      >
        <div>
          <span className="text-2xl lg:text-4xl mr-1">{value}</span>
          {unit}
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default FeatureBox;
