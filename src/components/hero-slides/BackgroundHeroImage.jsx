import IntroImg from "/banner-image-2.jpg";
import ExperienceImg from "/experience.jpg";

function BackgroundHeroImage({ slideIndex }) {
  const backgrounds = [IntroImg, ExperienceImg, IntroImg, ExperienceImg];

  return (
    <div
      key={slideIndex}
      className="mobile-off absolute inset-0 z-0 mr-40 xl:ml-40 sm:ml-0"
      style={{
        backgroundImage: `url(${backgrounds[slideIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    />
  );
}

export default BackgroundHeroImage;
