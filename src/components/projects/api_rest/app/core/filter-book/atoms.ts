'use client'
import { BookResponse } from "@/app/api/projects/api_rest/books/route";
import { atom } from "jotai";

export const booksAtom = atom<BookResponse[]>([])

export interface FilterProps {
    author?: string
    title?: string
}

export const filterBooksAtom = atom<FilterProps>({})

export const loadingStatusAtom = atom<string>('true')