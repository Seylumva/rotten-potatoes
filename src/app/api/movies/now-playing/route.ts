import { NextRequest, NextResponse } from "next/server";

const baseURL = "https://api.themoviedb.org/3";

export async function GET(request: NextRequest) {
  const response = await fetch(
    baseURL + "/movie/now_playing?api_key=" + process.env.TMDB_API_KEY
  );
  const movies = await response.json();
  return NextResponse.json({ movies });
}
