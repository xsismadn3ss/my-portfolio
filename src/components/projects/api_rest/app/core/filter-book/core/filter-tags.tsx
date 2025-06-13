'use client'
import { useAtom } from "jotai"
import { filterBooksAtom, booksAtom, loadingStatusAtom } from "../atoms"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { getBooks, filterBooks } from "../../utils/books"

export const FilterTags = () => {
  const [filterProps, setFilterProps] = useAtom(filterBooksAtom)
  const [books, setBooks] = useAtom(booksAtom)
  const [loading, setLoading] = useAtom(loadingStatusAtom)

  const reloadData = (filter: string) => {
    console.log('removiendo filtro', filter)
    setFilterProps((prev) => ({
      ...prev,
      [filter]: ""
    }))
    setLoading('true')
    if (!(filterProps.author && filterProps.title)) {
      getBooks().then((books) => {
        setBooks(books)
        setLoading('false')
      })
    } else {
      filterBooks(filterProps).then((books) => {
        setBooks(books)
        if (books.length === 0) {
          setLoading('notFound')
        } else {
          setLoading('false')
        }
      })
    }
  }


  return (
    <>
      {filterProps.author && filterProps.author && (
        <>
          <hr className="mt-4 mb-2" />
          <div className="flex gap-2">
            <span>filtros:</span>
            {filterProps.author &&
              <Badge onClick={() => reloadData('author')}>Author: {filterProps.author}
                <X />
              </Badge>
            }
            {filterProps.title &&
              <Badge onClick={() => reloadData('title')}>Title: {filterProps.title}
                <X />
              </Badge>
            }
          </div>
        </>
      )}
    </>
  )
}