import Image from "next/image";
import { Inter } from "next/font/google";
import Visual from "@/components/Visual";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Class from "@/components/Class";
import Member from "@/components/Member";
import Award from "@/components/Award";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Visual />
      <About />
      <Contact />
      <Class />
      <Member />
      <Award />
    </>
  );
}
