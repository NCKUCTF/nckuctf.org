// components/ProfileItem.ts
import React from "react";
import Image from "next/image";

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
      <p className="text-white break-words w-auto">
        <b>{username}</b>
        <br />
        {description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default ProfileItem;
