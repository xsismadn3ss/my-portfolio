'use client'
import axios from "axios"
import { API_DEFINITION } from "../../../constants/api-definition"
import { BookResponse } from "@/app/api/projects/api_rest/books/route"

const books_url = API_DEFINITION.books.entries.all.url
const book_url = API_DEFINITION.books.entries.one.url

export const getBooks = async (): Promise<BookResponse[]> => {
    const response = await axios.get<BookResponse[]>(books_url)
    return response.data
}

export const filterBooks = async (author?: string, title?: string): Promise<BookResponse[]> => {
    if (author && title) {
        const response = await axios.get<BookResponse[]>(books_url + `?author=${author}&title=${title}`)
        return response.data
    }
    if (author) {
        const response = await axios.get<BookResponse[]>(books_url + `?author=${author}`)
        return response.data
    }
    if (title) {
        const response = await axios.get<BookResponse[]>(books_url + `?title=${title}`)
        return response.data
    }
    return []
}

export const getBook = async (id: number) => {
    const response = await axios.get<BookResponse>(book_url.replace("1", id.toString()))
    return response.data
}