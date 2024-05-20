import React, { useEffect, useState } from "react";
import Title from "./Title";
import MovingImageWall from "./MovingImageWall";
import Button from "./Button";
export default function Class() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 pt-16" id="class">
        <Title
          className="mt-16 text-center lg:text-xl"
          level="h2"
          text="由講師精心設計的課程"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-8"
          level="h1"
          text="社課資訊"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-80vh">
        {isClient && (
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-sm"
          >
            <source src="/videos/public_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="relative z-10 w-full">
          <MovingImageWall />
        </div>
        <div className="relative z-10">
          <Button
            text="馬上看社課影片"
            onClick={() => {
              alert("Hacked!");
              window.location.href =
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }}
          />
        </div>
      </div>
    </>
  );
}
