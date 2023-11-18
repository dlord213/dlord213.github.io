import WorkSansFont from "@/app/fonts/WorkSansFont";

export const EducationSection = () => {
  return (
    <div className="flex flex-col mb-4">
      <h1 className={WorkSansFont.className + " font-black text-4xl mb-2"}>
        Education
      </h1>
      <div className="flex flex-col">
        <p className={WorkSansFont.className + " text-xl font-normal"}>
          <b>Misamis Oriental General Comprehensive High School</b>
        </p>
        <p className={WorkSansFont.className + " font-light"}>2016 - 2020</p>
      </div>
      <div className="flex flex-col">
        <p className={WorkSansFont.className + " text-xl font-normal"}>
          <b>Liceo de Cagayan University</b>
        </p>
        <p className={WorkSansFont.className + " font-light"}>TVL - ICT</p>
        <p className={WorkSansFont.className + " font-light "}>2020 - 2022</p>
      </div>
      <div className="flex flex-col">
        <p className={WorkSansFont.className + " text-xl font-normal"}>
          <b> University of Science and Technology of Southern Philippines </b>
        </p>
        <p className={WorkSansFont.className + " font-light"}>
          Bachelor of Science in Information Technology
        </p>
        <p className={WorkSansFont.className + " font-light "}>
          2022 - PRESENT
        </p>
      </div>
    </div>
  );
};
