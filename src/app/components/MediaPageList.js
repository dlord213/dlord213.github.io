import { Suspense, useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";

const indiePhotos = [
  "/assets/images/albums/indie/1.jpg",
  "/assets/images/albums/indie/2.jpg",
  "/assets/images/albums/indie/3 (2).jpg",
  "/assets/images/albums/indie/3.jpg",
  "/assets/images/albums/indie/4.jpg",
  "/assets/images/albums/indie/5.jpg",
  "/assets/images/albums/indie/6.jpg",
  "/assets/images/albums/indie/7.jpg",
  "/assets/images/albums/indie/8.jpg",
  "/assets/images/albums/indie/9.jpg",
  "/assets/images/albums/indie/10.jpg",
  "/assets/images/albums/indie/11.jpg",
  "/assets/images/albums/indie/12.jpg",
  "/assets/images/albums/indie/13.jpg",
  "/assets/images/albums/indie/14.jpg",
  "/assets/images/albums/indie/13.webp",
  "/assets/images/albums/indie/28.jpg",
  "/assets/images/albums/indie/32.jpg",
];

const rockPhotos = [
  "/assets/images/albums/indie-rock/1.jpg",
  "/assets/images/albums/indie-rock/2.jpg",
  "/assets/images/albums/indie-rock/3.jpg",
  "/assets/images/albums/indie-rock/4.jpg",
  "/assets/images/albums/indie-rock/5.jpg",
  "/assets/images/albums/indie-rock/6.jpg",
  "/assets/images/albums/indie-rock/7.jpg",
  "/assets/images/albums/indie-rock/8.jpg",
  "/assets/images/albums/indie-rock/11.jpg",
  "/assets/images/albums/indie-rock/18.png",
  "/assets/images/albums/indie-rock/20.jpg",
  "/assets/images/albums/indie-rock/22.jpg",
  "/assets/images/albums/indie-rock/23.jpg",
  "/assets/images/albums/indie-rock/24.jpg",
  "/assets/images/albums/indie-rock/25.jpg",
];

const hiphopPhotos = [
  "/assets/images/albums/hip-hop/1.jpg",
  "/assets/images/albums/hip-hop/2.jpg",
  "/assets/images/albums/hip-hop/2.png",
  "/assets/images/albums/hip-hop/3 (2).jpg",
  "/assets/images/albums/hip-hop/3.jpg",
  "/assets/images/albums/hip-hop/4.jpg",
  "/assets/images/albums/hip-hop/5.jpg",
  "/assets/images/albums/hip-hop/6.jpg",
  "/assets/images/albums/hip-hop/6.png",
  "/assets/images/albums/hip-hop/7 (2).jpg",
  "/assets/images/albums/hip-hop/7.jpg",
  "/assets/images/albums/hip-hop/8.jpg",
  "/assets/images/albums/hip-hop/9.jpg",
  "/assets/images/albums/hip-hop/10.jpg",
  "/assets/images/albums/hip-hop/11.jpg",
  "/assets/images/albums/hip-hop/12.jpg",
  "/assets/images/albums/hip-hop/13.jpg",
  "/assets/images/albums/hip-hop/14.jpg",
  "/assets/images/albums/hip-hop/15.jpg",
  "/assets/images/albums/hip-hop/16.jpg",
  "/assets/images/albums/hip-hop/17.jpg",
  "/assets/images/albums/hip-hop/21.jpg",
  "/assets/images/albums/hip-hop/26.jpg",
  "/assets/images/albums/hip-hop/27.jpg",
  "/assets/images/albums/hip-hop/31.jpg",
  "/assets/images/albums/hip-hop/33.jpg",
];

const japKorPhotos = [
  "/assets/images/albums/japanese-korean/1.jpg",
  "/assets/images/albums/japanese-korean/2.jpg",
  "/assets/images/albums/japanese-korean/3.jpg",
  "/assets/images/albums/japanese-korean/4.jpg",
  "/assets/images/albums/japanese-korean/5.jpg",
  "/assets/images/albums/japanese-korean/6.jpg",
  "/assets/images/albums/japanese-korean/7.jpg",
  "/assets/images/albums/japanese-korean/8.jpg",
  "/assets/images/albums/japanese-korean/9.jpg",
  "/assets/images/albums/japanese-korean/10.jpg",
  "/assets/images/albums/japanese-korean/11.jpg",
  "/assets/images/albums/japanese-korean/12.jpg",
  "/assets/images/albums/japanese-korean/13.jpg",
  "/assets/images/albums/japanese-korean/14.jpg",
  "/assets/images/albums/japanese-korean/15.jpg",
  "/assets/images/albums/japanese-korean/16.jpg",
  "/assets/images/albums/japanese-korean/17.jpg",
  "/assets/images/albums/japanese-korean/18.jpg",
  "/assets/images/albums/japanese-korean/19.jpg",
  "/assets/images/albums/japanese-korean/21.jpg",
  "/assets/images/albums/japanese-korean/22.jpg",
  "/assets/images/albums/japanese-korean/23.webp",
  "/assets/images/albums/japanese-korean/24.jpg",
  "/assets/images/albums/japanese-korean/25.jpg",
  "/assets/images/albums/japanese-korean/26.jpg",
  "/assets/images/albums/japanese-korean/27.jpg",
  "/assets/images/albums/japanese-korean/for lovers.jpg",
];

const popPhotos = [
  "/assets/images/albums/pop/1.jpg",
  "/assets/images/albums/pop/2.jpg",
  "/assets/images/albums/pop/3.jpg",
  "/assets/images/albums/pop/4.jpg",
  "/assets/images/albums/pop/5.jpg",
  "/assets/images/albums/pop/6.jpg",
  "/assets/images/albums/pop/7.jpg",
  "/assets/images/albums/pop/8.jpg",
  "/assets/images/albums/pop/9.png",
  "/assets/images/albums/pop/10.png",
  "/assets/images/albums/pop/12.jpg",
  "/assets/images/albums/pop/13.jpg",
  "/assets/images/albums/pop/15.jpg",
  "/assets/images/albums/pop/19.jpg",
];

const rnbSoulPhotos = [
  "/assets/images/albums/rnb-soul/1.jpg",
  "/assets/images/albums/rnb-soul/2.jpg",
  "/assets/images/albums/rnb-soul/3.jpg",
  "/assets/images/albums/rnb-soul/4.jpg",
  "/assets/images/albums/rnb-soul/5.jpg",
  "/assets/images/albums/rnb-soul/6.jpg",
  "/assets/images/albums/rnb-soul/7.jpg",
  "/assets/images/albums/rnb-soul/8.jpg",
  "/assets/images/albums/rnb-soul/9.jpg",
  "/assets/images/albums/rnb-soul/10.jpg",
  "/assets/images/albums/rnb-soul/10.png",
  "/assets/images/albums/rnb-soul/11.jpg",
  "/assets/images/albums/rnb-soul/12.jpg",
  "/assets/images/albums/rnb-soul/13.jpg",
  "/assets/images/albums/rnb-soul/14.jpg",
  "/assets/images/albums/rnb-soul/15.jpg",
  "/assets/images/albums/rnb-soul/16.jpg",
  "/assets/images/albums/rnb-soul/17.jpg",
  "/assets/images/albums/rnb-soul/17.png",
  "/assets/images/albums/rnb-soul/18.jpg",
  "/assets/images/albums/rnb-soul/19.jpg",
  "/assets/images/albums/rnb-soul/20.jpg",
  "/assets/images/albums/rnb-soul/21.jpg",
  "/assets/images/albums/rnb-soul/22.jpg",
  "/assets/images/albums/rnb-soul/23.jpg",
  "/assets/images/albums/rnb-soul/24.jpg",
  "/assets/images/albums/rnb-soul/25.jpg",
  "/assets/images/albums/rnb-soul/26.jpg",
  "/assets/images/albums/rnb-soul/27.jpg",
  "/assets/images/albums/rnb-soul/29.jpg",
  "/assets/images/albums/rnb-soul/30.jpg",
];

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1 className="text-2xl">Loading....</h1>
    </div>
  );
};

const CreateAudioContainer = (props) => {
  return (
    <div className="flex-col flex justify-center">
      <h1>{props.bpm} bpm</h1>
      <audio controls controlsList="nodownload">
        <source src={"/assets/audios/" + props.src} type="audio/mp3" />
      </audio>
    </div>
  );
};

const photoStyle =
  "w-full aspect-square transition-all duration-[250ms] delay-0 hover:scale-150 rounded-xl hover:brightness-110";

export const photosPage = [
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl col-span-3 text-right overflow-hidden">
        hip-hop
      </h1>
      <div className="lg:container grid lg:grid-cols-7 auto-rows-max gap-2 w-full my-8 items-center place-items-center">
        {hiphopPhotos.map((image, index) => (
          <img src={image} key={index} className={photoStyle}></img>
        ))}
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl col-span-2 text-right overflow-hidden">
        indie
      </h1>
      <div className="lg:container grid lg:grid-cols-5 auto-rows-max gap-2 w-full my-8 items-center place-items-center">
        {indiePhotos.map((image, index) => (
          <img src={image} key={index} className={photoStyle}></img>
        ))}
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl text-right overflow-hidden">rock</h1>
      <div className="lg:container grid lg:grid-cols-5 auto-rows-max gap-2 w-full my-8 items-center place-items-center">
        {rockPhotos.map((image, index) => (
          <img src={image} key={index} className={photoStyle}></img>
        ))}
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl text-right overflow-hidden">
        japanese / korean
      </h1>
      <div className="lg:container grid lg:grid-cols-7 auto-rows-max gap-2 w-full my-8 items-center place-items-center">
        {japKorPhotos.map((image, index) => (
          <img src={image} key={index} className={photoStyle}></img>
        ))}
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl text-right overflow-hidden">pop</h1>
      <div className="lg:container grid lg:grid-cols-5 auto-rows-max gap-2 w-full my-8 items-center place-items-center">
        {popPhotos.map((image, index) => (
          <img src={image} key={index} className={photoStyle}></img>
        ))}
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl text-right overflow-hidden">
        r&b / soul
      </h1>
      <div className="lg:container grid lg:grid-cols-7   auto-rows-max gap-2 w-full my-8 items-center place-items-center">
        {rnbSoulPhotos.map((image, index) => (
          <img src={image} key={index} className={photoStyle}></img>
        ))}
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl text-right overflow-hidden">
        radio
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <Spotify
          wide
          link="https://open.spotify.com/playlist/2igCni9ckGeGcn7NCWvOYs"
        />
        <Spotify
          wide
          link="https://open.spotify.com/playlist/29fOPGRqSDv6CJDOm22TYG"
        />
        <Spotify
          wide
          link="https://open.spotify.com/playlist/1o8fpQDHsv1UJW7Uo36jxX"
        />
        <Spotify
          wide
          link="https://open.spotify.com/playlist/7qC1hyYLf7O5PsrNQS5qD3"
        />
        <Spotify
          wide
          link="https://open.spotify.com/playlist/20lAN9SP0MDsVS1VnPQkhh"
        />
      </div>
    </Suspense>
  </>,
  <>
    <Suspense fallback={<PageLoading />}>
      <h1 className="font-bold lg:text-8xl text-right overflow-hidden">
        beats
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <CreateAudioContainer bpm="96" src="90s hiphop.mp3" />
        <CreateAudioContainer bpm="104" src="90s r&b again.mp3" />
        <CreateAudioContainer bpm="114" src="aaliyah 2.mp3" />
        <CreateAudioContainer bpm="100" src="affection.mp3" />
        <CreateAudioContainer bpm="92" src="alchemist inspired 2.mp3" />
        <CreateAudioContainer bpm="122" src="fafnir.mp3" />
        <CreateAudioContainer bpm="79" src="g funk inspired.mp3" />
        <CreateAudioContainer bpm="165" src="i can't stand the pain.mp3" />
        <CreateAudioContainer bpm="91" src="just kickin it sample bitch!.mp3" />
        <CreateAudioContainer bpm="120" src="keep yourself from me.mp3" />
        <CreateAudioContainer bpm="60" src="love love me.mp3" />
        <CreateAudioContainer bpm="111" src="loving.mp3" />
        <CreateAudioContainer bpm="119" src="me in you.mp3" />
        <CreateAudioContainer bpm="128" src="my love.mp3" />
        <CreateAudioContainer bpm="90" src="pa para.mp3" />
        <CreateAudioContainer bpm="96" src="pharrell inspired.mp3" />
        <CreateAudioContainer bpm="80" src="r&b inspired.mp3" />
        <CreateAudioContainer bpm="121" src="runaway inspired.mp3" />
        <CreateAudioContainer bpm="100" src="seen.mp3" />
        <CreateAudioContainer bpm="116" src="SICK! inspired.mp3" />
        <CreateAudioContainer bpm="100" src="tabula rasa #2 inspired.mp3" />
        <CreateAudioContainer bpm="74" src="tabula rasa inspired.mp3" />
        <CreateAudioContainer bpm="108" src="titanic inspired.mp3" />
        <CreateAudioContainer bpm="75" src="watch me.mp3" />
        <CreateAudioContainer bpm="124" src="whats good.mp3" />
        <CreateAudioContainer bpm="88" src="wu tang inspired.mp3" />
        <CreateAudioContainer bpm="100" src="yea yea yea.mp3" />
        <CreateAudioContainer bpm="135" src="you have always been enough (bass).mp3"/>
        <CreateAudioContainer bpm="114" src="you you you you.mp3" />
      </div>
    </Suspense>
  </>,
];
