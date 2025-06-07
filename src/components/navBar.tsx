'use client'
import Link from "next/link"
import SwitchTheme from "./switchTheme"
import { GithubHoverCard } from "./githubProfile"
import { Equal, GithubIcon } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "./ui/drawer"
import { usePathname } from "next/navigation"

const routes = [
  { title: 'Inicio', path: '/' },
  { title: 'Sobre mi', path: '/about' },
  { title: 'Proyectos', path: '/projects' },
  { title: 'Contacto', path: '/contact' }
]

function DrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger className="block md:hidden">
        <Equal />
      </DrawerTrigger>
      <DrawerContent className="dark:bg-transparent dark:backdrop-blur-2xl">
        <DrawerHeader>
          <DrawerTitle>
            Menu
          </DrawerTitle>
          <DrawerDescription>
          </DrawerDescription>
        </DrawerHeader>
        <ul className="flex flex-col gap-4 px-4 pb-6">
          {routes.map((route, index) => (
            <li key={index}>
              <DrawerClose>
                <Link href={route.path}>{route.title}</Link>
              </DrawerClose>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}


export default function NavBar(): React.ReactElement {

  const currentRoute = usePathname()
  const selected = routes.find((route) => route.path === currentRoute)?.title

  return (
    <div className="flex justify-center">
      <header className="px-4 py-2 bg-transparent backdrop-blur-lg fixed top-0 w-full lg:w-5/6 border-l-[2px] border-b-[2px] border-r-[2px] rounded-bl-md rounded-br-md z-50">
        <div className="flex justify-between items-end pb-2">
          <nav className="flex items-end">
            <Link href={'/'}>
              <h1 className="font-bold text-2xl mr-4 drop-shadow-md  
            hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-emerald-500 hover:via-cyan-600 hover:to-primary/80
            dark:hover:from-emerald-300 dark:hover:via-cyand-300
            hover:transition-colors hover:duration-500 duration-100 hover:ease-in">xsismadn3ss</h1>
            </Link>
            <ul className=" hidden md:flex gap-4">
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={route.path}
                    className={`transition-colors px-2 py-1 duration-200 font-semibold
                    ${selected === route.title
                        ? 'bg-emerald-500 dark:bg-emerald-600 rounded-md'
                        : 'bg-inherit'
                      }`}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 items-end">
            <SwitchTheme />
            <GithubHoverCard username="xsismadn3ss" className="pt-6">
              <div className="bg-primary/75 dark:bg-primary/90 rounded-full scale-125 p-[4px] transition-colors duration-150 ease-in
              hover:bg-gradient-to-b hover:from-emerald-500 hover:via-cyan-600 hover:to-primary/80
            dark:hover:from-emerald-300 dark:hover:via-cyand-300 dark:hover:to-sky-300 hover:duration-500 hover:ease-in-out">
                <GithubIcon className="text-white dark:text-gray-900 transition-colors duration-100 ease-in" />
              </div>
            </GithubHoverCard>
            <DrawerMenu />
          </div>
        </div>
      </header>
    </div>
  )
}