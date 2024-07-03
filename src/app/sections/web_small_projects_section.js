import Link from "next/link";
export default function WebSmallProjectsSection() {
  return (
    <>
      <h1 className="text-2xl font-bold mt-2">Web Small Projects</h1>
      <div className="flex flex-row flex-wrap gap-2 flex-1">
        <Link href="/web-projects/100-days-of-poetry" className="hidden">
          <button
            className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500"
            onClick={() => {
              document.querySelector("body").style.backgroundColor = "white";
            }}
          >
            100 Days of Poetry
          </button>
        </Link>
        <Link href="/web-projects/animal-facts-generator">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Animal Facts Generator
          </button>
        </Link>
        <Link href="/web-projects/card-checker">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Card Checker
          </button>
        </Link>
        <Link href="/web-projects/channel-orange">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Channel Orange
          </button>
        </Link>
        <Link href="/web-projects/dicfinition">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Dicfinition
          </button>
        </Link>
        <Link href="/web-projects/gradient-generator">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Gradient Generator
          </button>
        </Link>
        <Link href="/web-projects/hobbies-generator">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Hobbies Generator
          </button>
        </Link>
        <Link href="/web-projects/nymsfinder">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Nymsfinder
          </button>
        </Link>
        <Link href="/web-projects/quote-generator">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Quote Generator
          </button>
        </Link>
        <Link href="/web-projects/trivia-generator">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Trivia Generator
          </button>
        </Link>
        <Link href="/web-projects/weather-checker">
          <button className="dark:bg-indigo-600 dark:text-[#eae9fc] bg-[#13160E] text-[#EEF1E9] rounded-lg p-2 hover:translate-y-1 transition-all delay-0 duration-500">
            Weather Checker
          </button>
        </Link>
      </div>
    </>
  );
}
