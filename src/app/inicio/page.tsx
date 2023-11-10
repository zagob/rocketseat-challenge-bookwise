"use client";

import { Logo } from "@/components/logo";
import { Rating } from "@/components/rating";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex gap-24">
      <div className="min-h-screen flex flex-col">
        <div className="w-[232px] m-5 flex flex-col justify-between items-center flex-grow rounded-xl box-border bg-background bg-no-repeat">
          <div className="flex flex-col gap-16 mt-10">
            <Logo />
            <ul className="grid gap-6">
              <li className="flex">
                <div className="w-1 bg-gradient-vertical rounded-full" />
                <a
                  href=""
                  className="flex items-center gap-3 font-bold text-md pl-4 w-full text-gray-100"
                >
                  <Icon icon="fluent-mdl2:chart" className="w-6 h-6" />
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 font-regular text-md pl-4 w-full text-gray-400"
                >
                  <Icon icon="ph:binoculars" className="w-6 h-6" />
                  Explorar
                </a>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="flex gap-3 items-center text-gray-100 font-bold text-md mb-7"
          >
            Fazer login
            <Icon
              icon="teenyicons:signin-outline"
              className="text-green-100 w-5 h-5"
            />
          </button>
        </div>
      </div>

      <div className="mt-[72px] flex gap-20 mr-24">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Icon icon="fluent-mdl2:chart" className="w-8 h-8 text-green-100" />
            <h2 className="font-bold text-2xl leading-short">Início</h2>
          </div>

          <h4 className="text-sm mb-4">Avaliações mais recentes</h4>

          <div className="rounded-lg bg-gray-700 p-6 flex flex-col gap-8">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum reiciendis, sed fugiat quibusdam incidunt sequi
                  exercitationem hic a. Fugiat autem laboriosam rem magni
                  libero. Voluptates et impedit quam repellat perferendis!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between">
            <h4 className="text-sm mb-4">livros populares</h4>
            <button className="font-bold text-sm text-purple-100 flex items-center">
              Ver todos
              <Icon icon="ep:arrow-right" className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gray-700 rounded-lg flex gap-5 w-[324px]">
            <Image
              src="/revolucaoDosBichos.png"
              width={64}
              height={94}
              alt=""
            />
            <div className="flex flex-col items-stretch">
              <div>
                <h6>A Revolução dos bichos</h6>
                <span>George Orwell</span>
              </div>
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
