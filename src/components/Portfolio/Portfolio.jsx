import InformationCard from "../Information/InformationCard.jsx";
import PortfolioCarousel from "./PortfolioCarousel.jsx";

function Portfolio() {
  return (
    <div className="pl-8 lg:pl-26 md:mt-40 mt-20 flex flex-col gap-y-10">
      {/* Top section - flex row on lg, flex col on smaller screens */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* InformationCard */}
        <div className="flex-1/3">
          <InformationCard feature="Some of my recent work" title="PORTFOLIO" />
        </div>

        {/* Text and button section */}
        <div className="flex-2/3 flex flex-col gap-0">
          <p className="mt-10">
            Explore our latest projects showcasing diverse design solutions
            across web, mobile, and brand identity.
          </p>
          <button className="mt-4 p-4 bg-red-600 text-white font-semibold hover:bg-amber-700 transition-colors w-fit">
            View All Projects
          </button>
        </div>
      </div>

      {/* Carousel Below */}
      <PortfolioCarousel />
    </div>
  );
}

export default Portfolio;
