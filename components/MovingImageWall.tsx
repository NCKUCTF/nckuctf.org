import React from "react";
import Image from "next/image";

const images = [
  "/featurebox1.jpg",
  "/featurebox1.jpg",
  "/featurebox1.jpg",
  "/featurebox1.jpg",
  "/featurebox1.jpg",
  "/featurebox1.jpg",
  "/featurebox1.jpg",
  "/featurebox1.jpg",
];

const MovingImageWall: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden relative w-full h-64">
        <div className="flex w-[80%] animate-marqueeLeft">
          {images.concat(images).map((src, index) => (
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-lg mr-2"
              key={index}
              width={360}
              height={360}
            />
          ))}
        </div>
      </div>

      <div className="overflow-hidden relative w-full h-64">
        <div className="flex w-[80%] animate-marqueeRight">
          {images.concat(images).map((src, index) => (
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-lg mr-2"
              key={index}
              width={360}
              height={360}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovingImageWall;
