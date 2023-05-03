import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rotten Potatoes | Home",
};

async function getMovies() {
  const res = await fetch(
    "http://" + process.env.VERCEL_URL + "/api/movies/now-playing"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getMovies();
  return (
    <main className="container mx-auto mt-6">
      <h1 className="text-center text-3xl font-bold">Now Playing</h1>
      <p className="text-center text-xl font-light mt-4">
        {data.movies.dates.minimum} - {data.movies.dates.maximum}
      </p>
      {data.movies.results.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} className="block">
          {movie.title}
        </Link>
      ))}
    </main>
  );
}
