import { formatGenres, formatRunningDates } from "../util/tmdb-helpers";

const baseURL = "https://api.themoviedb.org/3";

export async function getDetails(id) {
  const res = await fetch(
    baseURL + `/movie/${id}}?api_key=` + process.env.TMDB_API_KEY
  );
  if (!res.ok) {
    return undefined;
    // throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return { ...data, formattedGenres: formatGenres(data.genres) };
}

export async function getMovies() {
  const res = await fetch(
    baseURL + "/movie/now_playing?api_key=" + process.env.TMDB_API_KEY
  );
  if (!res.ok) {
    return undefined;
    // throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return {
    runningDates: formatRunningDates(data.dates.minimum, data.dates.maximum),
    ...data,
  };
}
