"use client"
import { useRef, useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        'Let&apos;s unite for a sustainable future',
        'Protect our forests, stop deforestation!',
        'Reduce land pollution, preserve our planet!',
        'Combat urbanization, prioritize sustainable development!',
        'Together, let&apos;s safeguard our land and environment!'
      ],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div className="mx-1 md:mx-0">
        <div className="h-[82vh] w-full mx-auto flex justify-center items-center flex-col">
          <div className="flex md:text-6xl text-4xl">
            <h1 ref={ref} className="text-4xl md:text-6xl text-center w-full font-bold" />
          </div>
          <p className="md:text-xl text-sm text-center w-full dark:text-zinc-300 text-zinc-800 mt-8 ">
            Welcome to our platform dedicated to addressing environmental challenges!
            <br />
            Discover innovative solutions to pressing issues threatening our planet.
            <br />
            Explore curated problems and solutions below.
            <br />
            Together, let&apos;s make a greener, healthier world!
            <br />
            Dive into solutions for climate change and sustainable land use practices through the Land League.
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
