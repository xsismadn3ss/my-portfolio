"use client";
import Link from "next/link";
import SwitchTheme from "./switchTheme";
import { GithubHoverCard } from "./githubProfile";
import { Equal, GithubIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { usePathname } from "next/navigation";

const routes = [
  { title: "Inicio", path: "/" },
  { title: "Sobre mi", path: "/about" },
  { title: "Proyectos", path: "/projects" },
  { title: "Contacto", path: "/contact" },
];

function DrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger className="block md:hidden">
        <Equal />
      </DrawerTrigger>
      <DrawerContent className="dark:bg-transparent dark:backdrop-blur-2xl">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <ul className="flex flex-col gap-4 px-4 pb-6">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.path}>
                <DrawerClose>{route.title}</DrawerClose>
              </Link>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export default function NavBar(): React.ReactElement {
  const currentRoute = usePathname();
  const selected = routes.find((route) => route.path === currentRoute)?.title;

  return (
    <div className="block w-full fixed top-0 z-50 md:flex md:justify-center">
      <header className="md:px-4 md:py-2 bg-transparent backdrop-blur-lg w-full md:w-[140vh] border-l-[2px] border-b-[2px] border-r-[2px] rounded-bl-md rounded-br-md">
        <div className="flex justify-between items-end pb-2">
          <nav className="flex items-end">
            <Link href={"/"}>
              <h1
                className="font-bold text-2xl md:mr-4 drop-shadow-md  
            hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-emerald-500 hover:via-cyan-600 hover:to-primary/80
            dark:hover:from-emerald-300 dark:hover:via-cyand-300
            hover:transition-colors hover:duration-500 duration-100 hover:ease-in scale-[0.8] md:scale-100"
              >
                xsismadn3ss
              </h1>
            </Link>
            <ul className=" hidden md:flex gap-2">
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={route.path}
                    className={`px-2 py-1 font-semibold bg-inherit
                      hover:bg-primary/20 transition duration-200 ease-linear rounded-md
                    ${
                      selected === route.title
                        ? "bg-gradient-to-r from-emerald-600 via-cyan-600 to-primary/80 dark:text-primary text-accent"
                        : "bg-inherit"
                    }`}
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 items-end scale-[0.7] md:scale-100">
            <SwitchTheme />
            <GithubHoverCard username="xsismadn3ss" className="pt-6">
              <div
                className="bg-primary/75 dark:bg-primary/90 rounded-full scale-125 p-[4px] transition-colors duration-150 ease-in
              hover:bg-gradient-to-b hover:from-emerald-500 hover:via-cyan-600 hover:to-primary/80
            dark:hover:from-emerald-300 dark:hover:via-cyand-300 dark:hover:to-sky-300 hover:duration-500 hover:ease-in-out"
              >
                <GithubIcon className="text-white dark:text-gray-900 transition-colors duration-100 ease-in" />
              </div>
            </GithubHoverCard>
            <DrawerMenu />
          </div>
        </div>
      </header>
    </div>
  );
}
