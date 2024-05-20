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

      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-4 z-10 relative">
        <Image src="/logo.png" alt="Logo" width={512} height={512} />
        {/* <div className="tracking-[.5em] lg:text-[24px] lg:tracking-[1em] text-white"> */}
        {/*   成大資安社 */}
        {/* </div> */}
      </div>
    </div>
  );
}
