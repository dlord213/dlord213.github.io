import { useEffect, useState } from "react";
import { Work_Sans } from "next/font/google";

const splashFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const SplashPage = () => {
  const [textAnimation, setTextAnimation] = useState("opacity-0");
  const [text, setText] = useState("");
  const [splashBodyStyle, setSplashBodyStyle] = useState(
    " bg-slate-900 text-white"
  );

  useEffect(() => {
    setTimeout(() => {
      setTextAnimation("opacity-100");
    }, 500);

    setTimeout(() => {
      setText("m");
    }, 600);
    setTimeout(() => {
      setText("mi");
    }, 900);
    setTimeout(() => {
      setText("miri");
    }, 1100);
    setTimeout(() => {
      setText("mirim");
    }, 1200);
    setTimeout(() => {
      setText("mirimo");
    }, 1400);
    setTimeout(() => {
      setText("mirimome");
    }, 1500);
    setTimeout(() => {
      setText("mirimomek");
    }, 1600);
    setTimeout(() => {
      setText("mirimomeki");
    }, 1800);
    setTimeout(() => {
      setText("mirimomekik");
    }, 1900);
    setTimeout(() => {
      setText("mirimomekiku");
    }, 2000);
    setTimeout(() => {
      setTextAnimation("opacity-0");
    }, 2500);
    setTimeout(() => {
      setTextAnimation("opacity-100");
    }, 3000);
    setTimeout(() => {
      setSplashBodyStyle(" bg-white text-black");
    }, 3500);
    setTimeout(() => {
      setTextAnimation("opacity-100");
    }, 3700);
    setTimeout(() => {
      setTextAnimation("opacity-0");
    }, 5000);
  }, []);

  return (
    <div className={splashBodyStyle + " items-center justify-center flex h-screen w-full transition-all delay-0 duration-500"}>
      <h1
        className={
          "font-bold lg:text-8xl text-4xl transition-all delay-0 duration-500 " +
          textAnimation
        }
      >
        {text}
      </h1>
    </div>
  );
};
