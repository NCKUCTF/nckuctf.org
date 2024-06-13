// components/ProfileItem.ts
import React from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ProfileItemProps = {
  avatarUrl: string;
  username: string;
  description: string;
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  avatarUrl,
  username,
  description,
}) => {
  return (
    <div className="flex items-center mb-6 break-words">
      <Image
        src={avatarUrl}
        alt="Profile Avatar"
        className="mr-4"
        width={100}
        height={100}
        style={{ width: "100px", height: "100px" }}
      />
      <p className="break-words w-auto">
        <b className="font-bold mb-4">{username}</b>
        <br />

        <Markdown remarkPlugins={[remarkGfm]} className="prose markdown">
          {description}
        </Markdown>
      </p>
    </div>
  );
};

export default ProfileItem;
