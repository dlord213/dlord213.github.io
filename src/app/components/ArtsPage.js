import { Carousel } from "react-responsive-carousel";
import { CustomSlider } from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let artworkImages = [
  "/assets/images/designs/yoko kurama (clumpy grain)-01.jpg",
  "/assets/images/designs/ae86-01.jpg",
  "/assets/images/designs/apostles-02.jpg",
  "/assets/images/designs/blonded-01.jpg",
  "/assets/images/designs/channel orange-01.jpg",
  "/assets/images/designs/cleopatra & aphrodite-01.jpg",
  "/assets/images/designs/endless card-01.png",
  "/assets/images/designs/everlasting love-01.jpg",
  "/assets/images/designs/enough is never enough-01.png",
  "/assets/images/designs/fatal frame-01.jpg",
  "/assets/images/designs/find yourself ps2 box art back cover-01.jpg",
  "/assets/images/designs/find yourself ps2 box art-01.jpg",
  "/assets/images/designs/fucked up minds-01.jpg",
  "/assets/images/designs/fucked-up girl-01.jpg",
  "/assets/images/designs/how could i not cry-01.jpg",
  "/assets/images/designs/lost in thoughts-01.jpg",
  "/assets/images/designs/love or lust-01.jpg",
  "/assets/images/designs/mary (wicked world)-01.jpg",
  "/assets/images/designs/no one can be you except you-01.png",
  "/assets/images/designs/nobody but you-01.jpg",
  "/assets/images/designs/okinawa-01.jpg",
  "/assets/images/designs/skyline to-01.jpg",
  "/assets/images/designs/speed 180 and 240sx-01.jpg",
  "/assets/images/designs/the morning after makes the night before seem surreal-01.jpg",
  "/assets/images/designs/the present-01.jpg",
  "/assets/images/designs/we're all horrible in our own ways-01.png",
];

let typographyImages = [
  "/assets/images/designs/typography/we'll never be those kids again-02.png",
  "/assets/images/designs/typography/feet pics mo!!!-01.png",
  "/assets/images/designs/typography/in desolation (no flower overlay)-01.png",
  "/assets/images/designs/typography/ih talaga ba (final)-01.png",
  "/assets/images/designs/typography/sawa at paalala-01.png",
  "/assets/images/designs/typography/silos na silos na ako-01.png",
  "/assets/images/designs/typography/at your best, you are love-01.jpg",
  "/assets/images/designs/typography/be you-01.png",
  "/assets/images/designs/typography/boring reality-01.png",
  "/assets/images/designs/typography/crash-01.png",
  "/assets/images/designs/typography/dissociate-01.jpg",
  "/assets/images/designs/typography/dito ka lang sa tabi ko-01.png",
  "/assets/images/designs/typography/dreamin and lovin-01.jpg",
  "/assets/images/designs/typography/eye for an eye (150 ppi)-01.png",
  "/assets/images/designs/typography/flawed-01.png",
  "/assets/images/designs/typography/good times-01.png",
  "/assets/images/designs/typography/let your thoughts roam-01.jpg",
  "/assets/images/designs/typography/lie and fallacy-01.jpg",
  "/assets/images/designs/typography/love and lust through blinding eyes-01.jpg",
  "/assets/images/designs/typography/mahal naman kita, bakit ayaw mo sakin-01.png",
  "/assets/images/designs/typography/melting me with your smile-01.jpg",
  "/assets/images/designs/typography/music makes me dismissive-01.jpg",
  "/assets/images/designs/typography/nightmare (sixth)-01.jpg",
  "/assets/images/designs/typography/preaching to someone-01.jpg",
  "/assets/images/designs/typography/revolution (love)-01.png",
  "/assets/images/designs/typography/soul tied-01.jpg",
  "/assets/images/designs/typography/sweet as sugar-01.jpg",
  "/assets/images/designs/typography/the past and present me-01.jpg",
  "/assets/images/designs/typography/this i promise you-01.jpg",
  "/assets/images/designs/typography/without art, the earth is just a rock-01.png",
];

export const ArtsPage = () => {
  return (
    <>
      <div
        className="lg:container hidden lg:flex justify-center min-h-screen items-center lg:flex-row flex-col my-8 lg:p-16 md:p-8 animate-hidden gap-4 z-10"
        id="artworks-section"
      >
        <div className="flex flex-col basis-[50%]">
          <h1 className="font-bold md:text-6xl">artworks</h1>
          <Carousel
            className=""
            infiniteLoop={true}
            autoPlay={true}
            showStatus={true}
            showThumbs={false}
            showIndicators={false}
            swipeable={true}
          >
            {artworkImages.map((src, idx) => (
              <div className=" my-8" key={idx}>
                <img src={src} className="bg-transparent object-fit aspect-square"></img>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col basis-[50%]">
          <h1 className="font-bold md:text-6xl">typography</h1>
          <Carousel
            className=""
            infiniteLoop={true}
            autoPlay={true}
            showStatus={true}
            showThumbs={false}
            showIndicators={false}
            swipeable={true}
          >
            {typographyImages.map((src, idx) => (
              <div className=" my-8" key={idx}>
                <img src={src} className="bg-transparent object-fit aspect-square"></img>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
