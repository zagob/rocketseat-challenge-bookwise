"use client";

import { CardLast } from "@/components/card-last";
import { CardMiddle } from "@/components/card-middle";
import { CardPopular } from "@/components/card-popular";
import { Navbar } from "@/components/navbar";
import { Rating } from "@/components/rating";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Page() {
  const isAuthenticated = true;

  return (
    <div className="min-h-screen flex gap-24">
      <Navbar isAuthenticated={isAuthenticated} />

      <div className="mt-[72px] flex gap-20 mr-24">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Icon icon="fluent-mdl2:chart" className="w-8 h-8 text-green-100" />
            <h2 className="font-bold text-2xl leading-short">Início</h2>
          </div>

          {isAuthenticated ? (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm">Sua última leitura</h4>
                <button className="font-bold text-sm text-purple-100 flex items-center">
                  Ver todas
                  <Icon icon="ep:arrow-right" className="w-4 h-4" />
                </button>
              </div>

              <CardLast />
            </div>
          ) : null}

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
            <CardPopular />
            <CardPopular />
            <CardPopular />
            <CardPopular />
          </div>
        </div>
      </div>
    </div>
  );
}
