import { notFound } from "next/navigation";

export const metadata = {
  title: "Rotten Potatoes | 404",
};

export default function NotFoundCatchAll() {
  notFound();
  return null;
}
