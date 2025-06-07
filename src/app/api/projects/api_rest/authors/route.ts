import data from "../data.json"
import { NextResponse, NextRequest } from "next/server"

export interface AuthorResponse {
    id: number;
    name: string;
    birthDate: string;
    country: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<AuthorResponse[]>> {
    const authorParams = req.nextUrl.searchParams.get('q')
    if (authorParams) {
        const authors: AuthorResponse[] = data.authors.filter(
            (author) => author.name.toLowerCase().includes(authorParams.toLowerCase())
        );
        return NextResponse.json(authors)
    }
    return NextResponse.json(data.authors as AuthorResponse[])
}