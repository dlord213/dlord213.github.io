import { AbilitiesSection } from "./LandingPageComponents/AbilitiesSection";
import { ContactSection } from "./LandingPageComponents/ContactSection";
import { SkillsSection } from "./LandingPageComponents/SkillsSection";

export const SecondRow = () => {
  return (
    <div className="flex flex-col basis-[50%]">
      <SkillsSection />
      <AbilitiesSection />
      <ContactSection />
    </div>
  );
};
