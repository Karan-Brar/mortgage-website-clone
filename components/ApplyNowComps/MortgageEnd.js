import { useState } from "react";
import StepNumber from "./StepNumber";

const MortgageEnd = (props) => {
  const componentType = "mortgageEnd";
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState("");

  const enableAndSelect = (e, endDate) => {
    const itemType = e.target.tagName;

    if (itemType.toLowerCase() === "input") {
      endDate = document.getElementById("endDate").value;
    }

    const buttons = document.getElementsByClassName("choice-button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected-choice-button");
    }


    if (itemType.toLowerCase() === "button") {
      e.target.classList.add("selected-choice-button");
    }

    console.log("mortgage")
    console.log(endDate)
    setSelected(true);
    setData(endDate);
  };

  return (
    <div className="option-card">
      <StepNumber number="3" />
      <h2 className="heading-question">
        When Does Your Current Mortgage Term End?
      </h2>
      <div className="button-list">
        <input
          type="text"
          name="endDate"
          id="endDate"
          className="mt-24 options-input"
          placeholder="MM/YYYY"
          onInputCapture={(e) => enableAndSelect(e, e.target.value)}
        // required="true" this doesnt do anything
        />
        <button
          onClick={(e) => enableAndSelect(e, "Not Sure")}
          className="choice-button"
        >
          Not Sure
        </button>

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

export default MortgageEnd;
