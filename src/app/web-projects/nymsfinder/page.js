"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  const [word, setWord] = useState("code");
  const [wordJSON, setWordJSON] = useState(null);

  const [renderJSON, setRenderJSON] = useState(null);
  const [dataUpdated, setDataUpdated] = useState(false);

  const api_url = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`;

  const updateData = async (evt) => {
    evt.preventDefault();

    setDataUpdated(false);

    await fetch(api_url, {
      headers: {
        "X-Api-Key": "R7VCAmJDAaZnUOMFyAa4Ag==fBMnIVB1XkNksG2s",
      },
    })
      .then((response) => response.json())
      .then((data) => setWordJSON(data))
      .then(() => setDataUpdated(true));
  };

  useEffect(() => {
    if (dataUpdated == true) {
      setRenderJSON(
        <>
          <div className="flex flex-col basis-[50%] p-8">
            <h1 className="font-bold text-4xl xl:text-8xl">{word}</h1>
            <div className="flex flex-row justify-between p-4 bg-slate-900 rounded-md">
              <p>Synonyms</p>
              <p>Antonyms</p>
            </div>
            <div className="flex flex-row justify-between p-4">
              <div className="flex flex-col">
                {wordJSON.synonyms.map((src, idx) => (
                  <p key={idx}>{src}</p>
                ))}
              </div>
              <div className="flex flex-col">
                {wordJSON.antonyms.map((src, idx) => (
                  <p key={idx}>{src}</p>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [word, wordJSON, dataUpdated]);

  return (
    <>
      <div className="flex flex-row min-h-screen p-16 bg-slate-950 text-white">
        <div className="flex flex-col basis-[50%] p-8">
          <h1 className="font-bold text-3xl">Nymsfinder</h1>
          <form onSubmit={updateData}>
            <label className="block my-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Word
              </span>
              <input
                type="text"
                name="word"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black font-mono"
                placeholder="///"
                value={word}
                onChange={(evt) => setWord(evt.target.value)}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className="hover:bg-red-500 p-4 rounded-md duration-500 transition-all delay-0 bg-slate-800 w-full cursor-pointer"
            />
          </form>
          <button className="bg-slate-900 p-4 text-white rounded-md text-xl hover:bg-red-500 duration-500 transition-all delay-0 my-4">
            <Link href="/web-projects">← Web Projects</Link>
          </button>
        </div>
        {renderJSON}
      </div>
    </>
  );
}
