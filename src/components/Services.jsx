import ServiceBox from "./Common/ServiceBox.jsx";

function Services() {
  return (
    <>
      <div>
        <ul className="pl-8 sm:p-0 list-inside space-y-10 md:space-y-15 max-w-sm sm:max-w-auto">
          <ServiceBox
            number="01"
            title="UI/UX Design"
            description="We craft intuitive interfaces and seamless user experiences that make your digital products irresistible."
          />

          <ServiceBox
            number="02"
            title="Web Design & Development"
            description="From concept to launch, we design and build responsive websites that convert visitors into loyal customers."
          />
          <ServiceBox
            number="03"
            title="Brand & Visual Identity"
            description="We create compelling visual identities that tell your brand story and resonate with your target audience."
          />
        </ul>
      </div>
    </>
  );
}

export default Services;
