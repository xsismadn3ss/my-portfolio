'use client'
import { BookResponse } from "@/app/api/projects/api_rest/books/route";
import { Book, GhostIcon, LoaderCircle } from "lucide-react";
import { useAtom } from "jotai";
import { booksAtom, loadingStatusAtom } from "../atoms";
import { useEffect } from "react";
import { getBooks } from "../../utils/books";

export const BookContent = ({ book }: { book: BookResponse }) => {
  return (
    <div key={book.id} className="border-2 p-3 rounded-md">
      <div className="flex gap-1 items-center">
        <Book className="text-emerald-700" /><h1 className="text-[1.3rem] text-primary/80">{book.title}</h1>
      </div>
      <div className="">
        <h2 className="text-[0.8rem]">{book.author}</h2>
        <p className="text-muted-foreground">{book.pages} páginas</p>
      </div>
    </div>
  )
}

export const BooksList = () => {
  const [books, setBooks] = useAtom(booksAtom);
  const [loading, setLoading] = useAtom(loadingStatusAtom);

  useEffect(() => {
    getBooks().then((res) => {
      setBooks(res)
      setLoading('false')
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="flex flex-col gap-2 pt-4 px-1">
      {books.length >= 1 && (
        books.map(book => <BookContent key={book.id} book={book} />)
      )
      }
      <div className="flex justify-center">
        {loading === 'true' && (
          <>
            <LoaderCircle className="animate-spin text-primary" />
            <span className="text-primary">Cargando...</span>
          </>
        )}
        {loading === 'notFound' && (
          <>
            <GhostIcon className="text-primary" />
            <span className="text-primary">No se encontraron resultados</span>
          </>
        )}
      </div>
    </div >
  )
}