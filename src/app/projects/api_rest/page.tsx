import type { Metadata } from "next";
import { projects } from "../projectsList";
import ApiDocumentation from "./apiDocumentation";
import Image from "next/image";

const project = projects.personal.find((p) => p.title == "API REST DEMO");
const siteUrl = `${
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
}`;

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: project?.title,
    description: project?.description,
    openGraph: {
      title: project?.title,
      description: project?.description,
      url: `${siteUrl}${project?.link}`,
      images: [
        {
          url: `${siteUrl}${project?.image}`,
          height: 500,
          width: 500,
          alt: project?.title,
        },
      ],
    },
  };
}

export default function ApiRestPage() {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Image
          src={`${siteUrl}${project?.image}`}
          alt="project image"
          width={220}
          height={220}
          className="rounded-md border-2"
        />
      </div>
      <h1 className="text-3xl text-center">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-cyan-600 to-primary/80 w-fit">
          {project?.title}
        </span>
      </h1>
      <ApiDocumentation />
    </>
  );
}
