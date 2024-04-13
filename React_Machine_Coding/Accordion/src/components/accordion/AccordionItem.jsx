import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick, isMultiple }) => {
  const [accodrionLevel, setAccordionLevel] = useState(false);
  console.log(isMultiple);
  return (
    <div>
      <div
        onClick={() => {
          if (isMultiple) {
            setAccordionLevel(true);
          } else {
            onClick();
          }
        }}
      >
        <h3>{title}</h3>
      </div>
      {isMultiple && accodrionLevel && content}
      {!isMultiple && isOpen && content}
      <hr />
    </div>
  );
};

export default AccordionItem;
