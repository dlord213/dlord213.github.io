import Link from "next/link";

const projects = [
  {
    title: "100 Days of Poetry",
    desc: "A gallery album of my creations and poems that I liked.",
    link: "/web-projects/100-days-of-poetry",
  },
  {
    title: "Gradient Generator",
    desc: "A simple gradient generator.",
    link: "/web-projects/gradient-generator",
  },
  {
    title: "Card Number Checker",
    desc: "A card checker that uses Luhn algorithm.",
    link: "/web-projects/card-checker",
  },
  {
    title: "Quote Generator",
    desc: "A simple webpage that generates quotes using an API.",
    link: "/web-projects/quote-generator",
  },
  {
    title: "Animal Facts Generator",
    desc: "A simple webpage that generates interesting facts about animals using an API.",
    link: "/web-projects/animal-facts-generator",
  },
  {
    title: "Hobbies Generator",
    desc: "A simple webpage that generates hobbies, maybe for you to learn using an API?",
    link: "/web-projects/hobbies-generator",
  },
  {
    title: "Trivia Generator",
    desc: "A simple webpage that generates trivias using an API.",
    link: "/web-projects/trivia-generator",
  },
  {
    title: "Weather Checker",
    desc: "A simple webpage that checks the weather based on city you enter using an API.",
    link: "/web-projects/weather-checker",
  },
];

export default function Page() {
  const btnStyle =
    "text-white text-xl hover:text-red-500 duration-500 transition-all hover:translate-x-2 my-2 delay-0 w-[60px]";

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 items-center">
      <div className="flex flex-row bg-slate-950 p-4 text-white justify-around items-center m-4 rounded-md w-[500px]">
        <h1 className="font-bold text-4xl">[ web projects ]</h1>
      </div>
      <div className="flex flex-col text-white items-center justify-center">
        <div className="flex flex-col justify-center">
          <div className="mx-4 mt-4">
            <Link
              href="/"
              className="bg-slate-950 p-2 hover:text-red-500 duration-500 transition-all text-xl rounded-md"
            >
              ← Home
            </Link>
          </div>

          {projects.map((src, idx) => (
            <div className="flex flex-col m-4" key={idx}>
              <h1 className="text-3xl">{src.title}</h1>
              <p>{src.desc}</p>
              <Link href={src.link} className={btnStyle}>
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
