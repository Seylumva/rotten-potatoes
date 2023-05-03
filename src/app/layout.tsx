import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rotten Potatoes",
  description: "A full-fledged movie review web application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <nav className="flex justify-between bg-red-600 text-slate-100 py-6 px-5">
            <span className="text-2xl font-bold">Rotten Potatoes</span>
            <ul className="flex justify-center gap-10 text-md font-semibold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/help">Help</Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
