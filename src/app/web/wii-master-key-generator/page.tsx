"use client";
import Link from "next/link";
import React, { useState } from "react";

class CRC32 {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: any;

  constructor() {
    this.gentable();
  }

  crc32(input: string, crc = 0xffffffff) {
    let count = input.length;
    let i = 0;
    while (count !== 0) {
      count -= 1;
      const temp1 = (crc >> 8) & 0xffffff;
      const temp2 = this.table[(crc ^ input.charCodeAt(i)) & 0xff];
      crc = temp1 ^ temp2;
      i += 1;
    }
    return crc;
  }

  gentable() {
    this.table = [];
    for (let i = 0; i < 256; i++) {
      let crc = i;
      for (let j = 0; j < 8; j++) {
        if (crc & 1) {
          crc = (crc >>> 1) ^ 0xedb88320;
        } else {
          crc >>>= 1;
        }
      }
      this.table.push(crc);
    }
  }
}

const ctime = Date.now() / 1000;

const OptionDate = ({ delta }: { delta: number }) => {
  const t = new Date((ctime + delta * 3600 * 24) * 1000);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const day = ("0" + t.getDate()).slice(-2);

  return (
    <option value={`${month}${day}`} className="">
      {t.toDateString()}
    </option>
  );
};

export default function Page() {
  const [form, setForm] = useState({
    confirmationNumber: "",
    dateSelected: "",
  });

  const [codeMessage, setCodeMessage] = useState([
    "bg-slate-200 dark:text-slate-900 dark:bg-slate-50",
    "Enter your confirmation number and date to generate a master key.",
  ]);

  const validateForm = () => {
    const { confirmationNumber, dateSelected } = form;

    if (confirmationNumber.length !== 8 || !/^\d+$/.test(confirmationNumber)) {
      setCodeMessage([
        "bg-red-500 text-slate-50",
        "Please provide a valid 8-digit confirmation number.",
      ]);
      return false;
    }

    if (dateSelected.length !== 4 || !/^\d+$/.test(dateSelected)) {
      setCodeMessage(["bg-red-500 text-slate-50", "Invalid date."]);
      return false;
    }

    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const fullnum = form.dateSelected + form.confirmationNumber.slice(4);
    const crc = new CRC32().crc32(fullnum);
    const code = ((crc ^ 0xaaaa) + 0x14c1) % 100000;

    const message = ("00000" + code).slice(-5);

    setCodeMessage(["bg-green-500 text-slate-50", `Code: ${message}`]);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    console.log({ ...form, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto justify-center min-h-[100vh] flex flex-col gap-2 dark:text-slate-50"
    >
      <h1 className="text-slate-950 dark:text-slate-50 font-bold text-2xl">
        Wii Parental Control Password Reset Tool
      </h1>

      <input
        type="text"
        name="confirmationNumber"
        value={form.confirmationNumber}
        onChange={handleChange}
        placeholder="Confirmation Number"
        maxLength={8}
        className="p-4 rounded-lg dark:bg-slate-50 dark:text-slate-900"
      />
      <select
        className="p-4 rounded-lg dark:bg-slate-50 dark:text-slate-900"
        onChange={handleChange}
        name="dateSelected"
        value={form.dateSelected}
      >
        <OptionDate delta={-1} />
        <OptionDate delta={0} />
        <OptionDate delta={1} />
      </select>
      <button
        type="submit"
        className="bg-slate-900 text-slate-50 px-4 py-4 rounded-lg dark:bg-slate-100 dark:text-slate-950"
      >
        Submit
      </button>
      <Link
        className="bg-slate-900 text-slate-50 px-4 py-4 rounded-lg dark:bg-slate-100 dark:text-slate-950 text-center"
        href="/"
      >
        Home
      </Link>
      <p className={codeMessage[0] + " p-4 rounded-lg"}>{codeMessage[1]}</p>
    </form>
  );
}
