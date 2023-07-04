import { useState } from 'react';
import StepNumber from "./StepNumber";

const MainOptions = (props) => {
  const componentType = "custRequest"  
  const[selected, setSelected] = useState(false);
  const[data, setData] = useState("")

  const enableAndSelect = (e, requestTypeName) => {
    const buttons = document.getElementsByClassName("choice-button")

    for(let i=0; i < buttons.length; i++)
    {
        buttons[i].classList.remove("selected-choice-button");
    }

    e.target.classList.add("selected-choice-button");
    setSelected(true)
    setData(requestTypeName)
  }


  return (
    <div className="option-card">
      <StepNumber number="1" />
      <h2 className="heading-question">What Are You Looking For?</h2>
      <div className="button-list">
        <button
          onClick={(e) => enableAndSelect(e, "Purchase")}
          className="choice-button"
        >
          Purchase
        </button>
        <button
          onClick={(e) => enableAndSelect(e, "Refinance/Renew")}
          className="choice-button"
        >
          Refinance or Renew your current mortgage
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
      </div>
    </div>
  );
}

export default MainOptions