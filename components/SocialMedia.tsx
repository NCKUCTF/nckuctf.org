import React from "react";
import Link from "next/link";
import Image from "next/image";

const socialMediaData = [
  {
    href: "https://www.facebook.com/NCKUCTF/",
    imgSrc: "/social/facebook.png",
    alt: "Facebook",
    info: "從 Facebook 獲得最新資訊和活動更新",
  },
  {
    href: "https://www.instagram.com/nckuctf/",
    imgSrc: "/social/instagram.png",
    alt: "Instagram",
    info: "在 Instagram 上關注我們的最新動態",
  },
  {
    href: "https://www.youtube.com/@NCKUCTF",
    imgSrc: "/social/youtube.png",
    alt: "youtube",
    info: "在 YouTube 上觀看我們的社課影片",
  },
  {
    href: "https://discord.com/invite/Fq9T8NNb6E",
    imgSrc: "/social/discord.png",
    alt: "Discord",
    info: "在 Discord 上與我們互動",
  },
];

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {socialMediaData.map((media, index) => (
        <Link
          key={index}
          href={media.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 hover:transition-transform hover:duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-4 rounded-lg w-full h-64">
            <Image
              src={media.imgSrc}
              alt={media.alt}
              width={128}
              height={128}
              className="mb-8"
            />

            <p
              className="text-center text-lg"
              style={{
                textShadow: "0 0 8px rgba(0,0,0,0.5)",
              }}
            >
              {media.info}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
