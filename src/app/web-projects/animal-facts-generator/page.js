"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  const [animal, setAnimal] = useState("dog");
  const [animalJSON, setAnimalJSON] = useState(null);
  const [animalIndex, setAnimalIndex] = useState(0);

  const [renderAnimalBtns, setRenderAnimalBtns] = useState(null);
  const [renderJSON, setRenderJSON] = useState(null);

  const [dataUpdated, setDataUpdated] = useState(false);

  const api_url = `https://api.api-ninjas.com/v1/animals?name=${animal}`;

  const updateData = async (evt) => {
    evt.preventDefault();

    setDataUpdated(false);

    await fetch(api_url, {
      headers: {
        "X-Api-Key": "R7VCAmJDAaZnUOMFyAa4Ag==fBMnIVB1XkNksG2s",
      },
    })
      .then((response) => response.json())
      .then((data) => setAnimalJSON(data))
      .then(() => setDataUpdated(true));
  };

  useEffect(() => {
    if (dataUpdated == true) {
      setRenderJSON(
        <>
          <div className="flex flex-col basis-[50%] p-8">
            <h1 className="font-bold text-5xl mb-4">
              {animalJSON[animalIndex].name}
            </h1>
            <div className="flex flex-col border-t-2 rounded-md ">
              <div className="flex flex-row bg-slate-900 p-2 rounded-md">
                <h1>{animalJSON[animalIndex].locations}</h1>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Age of Sexual Maturity</h1>
                <p>
                  {
                    animalJSON[animalIndex].characteristics
                      .age_of_sexual_maturity
                  }
                </p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Age of Weaning</h1>
                <p>{animalJSON[animalIndex].characteristics.age_of_weaning}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Estimated Population Size</h1>
                <p>
                  {
                    animalJSON[animalIndex].characteristics
                      .estimated_population_size
                  }
                </p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Biggest Threat</h1>
                <p>{animalJSON[animalIndex].characteristics.biggest_threat}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Diet</h1>
                <p>{animalJSON[animalIndex].characteristics.diet}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Group</h1>
                <p>{animalJSON[animalIndex].characteristics.group}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Habitat</h1>
                <p>{animalJSON[animalIndex].characteristics.habitat}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Length</h1>
                <p>{animalJSON[animalIndex].characteristics.length}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Lifespan</h1>
                <p>{animalJSON[animalIndex].characteristics.lifespan}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Lifestyle</h1>
                <p>{animalJSON[animalIndex].characteristics.lifestyle}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Predators</h1>
                <p>{animalJSON[animalIndex].characteristics.predators}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Prey</h1>
                <p>{animalJSON[animalIndex].characteristics.prey}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Skin Type</h1>
                <p>{animalJSON[animalIndex].characteristics.skin_type}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Most Distinctive Feature</h1>
                <p>
                  {
                    animalJSON[animalIndex].characteristics
                      .most_distinctive_feature
                  }
                </p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Weight</h1>
                <p>{animalJSON[animalIndex].characteristics.weight}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <h1 className="text-xl">Slogan</h1>
                <p>{animalJSON[animalIndex].characteristics.slogan}</p>
              </div>
            </div>
          </div>
        </>
      );

      setRenderAnimalBtns(
        <>
          <div className="flex flex-row flex-wrap my-4">
            {animalJSON.map((src, idx) => (
              <button
                key={idx}
                className="bg-slate-900 p-4 text-white rounded-md hover:bg-red-500 duration-500 transition-all delay-0 m-2"
                onClick={() => setAnimalIndex(idx)}
              >
                {src.name}
              </button>
            ))}
          </div>
        </>
      );
    }
  }, [dataUpdated, animalJSON, animalIndex]);

  return (
    <>
      <div className="flex flex-row min-h-screen p-16 bg-slate-950 text-white">
        <div className="flex flex-col basis-[50%] p-8">
          <h1 className="font-bold text-3xl">Animal Facts Generator</h1>
          <form onSubmit={updateData}>
            <label className="block my-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Animal
              </span>
              <input
                type="text"
                name="animal_name"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black font-mono"
                placeholder=""
                value={animal}
                onChange={(evt) => setAnimal(evt.target.value)}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className="hover:bg-red-500 p-4 rounded-md duration-500 transition-all delay-0 bg-slate-800 w-full cursor-pointer"
            />
          </form>
          {renderAnimalBtns}
          <button className="bg-slate-900 p-4 text-white rounded-md text-xl hover:bg-red-500 duration-500 transition-all delay-0 my-4">
            <Link href="/web-projects">← Web Projects</Link>
          </button>
        </div>
        {renderJSON}
      </div>
    </>
  );
}
