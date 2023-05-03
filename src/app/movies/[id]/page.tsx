import Image from "next/image";

async function getDetails(id) {
  const res = await fetch(
    "https://" + process.env.VERCEL_URL + "/api/movies/details?id=" + id
  );
  if (!res.ok) {
    console.log("Unable to fetch movies now playing");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getDetails(params.id);
  return {
    title: `Rotten Potatoes | ${data.movie.title}`,
  };
}

export default async function MovieDetails({ params }) {
  const data = await getDetails(params.id);
  const genres = data.movie.genres
    .map((genre) => {
      return genre.name;
    })
    .join(", ");
  return (
    <main className="container mx-auto mt-5">
      <div className="flex gap-5 flex-col md:flex-row">
        <Image
          className="rounded-lg shadow-md shadow-black self-center md:self-stretch"
          src={`https://image.tmdb.org/t/p/original/${data.movie.poster_path}`}
          alt={`${data.movie.title} Poster`}
          width={250}
          height={375}
        />
        <div className="flex flex-col justify-between flex-grow rounded-lg bg-gray-200 px-4 py-2">
          {/* Basic Info */}
          <div>
            <h1 className="text-2xl text-center font-bold">
              {data.movie.title}
            </h1>
            <p className="text-sm text-center font-light">{genres}</p>
          </div>
          {/* Scores */}
          <div className="flex justify-evenly mt-5">
            <div className="flex flex-col gap-1 text-center">
              <span className="text-2xl font-black">
                {data.movie.vote_average}
              </span>
              <span className="text-sm uppercase font-black">Potatometer</span>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="text-2xl font-black">
                {data.movie.vote_count}
              </span>
              <span className="text-sm uppercase font-black">Votes</span>
            </div>
          </div>
          {/* Studios */}
          <div className="flex justify-evenly mt-4">
            {data.movie.production_companies
              .filter((studio) => studio.logo_path !== null)
              .map((studio) => (
                <div
                  key={studio.id}
                  className="flex flex-col items-center justify-end gap-3"
                >
                  <Image
                    className=""
                    src={`https://image.tmdb.org/t/p/original/${studio.logo_path}`}
                    alt={studio.name}
                    width={64}
                    height={20}
                  />
                  <span className="text-xs text-center font-light">
                    {studio.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
