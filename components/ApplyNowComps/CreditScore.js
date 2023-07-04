import { useState } from "react";
import StepNumber from "./StepNumber";

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
          <button
            onClick={(e) => enableAndSelect(e, "700+")}
            className="choice-button"
          >
            More than 700
          </button>
          <button
            onClick={(e) => enableAndSelect(e, "620-699")}
            className="choice-button"
          >
            Between 620 and 699
          </button>
          <button
            onClick={(e) => enableAndSelect(e, "<620")}
            className="choice-button"
          >
            Less Than 620
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

export default CreditScore;
