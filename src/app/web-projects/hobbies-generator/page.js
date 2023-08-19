"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [json, setJSON] = useState(
    "Generate a hobby by clicking the button below."
  );
  const [category, setCategory] = useState("general");

  const [renderCategory, setRenderCategory] = useState();

  const api_url = `https://api.api-ninjas.com/v1/hobbies?category=${category}`;

  const fetchData = async () => {
    const response = await fetch(api_url, {
      headers: {
        "X-Api-Key": "R7VCAmJDAaZnUOMFyAa4Ag==fBMnIVB1XkNksG2s",
      },
    });
    const json = await response.json();

    console.log(json);

    setJSON(json);
    setRenderCategory(
      <>
        <h1 className="whitespace-nowrap">[ {json.category} ]</h1>
      </>
    );
  };

  return (
    <>
      <button className="absolute top-20 left-40 bg-slate-900 p-4 text-white rounded-md text-xl hover:bg-red-500 duration-500 transition-all delay-0">
        <Link href="/web-projects">← Web Projects</Link>
      </button>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-950 text-white">
        <div className="flex flex-col w-1/4">
          <h1 className="font-bold text-3xl my-4">Hobbies Generator</h1>
          <p className="p-4 bg-slate-900 rounded-md font-mono">{json.hobby}</p>
          <div className="mt-2 flex flex-row p-4 bg-slate-900 rounded-md font-mono justify-evenly">
            <Link
              href={json.link.toString()}
              className="hover:text-red-500 rounded-md duration-500 transition-all delay-0 w-full cursor-pointer"
            >
              View more about the hobby
            </Link>
            {renderCategory}
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="hover:bg-red-500 p-4 rounded-md duration-500 transition-all delay-0 bg-slate-800 w-full cursor-pointer my-4"
              onClick={() => fetchData()}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
