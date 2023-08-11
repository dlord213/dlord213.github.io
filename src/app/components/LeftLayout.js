import { SocialIcon } from "react-social-icons";

export const LeftLayout = (props) => {
  return (
    <>
      <div className="flex-row 2xl:fixed absolute xl:top-16 xl:left-8 hidden xl:flex duration-500 delay-0 transition-all hover:scale-125">
        <SocialIcon
          url="https://facebook.com/mirimomekiku"
          fgColor="black"
          bgColor="white"
        ></SocialIcon>
      </div>
      <div className="flex-row 2xl:fixed absolute xl:top-32 xl:left-8 hidden xl:flex duration-500 delay-0 transition-all hover:scale-125">
        <SocialIcon
          url="https://github.com/dlord213"
          fgColor="black"
          bgColor="white"
        ></SocialIcon>
      </div>
    </>
  );
};