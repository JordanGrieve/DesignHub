import React from "react";
import AccordionTransition from "./Accordion.jsx";
import InformationCard from "../Information/InformationCard.jsx";
import ContactForm from "./ContactForm.jsx";

function Contact() {
  return (
    <div className="pl-8 lg:pl-26 md:mt-40 mt-20 pb-20">
      <InformationCard
        feature="Let's work together"
        title="GET IN TOUCH"
        institute="hello@designhub.com"
      />
      <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row gap-8 mt-10">
        <AccordionTransition className="max-w-xl flex-1/2" />
        <ContactForm className="flex-1/2" />
      </div>
    </div>
  );
}

export default Contact;
