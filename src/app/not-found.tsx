import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto">
      <h2 className="text-3xl">404 Looks like you're lost</h2>
      <p>
        We're not sure what you're looking for but you may click{" "}
        <Link href="/" className="text-500-slate font-semibold">
          here
        </Link>{" "}
        to go back to home.
      </p>
    </main>
  );
}
