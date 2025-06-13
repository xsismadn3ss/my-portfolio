import { FilterBooksApp } from "./core/filter-book/filter-books-app"
import { ListBooksApp } from "./core/list-book/list-books-app"

export const ApiApp = () => {
    return (
        <>
            {/* <ListBooksApp /> */}
            <FilterBooksApp />
        </>
    )
}