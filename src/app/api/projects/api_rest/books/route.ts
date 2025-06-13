import data from "../data.json"
import { NextResponse, NextRequest } from "next/server"

export interface BookResponse {
    id: number;
    title: string;
    author: string;
    pages: number;
    read: boolean;
}

export async function GET(req: NextRequest): Promise<NextResponse<BookResponse[]>> {
    const authorParam = req.nextUrl.searchParams.get('author')
    const titleParam = req.nextUrl.searchParams.get('title')
    let books = data.books as BookResponse[]

    if (authorParam) {
        books = books.filter((book) => book.author.toLocaleLowerCase().includes(authorParam.toLocaleLowerCase()))
        return NextResponse.json(books as BookResponse[])
    }
    if (titleParam) {
        books = books.filter((book) => book.title.toLocaleLowerCase().includes(titleParam.toLocaleLowerCase()))
        return NextResponse.json(books as BookResponse[])
    }
    if (authorParam && titleParam) {
        books = books.filter(
            (book) => book.author.toLocaleLowerCase().includes(authorParam.toLocaleLowerCase())
                && book.title.toLocaleLowerCase().includes(titleParam.toLocaleLowerCase()))
        return NextResponse.json(books as BookResponse[])
    }
    return NextResponse.json(data.books as BookResponse[])
}