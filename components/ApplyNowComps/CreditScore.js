import { useState } from "react";
import StepNumber from "./StepNumber";

const buttonItems = [
  { select: "700+", text: "More than 700" },
  { select: "620-699", text: "Between 620 and 699" },
  { select: "<620", text: "Less Than 620" },
]

const CreditScore = (props) => {
  const componentType = "creditScore";
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState("");

  const enableAndSelect = (e, custCreditScore) => {
    const buttons = document.getElementsByClassName("choice-button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected-choice-button");
    }

    e.target.classList.add("selected-choice-button");

    setSelected(true);
    setData(custCreditScore);
  };

  return (
    <div className="option-card">
      <StepNumber number="4" />
      <h2 className="heading-question">What is your Current Credit Score?</h2>
      <div className="button-list">
        {buttonItems.map(item => {
          return <button
            onClick={(e) => enableAndSelect(e, item.select)}
            className="choice-button"
          >
            {item.text}
          </button>
        })}
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

export default CreditScore;
