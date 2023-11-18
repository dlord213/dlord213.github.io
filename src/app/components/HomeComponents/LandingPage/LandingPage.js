import { FirstRow } from "./FirstRow";
import { TopHeader } from "./TopHeader";
import { SecondRow } from "./SecondRow";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen " id="landing-page">
      <TopHeader />
      <div className="flex flex-col lg:flex-row justify-between my-8 lg:p-0 p-4">
        <FirstRow />
        <SecondRow />
      </div>
    </div>
  );
};

export default LandingPage;
