import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 px-10 py-4 z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center w-full">
        <Link href="/">
          <Image src="/favicon.ico" alt="Logo" width={36} height={36} />
        </Link>
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex space-x-8 items-center absolute md:static bg-gray-800 w-full md:w-auto pb-4 md:pb-0 left-0 md:space-x-0 pl-10 pr-10 md:pl-0 md:pr-0 pt-10 md:pt-0 transition-transform duration-300 ease-in-out ${isOpen ? "top-14" : "-top-[490px]"}`}
        >
          <li className="text-white hover:text-gray-300 px-3">
            <Link href="#about">關於我們</Link>
          </li>
          <li className="text-white hover:text-gray-300 px-3">
            <Link href="#contact">聯絡方式</Link>
          </li>
          <li className="text-white hover:text-gray-300 px-3">
            <Link href="#class">社課與活動紀錄</Link>
          </li>
          <li className="text-white hover:text-gray-300 px-3">
            <Link href="#member">社團成員</Link>
          </li>
          <li className="text-white hover:text-gray-300 px-3">
            <Link href="#award">獲獎紀錄</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
