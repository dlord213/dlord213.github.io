"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  const [word, setWord] = useState("code");
  const [wordJSON, setJSON] = useState(null);
  const [textState, setTextState] = useState("Please enter a word.");
  const [dataUpdated, setDataUpdated] = useState(false);

  const api_url = `https://api.api-ninjas.com/v1/dictionary?word=${word}`;

  const updateData = async (evt) => {
    evt.preventDefault();

    setDataUpdated(false);

    const response = await fetch(api_url, {
      headers: {
        "X-Api-Key": "R7VCAmJDAaZnUOMFyAa4Ag==fBMnIVB1XkNksG2s",
      },
    });
    const json = await response.json();

    console.log(json);
    setJSON(json);
    setDataUpdated(true);
  };

  useEffect(() => {
    if (dataUpdated == true) {
      if (wordJSON.valid == true) {
        setTextState(wordJSON.definition);
      } else {
        setTextState("Word is invalid.");
      }
    }
  }, [dataUpdated, wordJSON]);

  return (
    <>
      <button className="absolute top-20 left-40 bg-slate-900 p-4 text-white rounded-md text-xl hover:bg-red-500 duration-500 transition-all delay-0">
        <Link href="/web-projects">← Web Projects</Link>
      </button>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-950 text-white">
        <div className="flex flex-col w-1/2">
          <h1 className="font-bold text-3xl">Dicfinition</h1>
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
            <h1 className="my-4 bg-slate-900 p-2 rounded-md font-mono">
              {textState}
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}
