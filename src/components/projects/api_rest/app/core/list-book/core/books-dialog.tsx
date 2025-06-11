import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export const BooksDialog = ({ trigger, content }: { trigger: React.ReactNode, content: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>
        {trigger}
      </DialogTrigger>
      <DialogContent className="dark:bg-card/30 dark:backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Libros
          </DialogTitle>
          <DialogDescription>
            Lista de libros
          </DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  )
}