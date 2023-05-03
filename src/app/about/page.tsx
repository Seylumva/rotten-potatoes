import Image from "next/image";

export const metadata = {
  title: "Rotten Potatoes | About",
};

export default function About() {
  return (
    <main className="container mx-auto mt-12 px-5">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-xl font-light">
        A Rotten Tomatoes inspired website using the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-red-700 hover:text-red-500 transition-colors"
          href="https://www.themoviedb.org/documentation/api"
        >
          TMDB API
        </a>
        .
      </p>
      <p className="text-md mt-8 font-light">
        Made by:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-red-700 hover:text-red-500 transition-colors"
          href="https://github.com/Seylumva"
        >
          Emilio N
        </a>
      </p>
    </main>
  );
}
