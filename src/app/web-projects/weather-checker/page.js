"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  const [city, setCity] = useState("Cagayan de Oro City");
  const [cityJSON, setCityJSON] = useState(null);

  const [renderJSON, setRenderJSON] = useState(null);
  const [dataUpdated, setDataUpdated] = useState(false);

  const api_url = `https://api.api-ninjas.com/v1/weather?city=${city}`;

  const updateData = async (evt) => {
    evt.preventDefault();

    setDataUpdated(false);

    await fetch(api_url, {
      headers: {
        "X-Api-Key": "R7VCAmJDAaZnUOMFyAa4Ag==fBMnIVB1XkNksG2s",
      },
    })
      .then((response) => response.json())
      .then((data) => setCityJSON(data))
      .then(() => setDataUpdated(true));
  };

  useEffect(() => {
    if (dataUpdated == true) {

      const sunset = new Date(cityJSON.sunset * 1000)
      const sunrise = new Date(cityJSON.sunrise * 1000)

      setRenderJSON(
        <>
          <div className="flex flex-col basis-[50%] p-8">
            <h1 className="font-bold text-5xl mb-4">
              {city}
            </h1>
            <div className="flex flex-row justify-between">
              <h1>Humidity</h1>
              <p>{cityJSON.humidity}%</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Temperature</h1>
              <p>{cityJSON.temp} °C</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Minimum Temperature</h1>
              <p>{cityJSON.min_temp} °C</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Max Temperature</h1>
              <p>{cityJSON.max_temp} °C</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Wind Degrees</h1>
              <p>{cityJSON.wind_degrees}°</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Wind Speed</h1>
              <p>{cityJSON.wind_speed} km/h</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Sunset</h1>
              <p>{sunset.toLocaleTimeString()}</p>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Sunrise</h1>
              <p>{sunrise.toLocaleTimeString()}</p>
            </div>
          </div>
        </>
      );
    }
  }, [city, cityJSON, dataUpdated]);

  return (
    <>
      <div className="flex flex-row min-h-screen p-16 bg-slate-950 text-white">
        <div className="flex flex-col basis-[50%] p-8">
          <h1 className="font-bold text-3xl">Weather Checker</h1>
          <form onSubmit={updateData}>
            <label className="block my-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                City
              </span>
              <input
                type="text"
                name="city_name"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black font-mono"
                placeholder=""
                value={city}
                onChange={(evt) => setCity(evt.target.value)}
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
