import { SearchBar } from "./core/search-bar"
import { BooksList } from "./core/books-content"
import { FilterTags } from "./core/filter-tags"
export const FilterBooksApp = () => {
  return (
    <div className="my-4">
      <h1 className="text-[1.2rem] font-bold mb-2">Buscar libros</h1>
      <div className="border-2 p-3 rounded-md shadow-md">
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <FilterTags />
        <BooksList />
      </div>
    </div>
  )
}