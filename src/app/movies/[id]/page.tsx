import { getDetails } from "@/app/lib/tmdb-api";
import { generateImageURL } from "@/app/util/tmdb-helpers";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const data = await getDetails(params.id);
  if (!data) {
    notFound();
  }
  return {
    title: `Rotten Potatoes | ${data.title}`,
  };
}

export default async function MovieDetails({ params }) {
  const data = await getDetails(params.id);

  if (!data) {
    notFound();
  }

  return (
    <main className="container mx-auto mt-5">
      <div className="flex gap-5 flex-col md:flex-row">
        <Image
          className="rounded-lg shadow-md shadow-black self-center md:self-stretch"
          priority={true}
          src={generateImageURL(data.poster_path)}
          alt={`${data.title} Poster`}
          width={250}
          height={375}
        />
        <div className="flex flex-col justify-between flex-grow rounded-lg bg-gray-200 px-4 py-2">
          {/* Basic Info */}
          <div>
            <h1 className="text-2xl text-center font-bold">{data.title}</h1>
            <p className="text-sm text-center font-light">
              {data.formattedGenres}
            </p>
          </div>
          {/* Scores */}
          <div className="flex justify-evenly mt-5">
            <div className="flex flex-col gap-1 text-center">
              <span className="text-2xl font-black">
                {data.vote_average.toFixed(1)}
              </span>
              <span className="text-sm uppercase font-black">Potatometer</span>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <span className="text-2xl font-black">{data.vote_count}</span>
              <span className="text-sm uppercase font-black">Votes</span>
            </div>
          </div>
          {/* Studios */}
          <div className="flex justify-evenly mt-4">
            {data.production_companies
              .filter((studio) => studio.logo_path !== null)
              .map((studio) => (
                <div
                  key={studio.id}
                  className="flex flex-col items-center justify-end gap-3"
                >
                  <Image
                    className=""
                    priority={true}
                    src={`https://image.tmdb.org/t/p/original/${studio.logo_path}`}
                    alt={studio.name}
                    width={64}
                    height={64}
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
