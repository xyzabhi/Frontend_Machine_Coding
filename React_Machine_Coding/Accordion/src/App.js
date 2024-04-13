import React from "react";
import Accordion from "./components/accordion/Accordion";
import { getDummyAccordionData } from "./components/accordion/accordionData";

const App = () => {
  return (
    <div>
      <Accordion title="FAQs" items={getDummyAccordionData()} />
    </div>
  );
};

export default App;
