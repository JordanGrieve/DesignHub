import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import items from "./Portfolio.Data.js";

// Import your portfolio images
import port1 from "/port-item1.jpg";
import port2 from "/port-item2.jpg";
import port3 from "/port-item3.jpg";
import port4 from "/port-item4.jpg";

const imageMap = {
  "port-item1.jpg": port1,
  "port-item2.jpg": port2,
  "port-item3.jpg": port3,
  "port-item4.jpg": port4,
};

export default function PortfolioCarousel() {
  const carouselItems = items.map((item) => (
    <>
      <img
        key={item.id}
        src={imageMap[item.image]}
        alt={item.title}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <div className="flex flex-row justify-between mt-1 p-4 md:pl-0">
        <p className="font-normal">{item.title}</p>
        <p className="underline cursor-pointer font-bold">{item.link}</p>
      </div>
    </>
  ));

  return (
    <div className="w-screen overflow-hidden">
      <AliceCarousel
        items={carouselItems}
        autoPlay
        infinite
        autoPlayInterval={3000}
        mouseTracking
        disableDotsControls={false}
        disableButtonsControls={true}
        responsive={{ 0: { items: 1 }, 1024: { items: 3 } }}
      />
    </div>
  );
}
