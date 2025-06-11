'use client'

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"

export const BooksDrawer = (
  { triger, content }: {
    triger: React.ReactNode,
    content: React.ReactNode
  }
) => {
  return (
    <Drawer>
      <DrawerTrigger>
        {triger}
      </DrawerTrigger>
      <DrawerContent className="dark:bg-card/30 dark:backdrop-blur-lg">
        <DrawerHeader>
          <DrawerTitle>
            Libros
          </DrawerTitle>
          <DrawerDescription>
            Lista de libros
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pb-10">
          {content}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}