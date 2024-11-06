"use client";
import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const calculateMasterKey = (generator: any[]) => {
  const table = new Array(0x100).fill(0);
  let data, y, x, yll, yhi;

  for (let i = 0; i < 0x100; i++) {
    data = i;
    for (let j = 0; j < 4; j++) {
      if (data & 1) data = 0xedba6320 ^ (data >> 1);
      else data = data >> 1;

      if (data & 1) data = 0xedba6320 ^ (data >> 1);
      else data = data >> 1;
    }
    table[i] = data;
  }

  y = 0xffffffff;
  x = generator[0];
  for (let i = 0; i < 4; i++) {
    x ^= y;
    y = table[x] ^ (y >> 8);
    x = generator[1 + i * 2] ^ y;
    y = table[x] ^ (y >> 8);
    x = generator[2 + i * 2];
  }

  y ^= 0xaaaa;
  y += 0x1657;

  yll = y;
  yll = (yll + 1) * 0xa7c5ac47;
  yhi = yll >> 48;
  yhi *= 0xfffff3cb;
  y += yhi << 5;

  return y;
};

export default function Page() {
  const [serviceCode, setServiceCode] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [masterKey, setMasterKey] = useState(0);

  const handleCalculate = () => {
    const servicecode = parseInt(serviceCode, 10) % 10000;
    const monthVal = parseInt(month, 10) % 100;
    const dayVal = parseInt(day, 10) % 100;

    const generator = `${String(monthVal).padStart(2, "0")}${String(
      dayVal
    ).padStart(2, "0")}${String(servicecode).padStart(4, "0")}`
      .split("")
      .map((c) => c.charCodeAt(0));

    const key = calculateMasterKey(generator);
    setMasterKey(key);
  };

  return (
    <div className="h-[100vh] mx-auto max-w-lg justify-center gap-2 flex flex-col">
      <h1 className="text-2xl font-bold">Master Key Calculator</h1>
      <input
        type="text"
        placeholder="Service Code"
        value={serviceCode}
        maxLength={8}
        onChange={(e) => setServiceCode(e.target.value)}
        className="p-4 rounded-lg dark:text-slate-900"
      />
      <input
        type="text"
        placeholder="Month"
        value={month}
        maxLength={2}
        onChange={(e) => setMonth(e.target.value)}
        className="p-4 rounded-lg dark:text-slate-900"
      />
      <input
        type="text"
        placeholder="Day"
        value={day}
        maxLength={2}
        onChange={(e) => setDay(e.target.value)}
        className="p-4 rounded-lg dark:text-slate-900"
      />
      <button
        onClick={handleCalculate}
        className="dark:bg-stone-900 p-4 rounded-lg"
      >
        Calculate
      </button>
      {masterKey !== null && <p>Master key is {masterKey}</p>}
    </div>
  );
}
