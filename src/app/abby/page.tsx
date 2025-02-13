"use client";
import { a, animated, useSpringValue, useTrail } from "@react-spring/web";
import React, { ReactNode, useEffect } from "react";
import { useState } from "react";

const Trail: React.FC<{ open: boolean; children: ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className="lg:text-8xl text-6xl tracking-tighter relative w-full font-black"
          style={style}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Page() {
  const photoMasonryOpacityValue = useSpringValue(0);

  const [open, set] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      set(true);
    }, 1000);

    setTimeout(() => {
      set(false);
    }, 3000);

    setTimeout(() => {
      setIndex(1);
      photoMasonryOpacityValue.start(1);
    }, 4000);
  }, []);

  const pages = [
    <>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Trail open={open}>
          <span className="text-white">Happy</span>
          <span className="text-white">Valentines,</span>
          <span className="text-white">my Abby!</span>
        </Trail>
      </main>
    </>,
    <>
      <animated.main
        className="min-h-screen xl:max-w-4xl lg:max-w-6xl mx-auto py-4 gap-4 flex flex-col overflow-hidden"
        style={{ opacity: photoMasonryOpacityValue }}
      >
        <h1 className="font-black text-4xl">❤️ Hello, Abby!</h1>
        <p className="">
          Thank you for giving me a chance to be your boyfriend, wala koy
          mahatag karon Valentine&apos;s Day kundi kani lang and since dili pud
          ta magkita ana nga adlaw. This is a simple appreciation lang sab
          satoang pag-sabay sa mga nilabay nga adlaw and unta pud mag-sabay pata
          sa mga mulabay nga adlaw. Bawi rako next time bb, love u po. 😁
        </p>
        <animated.div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOKgRKrJ5Ki642QlWVg5lgyjL_S-QFDj0-hjz-3MkqeFfo5cFc0e_eMF0ec3Bk6qNRhPZGfncD-xKMhoa3tr8b4gU31nrXF65CyF17CzgQ-Sy68D_0J=w2400"
              className="rounded-md w-full"
            />
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNPBBqlEi4LGz_vYAo88RL-EAW57ocimDnfU0ecoJsRIv413pYrsWtvF23wmypJCy3hoNAzecA3VS81NxQ1slKZvYTACjio46qe2rdXvZX3HTFiwSJ8=w2400"
              className="rounded-md w-full"
            />
          </div>
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMrzppb2cwc0BZThPnZYWe4v66UDClEMzJ1PnjMVZF8mTyugqnEb_b2f3UmS1YoK4euNiLrdohQ7LeW0FVzhr7ndjB8B3zsqIB-Tir-eVWUVmq0ANJo=w2400"
            className="rounded-md w-full"
          />
        </animated.div>
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczOghQ5c1i7Gq9tXmObWzMxBcMdd3jTK7EZLRsW9p4EK-OrRuMYqPWDqCab-1vyWfhrnAMQkj40rSYAmgbQvdmuVaT3JLLXnDPxNt_WtZcWd70PPtD7G=w2400"
          className="rounded-md w-full"
        />
        <animated.div className="grid grid-cols-2 gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMpcrdiiStFr2YFsUfBVyR2TfHIBdXebyCDn2dyvRvrgXtvFmqFoioI69kOBOmzYiLFas0tUxQG2msPLj5pDLCqThlLvTeiYVJG-jP7njyh-V9SrHum=w2400"
            className="rounded-md w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczM9LCPu4gRzFHgk0V5eAOK7qF7VIaUF4R_098FHtXmYuq5TauefsdjFudcYi-RujrMeLARoEp7Fv68D2lPil2bIRI9Yuliypjo6f6P6-eLDxD4aLXYj=w2400"
            className="rounded-md w-full"
          />
        </animated.div>
        <animated.div className="grid grid-cols-2 gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPxTHt5E_ddp7V8NapOiQU458Np0H2UEf8vvkcyhrY-UXvNenggzITA5nQIg5LgG_WWbjHOBNo4Uo3OREAG4IS2BrNp_TXN97n7jEP7IOpPrP6Ke80i=w2400"
            className="rounded-md w-full"
          />
          <div className="grid grid-rows-3 place-items-stretch gap-4">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOfZmpHoIM7ObAT1dfzzDSTlWxoZKbPP-7j5A3ffJbxhj4xTvnxVNtnuUT8zNv5PWZyQNbwXjm9Q5HH1KY_rslPWzMx7Xw70Qd0DL1V6GtkqxRcQvBq=w2400"
              className="rounded-md w-full"
            />
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMI8PIu_HMUJ8dva8As1rixPItuOKISDum9lJc-I8vep0yKjHtkyiVsEGSaMvU53168INAuX7KPJP9oBcrDhSIPZ3c0Qs80HEEb7RkzfOye-wbcsUFw=w2400"
              className="rounded-md w-full"
            />
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPFxRPk5BcteRt61iGcJp6GkqPKCHzOaCA58kHggMeUhWodEtkPdA8FWOvzi28QY2oD08KGNpWEIEavhQ8kZMM4oKc0oUBmQCUidPrAbc8taUkdvp9h=w2400"
              className="rounded-md w-full"
            />
          </div>
        </animated.div>
        <animated.div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-1 gap-4">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczO6fuyBrkqOLDDF5l4SfPOL-xzKD-MEW4U9QIKTFM8rHz0qLkllDOxMh9Bonp9ZTPTqsdPbY3dW3sEopVWGg6GyBKiOA_MuPUuQ6moggcvS1gE_fs_U=w2400"
              className="rounded-md w-full aspect-square object-cover"
            />
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczM8izPqL6cZjnEogEe517B7sBhOVe3hGXFgfhXiaE1Hyx__ixY9JlQ92n03RqhDD7SN828Zya4x3JpH4EkJZbgMyTzZQrbQ6a9BL-N7BFcsCQdKEszY=w2400"
              className="rounded-md w-full"
            />
          </div>
          <div className="grid grid-rows-1 gap-4">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMcDAWvvPrU8dqb9i-9wijI3wa4utu41XHDKIE3LYg16y_SNDXKEkGAHYjr2c3Md8aOgklGYOnzFXwWTX9lrklN3CAykuPyC2D1iI9-wFQQdxkwbCx0=w2400"
              className="rounded-md w-full"
            />
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMM06Fvzy6Dn9QD6OLq5lnqCa24Robye00k5iFQDZn1FKxbSa5RtDGacv-J6qKLQ_mLHu23G81q4UFeiLJ7WYXCsJ89IFIz9jQKX02AupnPpauCX7Cj=w2400"
              className="rounded-md w-full h-full aspect-square object-cover"
            />
          </div>
        </animated.div>
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczOgKtQyKb_AB5e8DSB5ekYFIHBUdS8HxIudrlZW0umLKSy7ApCh1bVS2HxxaWklGm4fKKW6IRPJFQKPrjMhLjHHt8lA21ZkO8bivwqseeZvFCL7kcOt=w2400"
          className="rounded-md w-full"
        />
        <animated.div className="grid grid-cols-2 gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMvbHOm74hrXwnDVWqg8NG99vFKJ48_TVlEJncH5gdoiWb8WdBhwl6PHzjxPbUKZJL6a8qM-XZkIo3ffvt9He-A3hNX1aCV4R1pW1smvIM2y-EpfOqN=w2400"
            className="rounded-md w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMfwEdrlRUaKrsb1cyXhzsFYuccbGCcp_-e2Y902jkXAB7cckVMh0J7p_kWDc5fBv6CqBXr0C1WFTnPV0gwzWg7cgMeLBFr8l7h8lKDDq3YhWMbyPUR=w2400"
            className="rounded-md w-full"
          />
        </animated.div>
        <animated.div className="grid grid-cols-2 gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPN9Di2zEnCG6y5orwA8p5gQYz34xocjFHTzBMuY8fRy7ieuSRjUfusPl50xQxuJVk6VEee54Zl0wwtrhtM-T7Tl5_D4bOSlvRf2UPjrlnNUL6chucK=w2400"
            className="rounded-md w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczNjFBWk17iQH3wNGFMQ9K1QTYlmgJ1R1KdWdh0Qng_qQeSUwSIzOD2lwZV4TL4qsvKuTtMNWXW0mea9o-bqnvZ63pkrpdk9lAZUmlxe2DU5VDeGE5zX=w2400"
            className="rounded-md w-full"
          />
        </animated.div>
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczOS0TVywJZk0Ha-vPxJ5M3mbBblvLX0aGvB5p1HUpJwZLhsO_R6q2Z7puWldi3Po7rBsbjUgUE3nXStpK1lt7rCMgkX7hniBz0TWZX3ZHSPHZrAkiJF=w2400"
          className="rounded-md w-full"
        />
        <animated.div className="grid grid-cols-2 gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczNyYcPoOjmRDVUhLuWBL4S5gLrY20v9MqesGd_ULptevoCgWW617fVXliT3CCgTPr7qnl2t-cWSU9aktGqBbRw0fyOg-pW1PJBl_tWnuEDI1HXK6ohc=w2400"
            className="rounded-md w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczM0DIL8t5W1VYU5FS5Rgwv6dziRRWmcuW6h1tjX2rCp6AnRUC3ua8tQNIeQPX0LFzjvTBZEAKeFpagQknRrIjCVQiR5LST_QiTz7FkdMxsO8ezvGX06=w2400"
            className="rounded-md w-full"
          />
        </animated.div>
        <animated.div className="grid grid-cols-2 gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczO7x7aZqplRX_UiC93Qwh8JDHrchVa-wyAFY0iRlKxHDpGdwZVCyNEroVQtED51DN1x6ccV9Ugf-6i3G-Cj4_zVsfo_CWduJxJchK9qHuh2ROBv-ayY=w2400"
            className="rounded-md w-full"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMsibHvISQ_ONlpaqEr2D0wkDnE8I3KQ6TZdR5wix-bf65WZOn4NtEJ_WHK7Pc4bT1l3H2BcPfs5TktXEbi3pAKnSIiDGQ3CQlhw9kH-l3bSJHYomSy=w2400"
            className="rounded-md w-full"
          />
        </animated.div>
        <animated.div></animated.div>
      </animated.main>
    </>,
  ];

  return <>{pages[index]}</>;
}
