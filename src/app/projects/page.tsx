import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "./projectsList";

export async function generateMetadata(): Promise<Metadata> {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: "Proyectos",
    description:
      "Listado de proyectos web realizados, en esta página podrás encontrar proyectos de prectica o proyectos profesionales realizados en empresas.",
    openGraph: {
      title: "Proyectos",
      description:
        "Listado de proyectos web realizados, en esta página podrás encontrar proyectos de prectica o proyectos profesionales realizados en empresas.",
      url: `${url}/projects`,
      siteName: "Proyectos",
      images: [
        {
          url: `projects/projects.png`,
          width: 500,
          height: 500,
          alt: "Proyectos",
        },
      ],
    },
  };
}

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    link: string;
    image: string;
  };
}) => {
  return (
    <Card>
      <CardContent>
        <Image
          className="rounded-lg"
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
        />
        <CardTitle className="text-lg text-primary/80">
          {project.title}
        </CardTitle>
        <CardDescription className="mb-2">
          {project.description}
        </CardDescription>
        <Link href={project.link}>
          <Button className="w-full">Ver más</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default function ProjectsPage(): React.ReactNode {
  return (
    <>
      <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-emerald-500 via-cyan-500 to-primary/60 w-fit">
        Proyectos
      </h1>
      <section>
        <article>
          <h3 className="text-muted-foreground font-semibold text-xl">
            Proyectos Profesionales
          </h3>
          {projects.proffessional.length === 0 ? (
            <p className="text-primary/80">Aun no hay proyectos agregados</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
              {projects.proffessional.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          <hr className="mt-2" />
        </article>
        <article className="mt-2">
          <h3 className="text-muted-foreground font-semibold text-xl">
            Proyectos personales
          </h3>
          {projects.personal.length === 0 ? (
            <p className="text-primary/80">Aun no hay proyectos agregados</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
              {projects.personal.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </article>
        <hr className="mt-2" />
      </section>
    </>
  );
}
