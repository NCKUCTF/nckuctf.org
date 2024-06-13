import Link from "next/link";
import Image from "next/image";
export default function Visual() {
  return (
    <div className="relative h-[30vh] min-h-[614px] mt-12">
      {/* TODO: add new landing picture*/}

      {/* <div */}
      {/*   className="absolute inset-0 bg-cover bg-center filter blur-sm" */}
      {/*   style={{ */}
      {/*     backgroundImage: `url('/visual.jpg')`, */}
      {/*   }} */}
      {/* ></div> */}

      <div className="flex items-center justify-center h-screen">
        <Image src="/visual2.png" alt="Logo" width={812} height={812} />
        {/* <div className="tracking-[.5em] lg:text-[24px] lg:tracking-[1em] text-white"> */}
        {/*   成大資安社 */}
        {/* </div> */}
      </div>
    </div>
  );
}
