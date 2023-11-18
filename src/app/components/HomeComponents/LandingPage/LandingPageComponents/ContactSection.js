import Link from "next/link";
import WorkSansFont from "@/app/fonts/WorkSansFont";

export const ContactSection = () => {
  return (
    <div className="flex flex-col lg:text-right">
      <h1 className={WorkSansFont.className + " font-black text-4xl mb-2"}>
        Contact
      </h1>
      <div className="flex flex-col">
        <p className={WorkSansFont.className + " text-xl font-normal"}>
          <b>E-mail</b>
        </p>
        <p className={WorkSansFont.className + " font-light"}>
          viernes.jhonlloydd@gmail.com
        </p>
      </div>
      <div className="flex flex-col">
        <p className={WorkSansFont.className + " text-xl font-normal"}>
          <b>Instagram</b>
        </p>
        <p
          className={
            WorkSansFont.className + " font-light hover:text-[#BE3C4D]"
          }
        >
          <Link href="https://www.instagram.com/tsukeh2/">Link</Link>
        </p>
      </div>
      <div className="flex flex-col">
        <p className={WorkSansFont.className + " text-xl font-normal"}>
          <b>GitHub</b>
        </p>
        <p
          className={
            WorkSansFont.className + " font-light hover:text-[#BE3C4D]"
          }
        >
          <Link href="https://github.com/dlord213">Link</Link>
        </p>
      </div>
    </div>
  );
};
