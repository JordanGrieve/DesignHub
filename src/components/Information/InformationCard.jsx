function InformationCard({ feature, title, date, institute, course }) {
  return (
    <>
      <div className="max-w-100 md:max-w-200">
        <span>{feature}</span>
        <h4 className="text-8xl mt-3 text-white">{title}</h4>
        <p className="font-medium text-lg mt-1">{date}</p>
        <h5 className="text-3xl text-white/90">{course}</h5>
        <p className="mt-1">{institute}</p>
      </div>
    </>
  );
}

export default InformationCard;
