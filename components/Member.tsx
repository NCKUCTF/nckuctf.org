import Title from "./Title";
import SubTitle from "./SubTitle";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProfileItem from "./ProfileItem";

type Profile = {
  avatarUrl: string | undefined;
  username: string;
  description: string | undefined;
};

type MemberData = {
  core: Profile[];
  premium: Profile[];
  normal: Profile[];
};

export default function Member() {
  const [items, setItems] = useState<MemberData | null>(null);

  useEffect(() => {
    fetch("/member.json") // 根据文件存放的实际位置调整路径
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error loading the data:", error));
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 pt-16" id="member">
        <SubTitle
          className="mt-16 text-center lg:text-xl"
          text="先是人，後是社團"
        />
        <Title
          className="mt-1 font-bold text-4xl text-center lg:text-3xl lg:mt-3 mb-4"
          text="社團成員"
        />

        <div className="container bg-[#343434] border-4 border-emerald-400 rounded p-2 mb-8 lg:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="select-none">{"{{ "}</span>創始成員
            <span className="select-none">{" }}"}</span>
          </h3>
          <div className="block lg:flex">
            <div className="grid grid-cols-1 w-1/2">
              {items?.core.map((profile, index) => (
                <ProfileItem
                  key={index}
                  avatarUrl={profile.avatarUrl!}
                  username={profile.username}
                  description={profile.description!}
                />
              ))}
            </div>
            <Image
              className="w-1/2 m-8 hidden lg:block"
              src="/logo.png"
              width={512}
              height={512}
              style={{ width: "512px", height: "512px" }}
              alt="logo"
            />
          </div>
        </div>

        <div className="container bg-[#343434] border-4 border-orange-300 rounded p-2 mb-8 lg:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="select-none">{"{{ "}</span>
            核心成員
            <span className="select-none">{" }}"}</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {items?.premium.map((profile, index) => (
              <ProfileItem
                key={index}
                avatarUrl={profile.avatarUrl!}
                username={profile.username}
                description={profile.description!}
              />
            ))}
          </div>
        </div>

        <div className="container bg-[#343434] border-4 border-gray-500 rounded  p-2 mb-8 lg:p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="select-none">{"{{ "}</span>
            成員
            <span className="select-none">{" }}"}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {items?.premium.map((profile, index) => (
              <p className="text-white" key={index}>
                {profile.username}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
