import Link from "next/link";
import { Ghost } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function NotFound(): React.ReactNode {
  return (
    <>
      <section className="flex justify-center h-[50vh] items-center">
        <article className="flex flex-col items-center">
          <h1 className="font-bold text-[4rem]
          bg-gradient-to-r from-emerald-700 via-cyan-700 to-primary/80 text-transparent bg-clip-text
          ">404</h1>
          <p className="mb-4 text-muted-foreground">La pagina que estas buscando no existe</p>
          <Button>
            <Link href="/" className="text-lg accent-accent">Volver al inicio</Link>
          </Button>
        </article>
      </section>
    </>
  )
}