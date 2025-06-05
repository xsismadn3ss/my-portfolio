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
    <header className="px-6 py-2 backdrop-blur-lg fixed top-0 w-full">
      <div className="flex justify-between items-end">
        <nav className="flex">
          <GithubHoverCard username="xsismadn3ss">
            <h1 className="font-bold text-2xl mr-4 drop-shadow-md">xsismadn3ss</h1>
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