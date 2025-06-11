import { BookResponse } from "@/app/api/projects/api_rest/books/route";
import { Book, LoaderCircle } from "lucide-react";

export const BookContent = ({ book }: { book: BookResponse }) => {
  return (
    <div key={book.id}>
      <div className="flex gap-1">
        <Book className="text-emerald-700" /><h1 className="text-[1rem] text-primary/80">{book.title}</h1>
      </div>
      <h2 className="text-[0.8rem]">{book.author}</h2>
      <p className="text-muted-foreground">{book.pages} páginas</p>
    </div>
  )
}

export const BooksList = ({ books }: { books: BookResponse[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {books.length === 0 ? (
        <div className="flex gap-2">
          <LoaderCircle className="animate-spin" /> Cargando libros...
        </div>
      ) : (
        books.map((book) => (
          <BookContent key={book.id} book={book} />
        ))
      )}
    </div>
  )
}