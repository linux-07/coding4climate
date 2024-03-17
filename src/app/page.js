"use client"
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="container mx-1 md:mx-0">
        <div className="h-[75vh] w-[100vw] mx-auto flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-7xl text-center w-full font-bold">
            Let&apos;s solve environmental issues
          </h1>
          <p className="md:text-lg text-sm text-center w-full dark:text-gray-400 text-gray-500 mt-8 ">
            Welcome to our platform dedicated to solving environmental challenges!
            <br />
            Discover innovative solutions to pressing issues threatening our planet.
            <br />
            Explore curated problems and solutions below.
            <br />
            Together, let&apos;s make a greener, healthier world!
            <br />
            #coding4climate
          </p>
          <Link
            href="/ProblemsAndSolutions"
            className="md:px-10 px-7 md:py-8 py-5 font-semibold text-xl border dark:border-white border-black my-12 dark:bg-zinc-900 bg-slate-200 rounded-full dark:hover:bg-zinc-800 hover:bg-slate-300 transition-all"
          >
            Problems & Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
