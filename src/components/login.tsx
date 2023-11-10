"use client";

import { Icon } from "@iconify/react";

export function Login() {
  return (
    <div className="w-full grid gap-4">
      <button
        type="button"
        className="bg-gray-600 rounded-lg flex items-center font-bold text-lg p-5 gap-5 w-full hover:bg-gray-500 transition-all"
      >
        <Icon icon="flat-color-icons:google" className="w-8 h-8" />
        Entrar com Google
      </button>
      <button
        type="button"
        className="bg-gray-600 rounded-lg flex items-center font-bold text-lg p-5 gap-5 w-full hover:bg-gray-500 transition-all"
      >
        <Icon icon="mdi:github" className="w-8 h-8" />
        Entrar com Github
      </button>
      <button
        type="button"
        className="bg-gray-600 rounded-lg flex items-center font-bold text-lg p-5 gap-5 w-full hover:bg-gray-500 transition-all"
      >
        <Icon icon="octicon:rocket-24" className="w-8 h-8 text-purple-100" />
        Acessar como visitante
      </button>
    </div>
  );
}
