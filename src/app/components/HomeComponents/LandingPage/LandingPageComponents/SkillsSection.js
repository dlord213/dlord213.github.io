import WorkSansFont from "@/app/fonts/WorkSansFont";

export const SkillsSection = () => {
  return (
    <div className="flex flex-col mb-4 items-end">
      <h1 className={WorkSansFont.className + " font-black text-4xl mb-2"}>
        Skills / Applications
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 my-4 2xl:w-1/3 lg:w-1/2 gap-8 items-center">
        <img src="/assets/images/logos/blender.png"></img>
        <img src="/assets/images/logos/photoshop.png"></img>
        <img src="/assets/images/logos/ai.png"></img>
        <img src="/assets/images/logos/pr.png"></img>
        <img src="/assets/images/logos/excel.png"></img>
        <img src="/assets/images/logos/android_studio.png"></img>
        <img src="/assets/images/logos/vscode.png"></img>
        <img
          src="/assets/images/logos/figma.png"
          className="h-[45px] object-contain"
        ></img>
      </div>
    </div>
  );
};
