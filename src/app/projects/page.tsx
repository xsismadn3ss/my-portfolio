import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Listado de proyectos web realizados, en esta página podrás encontrar proyectos de prectica o proyectos profesionales realizados en empresas."
}

export default function ProjectsPage(): React.ReactNode {
  return (
    <>
      <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-emerald-500 via-cyan-500 to-primary/60 w-fit">Proyectos</h1>
      <section>
        <article className="mt-2">
          <h3 className="text-muted-foreground font-semibold">Proyectos personales</h3>
          <ul className="list-disc ml-6">
            <li className="font-semibold text-primary/85">
              <Link href={'/projects/api_rest'} className="hover:underline">API REST Demo</Link>
            </li>
          </ul>

        </article>
        <hr className="mt-2" />
      </section>
    </>
  )
}