import React, { useState } from "react";
import AccordionItem from "./AccordionItem"; // Assuming you have a separate AccordionItem component

const Accordion = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isMultiple, setIsMultiple] = useState(false);

  return (
    <div>
      <span>
        isMultiple
        <input
          type="checkbox"
          onClick={(e) => {
            setIsMultiple(e.target.checked);
          }}
        />
      </span>
      <h2>{title} </h2>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          isMultiple={isMultiple}
          content={item.description}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
