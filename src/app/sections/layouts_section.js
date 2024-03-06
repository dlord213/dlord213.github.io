import RenderProjectCard from "../components/project_card";
export default function LayoutsSection() {
  return (
    <>
      <h1 className="text-2xl font-bold">Layouts</h1>
      <div className="flex flex-wrap flex-row gap-4">
        <RenderProjectCard
          title="E-Commerce Layout 1"
          devices="HTML/CSS/JS"
          description="A mobile app that tracks the deals on Nintendo eShop."
          imageSrc="./assets/images/projects/switchdeals/1.png"
          link="/website-layouts/e-commerce-1/"
        />
        <RenderProjectCard
          title="E-Commerce Layout 2"
          devices="HTML/CSS/JS"
          description="A mobile app that tracks the deals on Nintendo eShop."
          imageSrc="./assets/images/projects/switchdeals/1.png"
          link="/website-layouts/e-commerce-1/"
        />
      </div>
    </>
  );
}
