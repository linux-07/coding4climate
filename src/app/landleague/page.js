import Image from "next/image";

const LandLeague = () => {
  return (
    <main className='md:max-w-[80vw] mx-auto min-h-[77vh]'>
      <div className='my-12 mx-5'>
        <h2 className="text-4xl font-semibold my-6">
          Deforestation and It&apos;s Solutions:
        </h2>
        <div className="flex flex-wrap">
          <ul className="flex gap-6 flex-wrap w-full mt-5">
            <li className="flex flex-col gap-2 w-full md:w-96">
              <div className="prob-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/images/co2.png"}
                    height={45}
                    width={45}
                    alt="co2"
                    className="dark:invert invert-0"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center">
                  Deforestation emits CO<span className="text-sm">2</span>
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Deforestation contributes to climate change by releasing stored carbon dioxide into the atmosphere.
                </div>
              </div>
              <div className="sol-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <h3 className="text-center text-xl font-medium">
                  Solution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Implementing reforestation and afforestation projects to absorb carbon dioxide and mitigate climate change effects.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default LandLeague

export const metadata = {
  title: "Land League - coding4climate | Arnav Nagpurkar",
  description: "Land League Page of coding4climate website created by Arnav Nagpurkar",
};
