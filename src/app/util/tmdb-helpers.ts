import { format } from "date-fns";

const baseURL = "https://image.tmdb.org/t/p/";

export function generateImageURL(path: string, size: string = "original") {
  return baseURL.concat(size, "/", path);
}

export function formatGenres(genreArray) {
  return genreArray
    .map((genre) => {
      return genre.name;
    })
    .join(", ");
}

export function formatRunningDates(minDate, maxDate) {
  const min = format(new Date(minDate), "MMMM do");
  const max = format(new Date(maxDate), "MMMM do");
  return min.concat(" - ", max);
}
