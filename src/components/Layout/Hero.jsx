import CarouselWrapper from "../../components/hero-slides/CarouselWrapper.jsx";
import BackgroundHeroImage from "../../components/hero-slides/BackgroundHeroImage.jsx";
import { useState } from "react";
import Services from "../Services.jsx";
import MainCTA from "../Common/MainCTA.jsx";
import BoxButton from "../Common/BoxButton.jsx";

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState(null);

  function handleSlideChange(index) {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* LEFT: 2/3 */}
      <div className="relative lg:flex-2 w-2xl flex-3 h-full">
        {/* background layer */}
        <BackgroundHeroImage slideIndex={slideIndex} />

        {/* content layer */}
        {/* <Intro />
        <Intro /> */}
        <div>
          <CarouselWrapper
            onSlideChange={setSlideIndex}
            onApiReady={setEmblaApi}
          />
        </div>

        <div className="flex flex-row lg:gap-15 gap-8 text-sm pt-20 lg:pl-26 z-10 relative p-8">
          <div className="flex-col">
            {slideIndex === 0 ? (
              <>
                <button
                  className="text-left cursor-crosshair z-10 text-[#ff534a]"
                  onClick={() => handleSlideChange(0)}
                  type="button"
                >
                  01 <br /> INTRO
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-left cursor-crosshair z-10"
                  onClick={() => handleSlideChange(0)}
                  type="button"
                >
                  01 <br /> INTRO
                </button>
              </>
            )}
          </div>
          <div className="flex-col">
            {slideIndex === 1 ? (
              <>
                <button
                  className="text-left cursor-crosshair z-10 text-[#ff534a]"
                  onClick={() => handleSlideChange(1)}
                  type="button"
                >
                  02 <br /> EXPERIENCE
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-left cursor-crosshair z-10"
                  onClick={() => handleSlideChange(1)}
                  type="button"
                >
                  02 <br /> EXPERIENCE
                </button>
              </>
            )}
          </div>
          <div className="flex-col">
            {slideIndex === 2 ? (
              <>
                <button
                  className="text-left cursor-crosshair z-10 text-[#ff534a]"
                  onClick={() => handleSlideChange(2)}
                  type="button"
                >
                  03 <br /> EXPERTISE
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-left cursor-crosshair z-10"
                  onClick={() => handleSlideChange(2)}
                  type="button"
                >
                  03 <br /> EXPERTISE
                </button>
              </>
            )}
          </div>
          <div className="flex-col">
            {slideIndex === 3 ? (
              <>
                <button
                  className="text-left cursor-crosshair z-10 text-[#ff534a]"
                  onClick={() => handleSlideChange(3)}
                  type="button"
                >
                  04 <br /> WHY ME?
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-left cursor-crosshair z-10"
                  onClick={() => handleSlideChange(3)}
                  type="button"
                >
                  04 <br /> WHY ME?
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:flex-2 flex-1 pt-20">
        <BoxButton />
        <Services />
        <MainCTA />
      </div>
    </div>
  );
}

export default Hero;
