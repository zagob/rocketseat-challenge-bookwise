import { Logo } from "@/components/logo";
import { Icon } from "@iconify/react";

interface NavbarProps {
  isAuthenticated: boolean;
}

export function Navbar({ isAuthenticated }: NavbarProps) {
  return (
    <div className="max-h-screen p-5">
      <div className="flex flex-col justify-between items-center h-full w-[232px] rounded-xl bg-background">
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
    </div>
  );
}
