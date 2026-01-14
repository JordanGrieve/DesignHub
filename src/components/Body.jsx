import InformationBox from "./Information/InformationBox.jsx";
import Hero from "./Layout/Hero.jsx";
import { useState } from "react";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Contact from "./Contact/Contact.jsx";

function Body() {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleSlideChange(index) {
    setSlideIndex(index);
  }
  return (
    <>
      <div className="flex flex-col xl:ml-88 lg:ml-75">
        <Hero slideIndex={slideIndex} handleSlideChange={handleSlideChange} />
        <InformationBox />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default Body;
