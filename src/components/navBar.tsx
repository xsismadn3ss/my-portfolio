'use client'
import Link from "next/link"
import SwitchTheme from "./switchTheme"
import { GithubHoverCard } from "./githubProfile"

const routes = [
  { title: 'Inicio', path: '/' },
  { title: 'Sobre mi', path: '/about' },
  { title: 'Proyectos', path: '/projects' },
  { title: 'Contacto', path: '/contact' }
]


export default function NavBar(): React.ReactElement {
  return (
    <header className="px-6 py-2 bg-transparent backdrop-blur-lg fixed top-0 w-full border-[2px]">
      <div className="flex justify-between items-end">
        <nav className="flex">
          <GithubHoverCard username="xsismadn3ss">
            <h1 className="font-bold text-2xl mr-4 drop-shadow-md  hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-emerald-500 hover:via-cyan-600 hover:to-primary/80
            dark:hover:from-emerald-300 dark:hover:via-cyand-300
            transition-colors duration-500 ease-in">xsismadn3ss</h1>
          </GithubHoverCard>
          <ul className="flex gap-2 self-end">
            {routes.map((route, index) => (
              <li key={index}>
                <Link href={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <SwitchTheme />
      </div>
    </header>
  )
}