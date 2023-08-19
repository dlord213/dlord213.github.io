import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

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

const ProjectsTable = () => {
  const textStyle = "p-4 text-xl border";
  const linkStyle = "transition-all delay-0 duration-500 hover:translate-y-2";

  const webProjects = [
    <>
      <tr>
        <td className="p-4 text-xl border">Gradient Generator</td>
        <td className={textStyle}>
          <Link
            href=""
            className="transition-all delay-0 duration-500 hover:translate-y-4"
          >
            View
          </Link>
        </td>
      </tr>
    </>,
    <>
      <tr>
        <td className={textStyle}>Old Portfolio</td>
        <td className={textStyle}>
          <Link href="" className={linkStyle}>
            View
          </Link>
        </td>
      </tr>
    </>,
    <>
      <tr>
        <td className={textStyle}>100 Days of Poetry</td>
        <td className={textStyle}>
          <Link href="" className={linkStyle}>
            View
          </Link>
        </td>
      </tr>
    </>,
  ];

  return (
    <table className="table-auto z-10 text-left my-4 border-collapse border border-black"></table>
  );
};

export const WebProjectsPage = () => {
  return (
    <div className="lg:container hidden lg:flex items-center justify-center flex-col w-full lg:p-16 md:p-8 animate-hidden h-screen z-10">
      <h1 className="font-bold md:text-6xl">web projects</h1>
      <Carousel
        className="my-4"
        dynamicHeight={true}
        infiniteLoop={false}
        autoPlay={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        swipeable={true}
      >
        {projects.map((src, idx) => (
          <div className="flex flex-col justify-center items-center " key={idx}>
            <h1 className="text-3xl">{src.title}</h1>
            <p>{src.desc}</p>
            <div className="my-2 transition-all duration-500 delay-0 hover:translate-x-2">
              <Link
                href={src.link}
                className="transition-all duration-500 delay-0 hover:text-red-500 text-xl"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
