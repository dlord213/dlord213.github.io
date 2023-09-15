"use client";

import { Work_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import "./ditto-styles.css";

const workSans = Work_Sans({
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const HeartSVG = () => {
  return (
    <svg
      class="lovely-heart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 198 162"
    >
      <g>
        <polygon
          class="background-heart"
          points="180 18 180 0 162 0 144 0 126 0 126 18 108 18 108 36 90 36 90 18 72 18 72 0 54 0 36 0 18 0 18 18 0 18 0 36 0 54 0 72 18 72 18 90 36 90 36 108 54 108 54 126 72 126 72 144 90 144 90 162 108 162 108 144 126 144 126 126 144 126 144 108 162 108 162 90 180 90 180 72 198 72 198 54 198 36 198 18 180 18"
        />
      </g>
      <g>
        <rect class="heart-square primary" x="18" width="18" height="18" />
        <rect class="heart-square secondary" y="18" width="18" height="18" />
        <rect class="heart-square primary" y="36" width="18" height="18" />
        <rect class="heart-square tertiary" y="54" width="18" height="18" />
        <rect
          class="heart-square tertiary"
          x="18"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="36"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="54"
          y="108"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="72"
          y="126"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="90"
          y="144"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="90"
          y="126"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="108"
          y="126"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="72"
          y="108"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="90"
          y="108"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="108"
          y="108"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="126"
          y="108"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="54"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="72"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="90"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="108"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="126"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="144"
          y="90"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="36"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="54"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="72"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="90"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="108"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="126"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="144"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="162"
          y="72"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="18"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="36"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="54"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="72"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="90"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="108"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="126"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="144"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="162"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="180"
          y="54"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="18"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="36"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="54"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="72"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="90"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="108"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square tertiary"
          x="126"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="144"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="162"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="180"
          y="36"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="18"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="36"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="54"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="72"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="108"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="126"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square secondary"
          x="144"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="162"
          y="18"
          width="18"
          height="18"
        />
        <rect
          class="heart-square primary"
          x="180"
          y="18"
          width="18"
          height="18"
        />
        <rect class="heart-square primary" x="36" width="18" height="18" />
        <rect class="heart-square primary" x="54" width="18" height="18" />
        <rect class="heart-square primary" x="126" width="18" height="18" />
        <rect class="heart-square primary" x="144" width="18" height="18" />
        <rect class="heart-square primary" x="162" width="18" height="18" />
      </g>
    </svg>
  );
};

const HeartBG = (props) => {
  return (
    <ul className="circles" style={{opacity: `${props.opacity}`}}>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
    </ul>
  );
};

const LoginPage = (props) => {
  const inputStyle =
    "rounded-md text-black p-2 border border-green-400 focus:border-green-600 focus:text-green-600 focus:outline-none";
  const spanStyle = "text-xl font-light";
  const btnStyle =
    "text-xl p-4 bg-white rounded-bl-2xl rounded-tr-2xl drop-shadow-[6px_6px_black] w-full hover:drop-shadow-[6px_6px_white] hover:bg-lime-300 hover:text-lime-800 transition-all duration-500 delay-0";

  const pages = [
    <>
      <div className="flex flex-row justify-center items-center my-4 gap-4 ">
        <button className={btnStyle} onClick={() => setPage(pages[1])}>
          login
        </button>
        <button className={btnStyle} onClick={() => setPage(pages[2])}>
          register
        </button>
      </div>
    </>,
    <>
      <div className="flex flex-col p-8 bg-white rounded-bl-2xl rounded-tr-2xl drop-shadow-[6px_6px_black] my-4">
        <form className="flex flex-col justify-center">
          <label className="flex flex-col mb-2">
            <h1>Username</h1>
            <input
              type="text"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>Password</h1>
            <input
              type="password"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <input
            type="submit"
            value="♡ enter the mina-mina ♡"
            className="my-2 p-2 transition-all duration-250 delay-0 rounded-lg border-2 hover:cursor-pointer hover:bg-lime-400 hover:text-lime-800 hover:border-lime-400"
          />
        </form>
        <button
          className="my-2 p-2 transition-all duration-250 delay-0 rounded-lg border-2 hover:cursor-pointer hover:bg-lime-400 hover:text-lime-800 hover:border-lime-400"
          onClick={() => setPage(pages[0])}
        >
          ← Home
        </button>
      </div>
    </>,
    <>
      <div className="flex flex-col p-8 bg-white rounded-bl-2xl rounded-tr-2xl drop-shadow-[6px_6px_black] my-4 h-1/4 flex-wrap">
        <form className="flex flex-col justify-center">
          <label className="flex flex-col mb-2">
            <h1>Username</h1>
            <input
              type="text"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>Password</h1>
            <input
              type="password"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>E-mail</h1>
            <input
              type="email"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>Age</h1>
            <input
              type="number"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>SSN Number</h1>
            <input
              type="text"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>Debit Card Number</h1>
            <input
              type="text"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <label className="flex flex-col mb-2">
            <h1>Debit Card Code</h1>
            <input
              type="text"
              className="p-2 transition-all duration-250 delay-0 outline-none border-2 rounded-lg focus:border-lime-400"
              required
            />
          </label>
          <input
            type="submit"
            value="♡ register ♡"
            className="my-2 p-2 transition-all duration-250 delay-0 rounded-lg border-2 hover:cursor-pointer hover:bg-lime-400 hover:text-lime-800 hover:border-lime-400"
          />
        </form>
        <button
          className="my-2 p-2 transition-all duration-250 delay-0 rounded-lg border-2 hover:cursor-pointer hover:bg-lime-400 hover:text-lime-800 hover:border-lime-400"
          onClick={() => setPage(pages[0])}
        >
          ← Home
        </button>
      </div>
    </>,
  ];

  const [page, setPage] = useState(pages[0]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-lime-400 p-8">
      <HeartBG/>
      <div className="flex flex-col">
        <div className="p-8 bg-white rounded-bl-2xl rounded-tr-2xl drop-shadow-[6px_6px_black]">
          <h1
            className={workSans.className + " text-6xl font-black text-black px-16"}
          >
            mina-mina
          </h1>
        </div>
        {page}
      </div>
    </div>
  );
};

export default function Page() {
  const [userState, setUserState] = useState(0); // 0 - NOT LOGGED IN | 1 - LOGGED IN

  if (userState == 0) {
    return <LoginPage />;
  } else {
    return <div className="min-h-screen w-full"></div>;
  }
}
