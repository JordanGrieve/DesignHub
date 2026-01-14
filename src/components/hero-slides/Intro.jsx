function Intro({ role, title, description, ctaText }) {
  return (
    <div className="pt-20 lg:pl-26 md:pl-8 sm:pl-8 pl-8 w-162.5">
      <span>{role}</span>
      <h2 className="text-9xl lg:text-[15rem] max-w-90 lg:max-w-280 md:text-9xl sm:text-9xl md:max-w-75 leading-[0.90] text-orange-50 mb-10 mt-6">
        {title}
      </h2>
      <p className="text-lg mb-15 lg:w-125 xl:w-200 md:w-100 w-90">
        {description}
      </p>
      <button className="underline text-2xl text-white font-extrabold">
        {ctaText}
      </button>
    </div>
  );
}

export default Intro;
