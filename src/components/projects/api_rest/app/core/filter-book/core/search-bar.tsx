'use client'
import { useAtom } from "jotai"
import { filterBooksAtom, booksAtom, FilterProps, loadingStatusAtom } from "../atoms"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { filterBooks } from "../../utils/books"
import { useState } from "react"

export const SearchBar = () => {
  const [filterProps, setFilterProps] = useAtom(filterBooksAtom)
  const [formData, setFormData] = useState<FilterProps>({})
  const [books, setBooks] = useAtom(booksAtom)
  const [loading, setLoading] = useAtom(loadingStatusAtom)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData?.author && !formData?.title) {
      return
    }
    filterBooks(formData).then((data) => {
      const formDataCopy = { ...formData }
      setFilterProps(formDataCopy)
      setFormData({
        author: '', title: ''
      })
      setBooks(data)
      if (data.length === 0) {
        setLoading('notFound')
      } else {
        setLoading('false')
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="w-full" suppressHydrationWarning>
      <form
        className="flex gap-2 flex-wrap"
        onSubmit={handleSubmit}>
        <div className="flex gap-2 w-2/3">
          <Input
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="author"
          />
          <Input
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
          />
        </div>
        <Button type="submit" className="w-2/8" disabled={(!formData.author && !formData?.title)}>Buscar</Button>
      </form>
    </div>
  )
}