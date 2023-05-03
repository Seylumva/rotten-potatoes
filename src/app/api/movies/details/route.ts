import { NextRequest, NextResponse } from "next/server";

const baseURL = "https://api.themoviedb.org/3";

export async function GET(request: NextRequest) {
  if (!request.nextUrl.searchParams.has("id")) {
    return NextResponse.json(
      {
        message: "You must provide a movie id.",
      },
      {
        status: 404,
      }
    );
  }
  const response = await fetch(
    baseURL +
      `/movie/${request.nextUrl.searchParams.get("id")}}?api_key=` +
      process.env.TMDB_API_KEY
  );
  const movie = await response.json();
  return NextResponse.json({ movie });
}
