import Link from "next/link";

export const metadata = {
  title: "Rotten Potatoes | Home",
};

const baseURL = "https://api.themoviedb.org/3";

async function getMovies() {
  const res = await fetch(
    baseURL + "/movie/now_playing?api_key=" + process.env.TMDB_API_KEY
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
        {data.dates.minimum} - {data.dates.maximum}
      </p>
      {data.results.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} className="block">
          {movie.title}
        </Link>
      ))}
    </main>
  );
}
