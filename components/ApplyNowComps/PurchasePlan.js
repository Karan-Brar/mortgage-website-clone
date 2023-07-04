import { useState } from "react";
import StepNumber from "./StepNumber";

const PurchasePlan = (props) => {
  const componentType = "purchasePlan";
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState("");

  const enableAndSelect = (e, custPurchasePlan) => {
    const buttons = document.getElementsByClassName("choice-button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected-choice-button");
    }

    e.target.classList.add("selected-choice-button");

    setSelected(true);
    setData(custPurchasePlan);
  };

  return (
    <div className="option-card">
      <StepNumber number="2" />
      <h2 className="heading-question">
        When Do You Plan on Purchasing a Home?
      </h2>
      <div className="button-list">
        <button
          onClick={(e) => enableAndSelect(e, "Already Signed")}
          className="choice-button"
        >
          Already Signed Purchase Agreement
        </button>
        <button
          onClick={(e) => enableAndSelect(e, "ASAP")}
          className="choice-button"
        >
          As soon as possible
        </button>
        <button
          onClick={(e) => enableAndSelect(e, "3-4 months")}
          className="choice-button"
        >
          Buying Within Next 3-4 months
        </button>
        <button
          onClick={(e) => enableAndSelect(e, "4+ months")}
          className="choice-button"
        >
          Buying in 4+ months
        </button>

        {selected === false && (
          <button className="disabled-next-button">Next</button>
        )}

        {selected === true && (
          <button
            className="enabled-next-button"
            onClick={() => props.setNext({ data, componentType })}
          >
            Next
          </button>
        )}

        <button className="back-button" onClick={props.setPrev}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PurchasePlan;
