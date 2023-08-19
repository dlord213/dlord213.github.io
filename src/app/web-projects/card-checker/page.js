"use client";
import Link from "next/link";
import { useState } from "react";

const luhnCheck = (num) => {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};

export default function Page  () {
  const [cardNumber, setCardNumber] = useState("");
  const [textState, setTextState] = useState("Please enter the card number.");

  const checkCard = (evt) => {
    evt.preventDefault();

    if (luhnCheck(cardNumber) == true) {
      setTextState("The card is valid.")
      console.log(luhnCheck(cardNumber))
      console.log(cardNumber)
    } else {
      setTextState("The card is invalid.")
      console.log(luhnCheck(cardNumber))
      console.log(cardNumber)
    }
  };

  return (
    <>
      <button className="absolute top-20 left-40 bg-slate-900 p-4 text-white rounded-md text-xl hover:bg-red-500 duration-500 transition-all delay-0">
        <Link href="/web-projects">← Web Projects</Link>
      </button>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-950 text-white">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl">Card Number Checker</h1>
          <form onSubmit={checkCard}>
            <label className="block my-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Card Number
              </span>
              <input
                type="text"
                name="cardNumber"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black font-mono"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                maxLength="16"
                value={cardNumber}
                onChange={(evt) => setCardNumber(evt.target.value)}
              />
            </label>
            <input type="submit" value="Submit" className="hover:bg-red-500 p-4 rounded-md duration-500 transition-all delay-0 bg-slate-800 w-full cursor-pointer"/>
            <h1 className="my-4 bg-slate-900 p-4 rounded-md font-mono">
              {textState}
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}
