import WorkSansFont from "@/app/fonts/WorkSansFont";


export const AbilitiesSection = () => {
  return (
    <div className="flex flex-col mb-4 lg:items-end">
      <h1 className={WorkSansFont.className + " font-black text-4xl mb-2"}>
        Abilities
      </h1>
      <p className={WorkSansFont.className + " text-xl font-light"}>
        Eager to communicate
      </p>
      <p className={WorkSansFont.className + " text-xl font-light"}>
        Approachable
      </p>
      <p className={WorkSansFont.className + " text-xl font-light"}>
        Responsible
      </p>
      <p className={WorkSansFont.className + " text-xl font-light"}>
        Consistent
      </p>
      <p className={WorkSansFont.className + " text-xl font-light"}>Teamwork</p>
      <p className={WorkSansFont.className + " text-xl font-light"}>
        Organized
      </p>
      <p className={WorkSansFont.className + " text-xl font-light"}>Positive</p>
    </div>
  );
};
