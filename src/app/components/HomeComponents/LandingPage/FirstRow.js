import WorkSansFont from "@/app/fonts/WorkSansFont";

import { EducationSection } from "./LandingPageComponents/EducationSection";
import { LanguageSection } from "./LandingPageComponents/LanguageSection";

export const FirstRow = () => {
  return (
    <div className="flex flex-col basis-[50%]">
      <EducationSection />
      <LanguageSection />
    </div>
  );
};
