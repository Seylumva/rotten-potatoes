import Link from "next/link";
import { getMovies } from "./lib/tmdb-api";

export const metadata = {
  title: "Rotten Potatoes | Home",
};

export default async function Home() {
  const data = await getMovies();
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl font-bold">Now Playing</h1>
      <p className="text-center text-md font-light mt-1 mb-4">
        {data.runningDates}
      </p>
      {data.results.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} className="block">
          {movie.title}
        </Link>
      ))}
    </main>
  );
}
