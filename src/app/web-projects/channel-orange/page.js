"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Oswald } from "next/font/google";
import "./channel-orange-styles.css";
import { useState, useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Spotify } from "react-spotify-embed";

const font_1 = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

function useLetterRef() {
  const lettersRef = useRef([]);
  lettersRef.current = [];
  return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
}

const LandingSection = (props) => {
  const triggerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".landing-img", { opacity: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: "top center",
          end: `+=${window.innerHeight}px `,
          scrub: 2,
        },
      })
      .to(triggerRef.current, {
        color: "#f97316",
      })
      .to(".landing-title", {
        yPercent: -30,
        rotateZ: 90,
        scale: 2,
        color: "transparent",
      })
      .to(".main-container", {
        backgroundColor: "#f97316",
      });
  }, []);

  return (
    <div
      className={
        font_1.className + " flex w-full h-[100vh] justify-center text-white"
      }
      ref={triggerRef}
    >
      <h1 className="font-semibold text-8xl tracking-wide landing-title">
        channel, <span className="font-[200] tracking-tight">ORANGE</span>
      </h1>
    </div>
  );
};

const TextSectionOne = (props) => {
  const [titleRef, setTitleRef] = useLetterRef();
  const [textOneRef, setTextOneRef] = useLetterRef();

  const triggerRef = useRef();
  const containerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const text_1 =
    "Channel Orange was a breaking point for R&B and Hip-Hop as it was introduced by a letter from Frank Ocean's tumblr describing his love for another man. A love story that was portrayed throughout Channel Orange and was an inspiration to the whole album. Back in 2012, many thought this as something revolutionary, as coming out as a black R&B/Hip-Hop artist was very uncommon - especially just as your career is about to take off. Frank has never directly said what his sexual orientation is (neither should he), but this letter did so much for many artists. 10 years later, we still how queer artists are more common in hip-hop; Lil Nas X, Kevin Abstract, Syd, Young M.A etc.";

  useEffect(() => {
    const reveal = gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 2,
        start: "top center",
        end: `bottom 90%`,
      },
      color: "white",
      duration: 10,
      stagger: 1,
    });

    gsap.to(".text-reveal-wrapper-1", {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top",
        end: `bottom 90%`,
      },
    });

    return () => {
      reveal.kill();
    };
  }, [titleRef, textOneRef]);

  return (
    <div
      className="min-h-screen text-[4rem] p-16 text-orange-500 text-reveal-wrapper-1"
      ref={containerRef}
    >
      <div className="p-16" ref={triggerRef}>
        <p ref={titleRef} className="text-reveal">{text_1}</p>
      </div>
    </div>
  );
};

const TextSectionTwo = (props) => {
  const [titleRef, setTitleRef] = useLetterRef();

  const triggerRef = useRef();
  const containerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const text_1 = "Genre";
  const text_2 =
    "Rhythm and blues, Contemporary R&B, Neo soul, Alternative R&B, Progressive soul";

  useEffect(() => {
    const reveal = gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 2,
        start: "top",
        end: `bottom 80%`,
      },
      color: "white",
      duration: 10,
      stagger: 1,
    });

    gsap.to(".text-reveal-wrapper-2", {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
        pin: true,
        start: "top",
        end: `bottom`,
      },
      yPercent: 5,
      scale: 0.8,
      duration: 2,
    });

    return () => {
      reveal.kill();
    };
  }, [titleRef]);

  return (
    <div
      className="min-h-screen text-[5rem] 2xl:text-[6rem] text-orange-500 text-reveal-wrapper-2"
      ref={containerRef}
    >
      <div className="p-16" ref={triggerRef}>
        {text_1.split("").map((letter, idx) => (
          <span className="text-reveal font-bold" key={idx} ref={setTitleRef}>
            {letter}
          </span>
        ))}
      </div>
      <div className="px-16" ref={triggerRef}>
        {text_2.split("").map((letter, idx) => (
          <span className="text-reveal" key={idx} ref={setTitleRef}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

const SongsSection = (props) => {
  const slideStyle =
    "absolute flex flex-col justify-between h-screen opacity-0 text-white";
  const triggerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: "top top",
          scrub: 2,
          end: `+=${window.innerHeight * 34}px`,
        },
        defaults: {
          ease: "ease-in-out",
        },
      })
      .to(".slide-1", { opacity: 1, duration: 1 })
      .to(".slide-1", { opacity: 0, duration: 1 })
      .to(".slide-2", { opacity: 1, duration: 1 })
      .to(".slide-2", { opacity: 0, duration: 1 })
      .to(".slide-3", { opacity: 1, duration: 1 })
      .to(".slide-3", { opacity: 0, duration: 1 })
      .to(".slide-4", { opacity: 1, duration: 1 })
      .to(".slide-4", { opacity: 0, duration: 1 })
      .to(".slide-5", { opacity: 1, duration: 1 })
      .to(".slide-5", { opacity: 0, duration: 1 })
      .to(".slide-6", { opacity: 1, duration: 1 })
      .to(".slide-6", { opacity: 0, duration: 1 })
      .to(".slide-7", { opacity: 1, duration: 1 })
      .to(".slide-7", { opacity: 0, duration: 1 })
      .to(".slide-8", { opacity: 1, duration: 1 })
      .to(".slide-8", { opacity: 0, duration: 1 })
      .to(".slide-9", { opacity: 1, duration: 1 })
      .to(".slide-9", { opacity: 0, duration: 1 })
      .to(".slide-10", { opacity: 1, duration: 1 })
      .to(".slide-10", { opacity: 0, duration: 1 })
      .to(".slide-11", { opacity: 1, duration: 1 })
      .to(".slide-11", { opacity: 0, duration: 1 })
      .to(".slide-12", { opacity: 1, duration: 1 })
      .to(".slide-12", { opacity: 0, duration: 1 })
      .to(".slide-13", { opacity: 1, duration: 1 })
      .to(".slide-13", { opacity: 0, duration: 1 })
      .to(".slide-14", { opacity: 1, duration: 1 })
      .to(".slide-14", { opacity: 0, duration: 1 })
      .to(".slide-15", { opacity: 1, duration: 1 })
      .to(".slide-15", { opacity: 0, duration: 1 })
      .to(".slide-16", { opacity: 1, duration: 1 })
      .to(".slide-16", { opacity: 0, duration: 1 })
      .to(".slide-17", { opacity: 1, duration: 1 })
      .to(".slide-17", { opacity: 0, duration: 1 });
  }, []);

  return (
    <div
      className="wrapper h-screen w-full flex flex-col bg-orange-500"
      ref={triggerRef}
    >
      <div className={"slide slide-1 p-32 " + slideStyle}>
        <p className="font-thin 2xl:text-[6rem] text-[4rem] text-filter">
          Channel Orange is the debut studio album by American R&B
          singer-songwriter Frank Ocean. It was released on July 10, 2012, by
          Def Jam Recordings.
        </p>
      </div>
      <div className={"slide slide-2 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Thinkin&apos; Bout You</h1>
          <p className="text-xl">
            “Thinkin Bout You” is the first single on channel ORANGE. Frank
            originally wrote it for Bridget Kelly but after his reference track
            leaked he recorded a higher-quality version and put it out. Frank
            tries to act tough when reflecting back on a past relationship, but
            ultimately reveals he still has strong feelings for his ex-lover,
            and wonders if they have been able to move on or feel the same way
            he does. The track was performed on Saturday Night Live, and was
            also nominated for record of the year in the 2012 Grammys.
          </p>
        </div>
      </div>
      <div className={"slide slide-3 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Fertilizer</h1>
          <p className="text-xl">
            A short interlude that opens up the darker themes on the album. Over
            what sounds like a 1950s radio program and matching static, Ocean
            begs his love not to treat him like the titular bullshit. But the
            sorrow in his voice and the painful laugh track tell us he’s not
            having much luck.
          </p>
        </div>
      </div>
      <div className={"slide slide-4 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Sierra Leone</h1>
          <p className="text-xl">
            In “Sierra Leone,” Frank talks to a (fictional) younger version of
            himself who fooled around and got a girl pregnant. <br></br>
            <br></br> He uses the extended metaphor of Sierra Leone’s “pink
            skies” to refer to his the girl’s vagina and womb, all the while
            discussing maturing in the face of impending parenthood. Whilst he’s
            an aloof and irresponsible “teenager” at the start of the track,
            he’s a seemingly responsible father figure by the close. Though the
            story is fictional, this kind of emotional maturity holds special
            weight for Frank – his own father left his family when he was five
            years old, leaving him without this kind of upbringing.
          </p>
        </div>
      </div>
      <div className={"slide slide-5 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Sweet Life</h1>
          <p className="text-xl">
            The fifth track off of Frank Ocean’s full length debut, channel
            ORANGE, “Sweet Life” provides a reflective look into the effects of
            wealth. <br></br>
            <br></br> In the song, Frank explores the idea of how money and
            wealth “numbs” people to the problems of the outside world. Frank
            ironically asks, “why see the world when you got the beach?” to
            challenge those who live in excess to escape their bubble and
            acknowledge the struggles of people less fortunate than them.
          </p>
        </div>
      </div>
      <div className={"slide slide-6 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Not Just Money</h1>
          <p className="text-xl">
            This is actually just one of Frank’s friend’s mom, Rosie Watson,
            scolding him. The homie recorded it (cuz it’s just too damn funny)
            and gave it to Frank to use on the album. <br></br>
            <br></br> Apparently the people at Def Jam thought it was a serious
            paid actress. Rosie Watson would reprise her role as a scolding
            mother on Ocean’s second album, Blonde, appearing on the track “Be
            Yourself.” This skit is fittingly followed by “Super Rich Kids” – a
            song about wasting money, partying, etc.
          </p>
        </div>
      </div>
      <div className={"slide slide-7 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Super Rich Kids</h1>
          <p className="text-xl">
            The song elaborates on how a life full of material worth can never
            fulfill someone like love and happiness can. In the final verse, the
            character Frank is embodying falls (or jumps) from the roof he
            started his day on. <br></br>
            <br></br>Only “Super Rich Kids” is a bit more harrowing—there’s
            something sad, something hopeless about how Frank sings “It’s good
            times”.
          </p>
        </div>
      </div>
      <div className={"slide slide-8 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Pilot Jones</h1>
          <p className="text-xl">
            In track 8 of Frank Ocean’s 2012 Channel Orange album, he discusses
            the topic of first love and compares it with a drug by using the
            double entendre Pilot Jones. <br></br>
            <br></br> This is because a pilot is one who drives or steers,
            likening how lovers are “jonesing” or craving each other to a pilot
            that is driving them toward each other. Alternatively, a pilot
            episode is the first in any line of a TV series, hinting at this
            being a first love. Further adding to this extended metaphor is that
            the first love he discusses in the song may or may not smoke
            frequently, so he could be using drugs as an easy comparison to the
            love that they share.
          </p>
        </div>
      </div>
      <div className={"slide slide-9 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Crack Rock</h1>
          <p className="text-xl">
            On the 9th track off channel ORANGE, Ocean speaks about a man
            overcome by an addiction to crack cocaine, and comments on the
            issues of the so-called “War on Drugs” in America. <br></br>
            <br></br>“Crack Rock” of course can literally mean what the man is a
            user of, but also the word “crack” can be like a cracked rock, which
            can be interpreted into the split of this man with his life. He has
            lost everything, and is now alone. The “crack” has come between him
            and his family, and just his life in general.
          </p>
        </div>
      </div>
      <div className={"slide slide-10 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Pyramids</h1>
          <p className="text-xl">
            This is Frank Ocean’s near 10 minute long tale of the ancient
            history of the Black woman, and her gradual decline from a Queen in
            her homeland to her now degrading role in the Western Hemisphere.
            She is no longer revered but used and abused by men who would have
            died to protect her honor many centuries ago.
            <br></br>
            <br></br>In Ocean’s song, he narrates a similar happening with him
            and his woman. Now that she became a traitor and left him for the
            enemy, her decision has backfired on her—because she is not an
            entity of glory and honor anymore, but of dishonor. She is reduced
            to a common stripper who is now taking care of her man who has no
            job. It’s almost as if “the king” is paying her back for what she
            did, because the narrator speaks of his woman stripping to “keep a
            nigga bills paid.”
          </p>
        </div>
      </div>
      <div className={"slide slide-11 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Lost</h1>
          <p className="text-xl">
            The protagonist in the song is a drug supplier who uses his
            girlfriend as a drug mule. His lover gets lost in the intensity of
            the jet-setting lifestyle of drug trafficking and subsequent money
            and lavish gifts that come along with it. He believes that one day
            she will live a normal life away from this criminal lifestyle, but
            it must come after one last smuggle, which leads to another one last
            smuggle.
          </p>
        </div>
      </div>
      <div className={"slide slide-12 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">White</h1>
          <p className="text-xl">
            This cut from Channel Orange is a relaxed instrumental version of
            Frank’s song “White” from The Odd Future Tape Vol. 2 <br></br>
            <br></br>
            The song features a guitar solo from John Mayer, who also solos on
            “Pyramids” and went on to collaborate with Ocean on “Wildfire”.
          </p>
        </div>
      </div>
      <div className={"slide slide-13 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Monks</h1>
          <p className="text-xl">
            Frank discusses the relationship he had with a female groupie he had
            met on a tour. He continuously compares the audience at his tours to
            Buddhist monks and their spiritual idol (Dalai Lama).
          </p>
        </div>
      </div>
      <div className={"slide slide-14 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Bad Religion</h1>
          <p className="text-xl">
            Frank Ocean initiates a makeshift therapy session in the backseat of
            a cab on this sorrowful track.
          </p>
        </div>
      </div>
      <div className={"slide slide-15 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Pink Matter</h1>
          <p className="text-xl">
            A play on the term “gray matter,” the substance that makes up the
            brain, “Pink Matter” is a meditation on the female anatomy, desire,
            and fantasy. <br></br>
            <br></br>
            The song features OutKast member André 3000, who also plays guitar
            on the track. The song almost featured Big Boi grabbing a verse, but
            after discussion Big Boi and André decided they couldn’t do an
            OutKast reunion on somebody else’s record.
          </p>
        </div>
      </div>
      <div className={"slide slide-16 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">Forrest Gump</h1>
          <p className="text-xl">
            “Forrest Gump” is the sixteenth and penultimate track on Frank
            Ocean’s debut album, Channel ORANGE.
            <br></br>
            <br></br>
            The song makes considerable reference to the 1994 comedy-drama film
            Forrest Gump. Frank wrote this song from the perspective of Forrest
            Gump’s love interest, Jenny. This song serves as a metaphor for the
            feelings Frank still harbors for his first love, the man he wrote
            about in his Tumblr post.
          </p>
        </div>
      </div>
      <div className={"slide slide-17 items-center " + slideStyle}>
        <div className="flex flex-col basis-[80%] justify-center w-1/2">
          <h1 className="font-bold text-[4rem] 2xl:text-[7rem] mb-4 text-reveal">End</h1>
          <p className="text-xl">
            “End” serves as the closer to channel ORANGE on streaming services.
            The physical releases of the album would have Golden Girl featuring
            Tyler, The Creator instead.<br></br>
            <br></br>Although not confirmed by Frank himself, the piece is
            popularly theorized to be inspired by a scene from the 2006 film,
            ATL, which features characters New-New and Rashad exchanging
            conversation in a similar setting.
          </p>
        </div>
      </div>
    </div>
  );
};

const EndingPage = (props) => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.to(".ending-section", {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
        start: "top",
      },
      scale: 1.5,
    });
  }, []);

  return (
    <div
      className="min-h-screen m-8 flex flex-col items-center justify-center text-white ending-section"
      ref={containerRef}
    >
      <h1 className="font-semibold text-6xl 2xl:text-8xl tracking-wide ">
        channel, <span className="font-[200] tracking-tighter">ORANGE</span>
      </h1>
      <div className="flex flex-col my-4">
        <div className="flex flex-row">
          <Spotify link="https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8" />
          <div className="flex flex-col m-4">
            <h1 className="font-bold text-xl 2xl:text-2xl">Frank Ocean</h1>
            <p>2012</p>
            <p>17 songs</p>
            <p>55 min 47 sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <main className="min-h-screen overflow-hidden main-container">
        <LandingSection />
        <TextSectionTwo />
        <TextSectionOne />
        <SongsSection/>
        <EndingPage />
      </main>
    </ReactLenis>
  );
}
