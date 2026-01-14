import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Intro from "./Intro";
import ClassNames from "embla-carousel-class-names";
import "./CarouselWrapper.css";

export function EmblaCarousel({ onSlideChange, onApiReady }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    ClassNames(),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    // Pass API to parent
    onApiReady(emblaApi);

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      onSlideChange(index);
    };

    emblaApi.on("select", onSelect);
  }, [emblaApi, onSlideChange, onApiReady]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Intro
            role="UI/UX Design Studio"
            title="BEAUTIFUL DESIGN"
            description="We transform your vision into stunning digital experiences that captivate users and elevate your brand in the market."
            ctaText="Let's Create Together."
          />
        </div>
        <div className="embla__slide">
          <Intro
            role="Digital Experience Design"
            title="USER-CENTERED"
            description="Every pixel purposefully crafted. We design interfaces that are not just beautiful, but intuitive and conversion-focused."
            ctaText="Start Your Project."
          />
        </div>
        <div className="embla__slide">
          <Intro
            role="Brand & Web Design"
            title="STRATEGIC DESIGN"
            description="We combine cutting-edge design with strategic thinking to create digital products that solve problems and achieve results."
            ctaText="Let's Talk Strategy."
          />
        </div>
        <div className="embla__slide">
          <Intro
            role="Innovation Through Design"
            title="NEXT-LEVEL UX"
            description="From wireframes to interactive prototypes, we guide your project through every stage of the design process."
            ctaText="Explore Our Work."
          />
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
