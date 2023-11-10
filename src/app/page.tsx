import { Login } from "@/components/login";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen p-5">
      {/* <div className="p-5 flex items-center"> */}
      <Image
        src="/bgHome.png"
        alt=""
        width={600}
        height={912}
        // className="m-5"
        quality={100}
      />
      {/* </div> */}
      <div className="flex flex-col justify-center gap-10 w-[372px] mx-auto items-start">
        <div className="">
          <h1 className="text-2xl font-bold leading-short">Boas vindas!</h1>
          <p className="leading-base text-md">
            Faça seu login ou acesse como visitante.
          </p>
        </div>

        <Login />
      </div>
    </div>
  );
}
