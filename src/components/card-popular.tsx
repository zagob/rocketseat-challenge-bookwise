import Image from "next/image";
import { Rating } from "./rating";

export function CardPopular() {
  return (
    <div className="bg-gray-700 rounded-lg flex gap-5 w-[324px] px-5 py-[18px]">
      <Image src="/revolucaoDosBichos.png" width={64} height={94} alt="" />
      <div className="flex flex-col justify-between">
        <div>
          <h6 className="text-gray-100 font-bold text-md">
            A Revolução dos bichos
          </h6>
          <span className="text-gray-400 text-sm">George Orwell</span>
        </div>
        <Rating />
      </div>
    </div>
  );
}
