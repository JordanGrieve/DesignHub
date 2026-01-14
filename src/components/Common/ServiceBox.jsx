import React from "react";

function ServiceBox({ number, title, description }) {
  return (
    <li className="text-md italic">
      {number}
      <h4 className="mb-3 mt-2 font-medium text-white text-4xl not-italic">
        {title}
      </h4>
      <p className="text-lg not-italic font-light">{description}</p>
    </li>
  );
}

export default ServiceBox;
