import data from "@/app/api/projects/api_rest/data.json"
import { NextResponse, NextRequest } from "next/server"
import { BookResponse } from "../route"

export async function GET(req: NextRequest): Promise<NextResponse<BookResponse | Object>> {
    const req_parts = req.url.split('/')
    const id = req_parts[req_parts.length - 1]
    const books = data.books
    const book = books.find((book) => book.id == parseInt(id))
    if (!book) {
        return NextResponse.json({ message: "Book not found" }, { status: 404 })
    }
    return NextResponse.json(book, { status: 200 })
}