'use client'
import { useState } from "react"
import { getBooks } from "../utils/books"
import { BookResponse } from "@/app/api/projects/api_rest/books/route"
import { Trigger } from "./core/trigger"
import { BooksList } from "./core/book-content"
import { BooksDialog } from "./core/books-dialog"
import { BooksDrawer } from "./core/books-drawer"

export const ListBooksApp = () => {
  const [books, setBooks] = useState<BookResponse[]>([])

  const getBooksData = () => {
    if (books.length > 0) {
      console.log("Ya hay libros")
      return
    }
    getBooks().then(async (data) => {
      setBooks(data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div suppressHydrationWarning>
      <BooksDialog
        trigger={
          <Trigger className="hidden md:block" onClick={getBooksData} />
        }
        content={
          <BooksList books={books} />
        }
      />
      <BooksDrawer
        triger={
          <Trigger className="md:hidden" onClick={getBooksData} />
        }
        content={
          <BooksList books={books} />
        }
      />
    </div>
  )
}