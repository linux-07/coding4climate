"use client"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      document.querySelector(".mode-img").style.filter = "invert(0)";
    }
    else {
      html.classList.add('dark');
      document.querySelector(".mode-img").style.filter = "invert(1)";
    }
  }

  return (
    <nav>
      <div className="flex py-9 px-5 my-3 lg:w-3/4 mx-auto md:justify-between flex-col md:flex-row justify-center items-center">
        <div className="logo lg:text-3xl text-2xl font-bold">
          <Link href="/">coding4climate</Link>
        </div>
        <ul className='flex lg:gap-8 gap-3 items-center text-xl'>
          <li className="hover:opacity-85 transition-all mt-2">
            <button onClick={toggleDarkMode}>
              <Image
                className="mode-img"
                src={"/assets/modeButton.svg"}
                alt="mode-button"
                width={25}
                height={25}
                style={{ filter: "invert(1)" }}
              />
            </button>
          </li>
          <li className='hover:font-semibold'><Link className="transition-all" href="/">Home</Link></li>
          <li className='hover:font-semibold'><Link className="transition-all" href="/">Topic1</Link></li>
          <li className='hover:font-semibold'><Link className="transition-all" href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
