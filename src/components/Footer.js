import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="dark:bg-zinc-900 bg-slate-300 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="dark:text-slate-300 text-sm text-center sm:text-left">© Copyright 2024 &nbsp;&nbsp; coding4climate —
            <Link
              href="https://github.com/arnavnagpurkar"
              className="dark:text-slate-400 dark:hover:text-slate-300 text-slate-800 hover:text-slate-950 transition-all ml-1"
              target="_blank"
            >
              @arnavnagpurkar
            </Link>
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link
              href="https://github.com/arnavnagpurkar/coding4climate"
              target="_blank"
            >
              <Image
                src="/images/github-mark-white.svg"
                width={25}
                height={25}
                alt="Github Icon"
                className="hover:opacity-75 transition-all invert dark:invert-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
