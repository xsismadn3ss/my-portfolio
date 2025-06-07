import data from "@/app/api/projects/api_rest/data.json"
import { NextResponse, NextRequest } from "next/server"
import { AuthorResponse } from "../route"
import { BookResponse } from "../../books/route"

interface AuthorNBooksResponse {
    author?: AuthorResponse;
    books: BookResponse[];
}

export async function GET(req: NextRequest): Promise<NextResponse<AuthorNBooksResponse | Object>> {
    const req_parts = req.url.split('/');
    const id = req_parts[req_parts.length - 1];
    // obtener author
    const author: AuthorResponse | undefined = data.authors.find((author) => author.id == parseInt(id));
    // obtener libros
    const books: BookResponse[] = data.books.filter((book) => book.author == author?.name);

    if (!author) {
        return NextResponse.json({ message: "Author not found" }, { status: 404 });
    }
    const res: AuthorNBooksResponse = { author: author, books: books }
    return NextResponse.json(res, { status: 200 });
}