import Image from "next/image";

const LandLeague = () => {
  return (
    <main className='md:max-w-[80vw] mx-auto'>
      <div className='my-12 mx-5'>
        <h2 className="text-4xl font-semibold my-6">
          Deforestation and Its Solutions:
        </h2>
        <div className="flex flex-wrap">
          <ul className="flex gap-6 flex-wrap w-full">
            <li className="flex flex-col gap-2 w-full md:w-auto">
              <div className="prob-box border p-5">
                <div className="flex gap-2">
                  <Image
                    src={"/images/co2.png"}
                    height={20}
                    width={20}
                    alt="co2"
                  />
                  <h3>
                    Deforestation emits CO2
                  </h3>
                </div>
                <div className="text">
                  Deforestation contributes to climate change by releasing stored carbon dioxide into the atmosphere.
                </div>
              </div>
              <div className="sol-box border p-5">
                <h3>
                  Solution:
                </h3>
                <div className="text">
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
