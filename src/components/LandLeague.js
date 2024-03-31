"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function LandLeague() {
  const solutions = [
    "Implementing comprehensive recycling programs at the community level to reduce waste generation and promote reuse of materials.",
    "Enforcing strict regulations on industrial waste management, including proper disposal techniques, treatment of hazardous waste, and pollution prevention measures.",
    "Investing in advanced waste treatment technologies, such as incineration with energy recovery and landfill gas capture, to minimize the environmental impact of waste disposal.",
    "Promoting sustainable agriculture practices, such as organic farming and crop rotation, to reduce soil contamination from chemical pesticides and fertilizers.",
    "Developing green infrastructure projects, such as urban parks and green roofs, to mitigate the effects of urbanization on land pollution and improve air and water quality.",
    "Implementing land remediation and restoration initiatives to rehabilitate contaminated sites and restore ecosystem health and biodiversity.",
    "Educating the public about the importance of responsible consumption and waste reduction, and encouraging behavior change through awareness campaigns and incentives.",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === solutions.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? solutions.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <main className='md:max-w-[80vw] mx-auto min-h-[77vh]'>
      <div className='my-12 mx-5'>
        <h1 className="text-4xl font-bold my-7 mb-14">
          Topics Related to &apos;&apos;Land League&apos;&apos; -
        </h1>
        <h2 className="text-3xl font-semibold my-3">
          Urbanization:
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full my-9 mb-12 flex 2xl:flex-row flex-col gap-20">
            <Image
              src={"/images/Industrialization.webp"}
              width={690}
              height={459}
              className="rounded-xl"
            />
            <p className="text-lg flex items-center font-medium">
              Urbanization is the process of population concentration in urban areas, leading to the growth and expansion of cities and towns. As rural populations migrate to urban centers in search of better economic opportunities and improved living standards, urbanization accelerates. While urbanization can bring benefits such as access to education, healthcare, and employment opportunities, it also poses significant challenges. Rapid urbanization often results in increased pressure on infrastructure, housing, transportation, and natural resources. It can lead to issues like overcrowding, inadequate sanitation, pollution, traffic congestion, and loss of green spaces. Sustainable urban planning and management are crucial to address these challenges and ensure that urban growth promotes equitable development, social inclusion, and environmental sustainability.
            </p>
          </div>
          <h2 className="text-3xl font-semibold my-3">
            Deforestation and Its Solutions:
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-5">
            {/* Problem: Deforestation and CO2 Emissions */}
            <li className="flex flex-col gap-2">
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
                  <div>
                    Implementing reforestation and afforestation projects to absorb carbon dioxide and mitigate climate change effects.
                  </div>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            {/* Problem: Loss of Biodiversity */}
            <li className="flex flex-col gap-2">
              <div className="prob-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/images/biodiversity.png"}
                    height={45}
                    width={45}
                    alt="biodiversity"
                    className="dark:invert invert-0"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center">
                  Loss of Biodiversity
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Deforestation leads to the loss of habitats for numerous species, resulting in decreased biodiversity.
                </div>
              </div>
              {/* Solution: Conservation Measures */}
              <div className="sol-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <h3 className="text-center text-xl font-medium">
                  Solution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  <div>
                    Implementing conservation measures and protected areas to preserve biodiversity, habitats, and ecosystems.
                  </div>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            {/* Problem: Soil Erosion */}
            <li className="flex flex-col gap-2">
              <div className="prob-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/images/soil-erosion.png"}
                    height={45}
                    width={45}
                    alt="soil erosion"
                    className="dark:invert invert-0"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center">
                  Soil Erosion
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Deforestation exposes soil to erosion by wind, leading to loss of fertile land & sedimentation in water bodies.
                </div>
              </div>
              {/* Solution: Agroforestry */}
              <div className="sol-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <h3 className="text-center text-xl font-medium">
                  Solution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  <div>
                    Implementing agroforestry practices to protect soil, reduce erosion, and enhance agricultural productivity sustainably.
                  </div>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            {/* Problem: Water Cycle Disruption */}
            <li className="flex flex-col gap-2">
              <div className="prob-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/images/water-cycle.png"}
                    height={45}
                    width={45}
                    alt="water cycle"
                    className="dark:invert invert-0"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center">
                  Water Cycle Disruption
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Deforestation disrupts the water cycle, leading to altered precipitation patterns and increased risk of floods and droughts.
                </div>
              </div>
              {/* Solution: Reforestation near Water Sources */}
              <div className="sol-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <h3 className="text-center text-xl font-medium">
                  Solution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  <div>
                    Implementing reforestation near water sources to regulate water flow, mitigate flooding, and ensure sustainable water supply.
                  </div>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            {/* Problem: Climate Regulation */}
            <li className="flex flex-col gap-2">
              <div className="prob-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/images/climate-regulation.png"}
                    height={45}
                    width={45}
                    alt="climate regulation"
                    className="dark:invert invert-0"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center">
                  Climate Regulation
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Deforestation disrupts regional and global climates by altering wind patterns and reducing the capacity to regulate temperature.
                </div>
              </div>
              {/* Solution: Forest Conservation and Restoration */}
              <div className="sol-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <h3 className="text-center text-xl font-medium">
                  Solution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  <div>
                    Prioritizing forest conservation and restoration efforts to maintain climate stability, regulate temperatures, and mitigate extreme weather events.
                  </div>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            {/* Problem: Air Pollution */}
            <li className="flex flex-col gap-2">
              <div className="prob-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/images/air-pollution.png"}
                    height={45}
                    width={45}
                    alt="air pollution"
                    className="dark:invert invert-0"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center">
                  Air Pollution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  Deforestation contributes to air pollution by reducing the number of trees available to absorb pollutants and release oxygen.
                </div>
              </div>
              {/* Solution: Afforestation in Urban Areas */}
              <div className="sol-box border dark:border-white border-black p-5 rounded-xl hover:scale-105 transition-all">
                <h3 className="text-center text-xl font-medium">
                  Solution
                </h3>
                <div className="text-center mt-2 text-[0.95rem] dark:text-zinc-300 text-zinc-700">
                  <div>
                    Implementing afforestation projects in urban areas to improve air quality, enhance aesthetics, and promote human well-being.
                  </div>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h2 className="text-3xl font-semibold my-8 mt-16">
          Land Pollution Solutions:
        </h2>
        <div className="solutions relative p-14 border dark:border-white border-black rounded-3xl">
          <button
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-700 text-white rounded-full h-9 w-9 flex items-center justify-center"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-700 text-white rounded-full h-9 w-9 flex items-center justify-center"
            onClick={nextSlide}
          >
            &gt;
          </button>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            {solutions.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 bg-gray-500 dark:bg-slate-200 rounded-full mx-1 ${index === activeIndex && 'bg-gray-800 dark:bg-slate-500'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          <div className="mx-auto max-w-[80%]">
            <p className="text-center text-xl font-medium">
              {solutions[activeIndex]}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandLeague
