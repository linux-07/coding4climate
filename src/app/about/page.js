import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className='md:max-w-[80vw] mx-auto'>
      <div className='my-12 mx-5'>
        <h2 className="text-3xl font-bold my-7 mb-14">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center h-full">
          <div className="md:w-1/2">
            <Image
              src="/images/climate-justice.png"
              alt="Climate justice"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-6 md:mt-0">
            <p className="text-xl mb-4">
              Welcome to <strong>coding4climate</strong>! We are dedicated to raising awareness about environmental issues, particularly focusing on the impact of coding and technology on climate change mitigation and adaptation.
            </p>
            <p className="text-lg">
              Our mission is to empower individuals and organizations to take meaningful action towards building a more sustainable future. Through informative content, innovative projects, and community engagement, we strive to make a positive difference in the fight against climate change.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold my-4">
            About the Developer
          </h2>
          <div className="flex items-center">
            <div className="w-20 h-20 mr-4">
              <Image
                src="/images/arnav.png"
                alt="arnav"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Arnav Nagpurkar
              </h2>
              <p className="text-lg">
                GitHub Profile:&nbsp;
                <Link
                  href="https://github.com/arnavnagpurkar"
                  className="text-blue-500 hover:text-blue-600 transition-all"
                  target="_blank"
                >
                  arnavnagpurkar
                </Link>
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold my-7">
          Source Code
        </h2>
        <p className="text-lg">
          This website of coding4climate is truely Open Source
          <br />
          All source code of this website is uploaded&nbsp;
          <Link
            href="https://github.com/linux-07/coding4climate"
            className="text-blue-500 hover:text-blue-600 transition-all"
            target="_blank"
          >
            here.
          </Link>
          <br />
          This Website is made using Next.js, TailwindCSS, JavaScript, Node.js
        </p>
      </div>
    </main>
  );
}

export const metadata = {
  title: "About - coding4climate | Arnav Nagpurkar",
  description: "About Page of coding4climate website created by Arnav Nagpurkar",
};
