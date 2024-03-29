"use client"
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="container mx-1 md:mx-0">
        <div className="h-[85vh] w-[100vw] mx-auto flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-6xl text-center w-full font-bold">
            Let's unite for a sustainable future
          </h1>
          <p className="md:text-lg text-sm text-center w-full dark:text-zinc-300 text-zinc-800 mt-8 ">
            Welcome to our platform dedicated to addressing environmental challenges!
            <br />
            Discover innovative solutions to pressing issues threatening our planet.
            <br />
            Explore curated problems and solutions below.
            <br />
            Together, let's make a greener, healthier world!
            <br />
            Dive into solutions for climate change and sustainable land use practices through the Land League.
            <br />
            #coding4climate
          </p>
          <Link
            href="/landleague"
            className="md:px-10 px-7 md:py-8 py-5 font-semibold text-xl border dark:border-white border-black my-12 dark:bg-zinc-900 bg-slate-200 rounded-full dark:hover:bg-zinc-800 hover:bg-slate-300 transition-all"
          >
            Explore Land League
          </Link>
        </div>
      </div>
    </main>
  );
}
