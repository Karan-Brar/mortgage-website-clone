import { useState } from "react";
import StepNumber from "./StepNumber";

const buttonOptions = [
  { submitInfo: "Better Rate", text: "Find a Better Rate" },
  { submitInfo: "Lower Mothly Payment", text: "Lower Your Monthly Payment" },
  { submitInfo: "Pay Mortgage Faster", text: "Pay Off Your Mortgage Faster" },
  { submitInfo: "Takeout Cash", text: "Need Access To Cash" },
]

const YourGoal = (props) => {
  const componentType = "yourGoal";
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState("");

  const enableAndSelect = (e, custGoal) => {
    const buttons = document.getElementsByClassName("choice-button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected-choice-button");
    }

    e.target.classList.add("selected-choice-button");

    setSelected(true);
    setData(custGoal);
  };

  return (
    <div className="option-card">
      <StepNumber number="2" />
      <h2 className="heading-question">What Would be your Goal?</h2>
      <div className="button-list">
        {buttonOptions.map((op, index) => {
          return <button key={index}
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
}

export default YourGoal