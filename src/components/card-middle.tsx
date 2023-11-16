import Image from "next/image";
import { Rating } from "./rating";

export function CardMiddle() {
  return (
    <div className="rounded-lg bg-gray-700 p-6 flex flex-col gap-8 border border-transparent hover:border hover:border-gray-600 hover:cursor-pointer transition-all">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-500" />
          <div>
            <h5>Jaxson Dias</h5>
            <span>Hoje</span>
          </div>
        </div>
        <Rating />
      </div>
      <div className="flex gap-5">
        <Image src="/Book.png" width={108} height={152} alt="" />

        <div className="grid gap-5">
          <div>
            <h6 className="font-bold text-md leading-short">O Hobbit</h6>
            <span className="text-sm text-gray-400">J.R.R. Tolkien</span>
          </div>

          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis, sed fugiat quibusdam incidunt sequi exercitationem hic
            a. Fugiat autem laboriosam rem magni libero. Voluptates et impedit
            quam repellat perferendis!
          </p>
        </div>
      </div>
    </div>
  );
}
