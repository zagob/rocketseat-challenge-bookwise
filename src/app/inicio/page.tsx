"use client";

import { CardMiddle } from "@/components/card-middle";
import { Logo } from "@/components/logo";
import { Rating } from "@/components/rating";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Page() {
  const isAuthenticated = false;

  // return (
  //   <div className="min-h-screen flex gap-24 border">
  //     <div className="border max-h-screen border-green-500 w-[232px]">
  //       <div className="flex flex-col justify-between border h-full p-5">
  //         <div>logo</div>
  //         <div>signout</div>
  //       </div>
  //     </div>

  //     <div className="border border-gray-400 w-full overflow-auto flex-grow max-h-screen">
  //       <div className="mt-10 w-[200px]">
  //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
  //         voluptates nihil et culpa aliquam iure officiis amet mollitia?
  //         Temporibus autem atque doloribus ipsam molestiae recusandae eaque
  //         tenetur ea magni, voluptatem commodi quod quidem, possimus omnis ipsum
  //         molestias, repellendus aliquid cum! Veritatis, suscipit quis. Fuga,
  //         porro odit! Voluptas, quae? Cum, molestiae? Lorem ipsum, dolor sit
  //         amet consectetur adipisicing elit. Expedita voluptates nihil et culpa
  //         aliquam iure officiis amet mollitia? Temporibus autem atque doloribus
  //         ipsam molestiae recusandae eaque tenetur ea magni, voluptatem commodi
  //         quod quidem, possimus omnis ipsum molestias, repellendus aliquid cum!
  //         Veritatis, suscipit quis. Fuga, porro odit! Voluptas, quae? Cum,
  //         molestiae? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //         Expedita voluptates nihil et culpa aliquam iure officiis amet
  //         mollitia? Temporibus autem atque doloribus ipsam molestiae recusandae
  //         eaque tenetur ea magni, voluptatem commodi quod quidem, possimus omnis
  //         ipsum molestias, repellendus aliquid cum! Veritatis, suscipit quis.
  //         Fuga, porro odit! Voluptas, quae? Cum, molestiae? Lorem ipsum, dolor
  //         sit amet consectetur adipisicing elit. Expedita voluptates nihil et
  //         culpa aliquam iure officiis amet mollitia? Temporibus autem atque
  //         doloribus ipsam molestiae recusandae eaque tenetur ea magni,
  //         voluptatem commodi quod quidem, possimus omnis ipsum molestias,
  //         repellendus aliquid cum! Veritatis, suscipit quis. Fuga, porro odit!
  //         Voluptas, quae? Cum, molestiae?
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="min-h-screen flex gap-24">
      <div className="max-h-screen p-5">
        <div className="flex flex-col justify-between h-full w-[232px] rounded-xl bg-background">
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
              {isAuthenticated ? (
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 font-regular text-md pl-4 w-full text-gray-400"
                  >
                    <Icon icon="ph:user" className="w-6 h-6" />
                    Perfil
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen flex flex-col">
        <div className="w-[232px] m-5 flex flex-col justify-between items-center border rounded-xl box-border bg-background bg-no-repeat">
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
              {isAuthenticated ? (
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 font-regular text-md pl-4 w-full text-gray-400"
                  >
                    <Icon icon="ph:user" className="w-6 h-6" />
                    Perfil
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="mb-7">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-300 w-8 h-8" />
                <span>Matheus</span>
                <Icon
                  icon="iconamoon:exit-light"
                  className="text-red-400 w-6 h-6 cursor-pointer hover:text-red-500 transition-all"
                />
              </div>
            ) : (
              <button
                type="button"
                className="flex gap-3 items-center text-gray-100 font-bold text-md"
              >
                Fazer login
                <Icon
                  icon="teenyicons:signin-outline"
                  className="text-green-100 w-5 h-5"
                />
              </button>
            )}
          </div>
        </div>
      </div> */}

      <div className="mt-[72px] flex gap-20 mr-24">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Icon icon="fluent-mdl2:chart" className="w-8 h-8 text-green-100" />
            <h2 className="font-bold text-2xl leading-short">Início</h2>
          </div>

          <h4 className="text-sm mb-4">Avaliações mais recentes</h4>

          <div className="space-y-3">
            <CardMiddle />
            <CardMiddle />
            <CardMiddle />
            <CardMiddle />
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm">Livros populares</h4>
            <button className="font-bold text-sm text-purple-100 flex items-center">
              Ver todos
              <Icon icon="ep:arrow-right" className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-700 rounded-lg flex gap-5 w-[324px] px-5 py-[18px]">
              <Image
                src="/revolucaoDosBichos.png"
                width={64}
                height={94}
                alt=""
              />
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
            <div className="bg-gray-700 rounded-lg flex gap-5 w-[324px] px-5 py-[18px]">
              <Image
                src="/revolucaoDosBichos.png"
                width={64}
                height={94}
                alt=""
              />
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
          </div>
        </div>
      </div>
    </div>
  );
}
