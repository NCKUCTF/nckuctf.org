import React from "react";
import Image from "next/image";

const images = [
  "/movingImage/movingImage2.png",
  "/movingImage/movingImage3.png",
  "/movingImage/movingImage4.png",
  "/movingImage/movingImage5.png",
  "/movingImage/movingImage6.png",
  "/movingImage/movingImage8.png",
  "/movingImage/movingImage9.png",
  "/movingImage/movingImage10.png",
  "/movingImage/movingImage11.png",
  "/movingImage/movingImage12.png",
  "/movingImage/movingImage13.png",
];

const MovingImageWall: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden relative w-full h-64">
        <div className="flex w-[70%] animate-marqueeLeft">
          {images
            .concat(images)
            .concat(images)
            .map((src, index) => (
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg mr-2 object-contain"
                key={index}
                width={360}
                height={360}
              />
            ))}
        </div>
      </div>

      <div className="overflow-hidden relative w-full h-64">
        <div className="flex flex-row-reverse w-[70%] animate-marqueeRight">
          {images
            .concat(images)
            .concat(images)
            .map((src, index) => (
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg mr-2 object-contain"
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
