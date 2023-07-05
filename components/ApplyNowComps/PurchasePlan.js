import { useState } from "react";
import StepNumber from "./StepNumber";


const buttonOptions = [
  { submitInfo: "Already Signed", text: "Already Signed Purchase Agreement" },
  { submitInfo: "ASAP", text: "As soon as possible" },
  { submitInfo: "3-4 months", text: "Buying Within Next 3-4 months" },
  { submitInfo: "4+ months", text: "Buying in 4+ months" },
]

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
        {buttonOptions.map((op) => {
          return <button
            onClick={(e) => enableAndSelect(e, op.submitInfo)}
            className="choice-button"
          >
            {op.text}
          </button>
        })}

        {selected === true ?
          <button
            className="enabled-next-button"
            onClick={() => props.setNext({ data, componentType })}
          >
            Next
          </button>
          :
          <button className="disabled-next-button">Next</button>
        }

        <button className="back-button" onClick={props.setPrev}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PurchasePlan;
