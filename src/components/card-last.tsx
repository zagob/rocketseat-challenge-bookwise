import Image from "next/image";
import { Rating } from "./rating";

export function CardLast() {
  return (
    <div className="bg-gray-600 flex gap-6 px-6 py-5 rounded border border-transparent hover:border hover:border-gray-500 hover:cursor-pointer transition-all">
      <Image src="/book2.png" width={108} height={152} alt="" />
      <div className="w-full">
        <div className="flex justify-between mb-3">
          <span className="text-gray-300 text-sm">Há 2 dias</span>
          <Rating />
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-[16px] leading-short">
            Entendendo Algoritmos
          </h4>
          <span className="text-gray-400 text-sm">Aditya Bhargava</span>
        </div>

        <p className="text-gray-300 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          pariatur voluptates illo quibusdam commodi praesentium ad quasi
          voluptate, et optio ratione repudiandae rem! Eius est eveniet
          quisquam, odio mollitia dolorem?
        </p>
      </div>
    </div>
  );
}
