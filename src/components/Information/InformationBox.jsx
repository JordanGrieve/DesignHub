import React from "react";
import InformationCard from "./InformationCard";

function InformationBox() {
  return (
    <div className="pl-8 lg:pl-26 md:mt-40 mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 xl:w-2/3">
      <InformationCard
        feature="Service"
        title="MOBILE APP DESIGN"
        date="iOS & Android"
        institute="Platform Expertise"
        course="End-to-end mobile design and prototyping"
      />
      <InformationCard
        feature="Service"
        title="WEB DESIGN"
        date="Responsive Design"
        institute="Desktop & Mobile"
        course="Modern, accessible websites that convert"
      />
      <InformationCard
        feature="Service"
        title="UX RESEARCH"
        date="User Testing"
        institute="Data-Driven Design"
        course="User interviews, testing, and validation"
      />
      <InformationCard
        feature="Service"
        title="DESIGN SYSTEMS"
        date="Scalable Design"
        institute="Component Libraries"
        course="Building consistent and maintainable designs"
      />
    </div>
  );
}

export default InformationBox;
