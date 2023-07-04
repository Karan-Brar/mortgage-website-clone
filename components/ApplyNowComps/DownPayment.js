import { useState } from "react";
import StepNumber from "./StepNumber";

const DownPayment = (props) => {
  const componentType = "downPayment";
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState("");

  const enableAndSet = () => {
    setFilled(true);
    const downPaymentInput = document.getElementById("downPayment").value;
    setData(downPaymentInput);
  };

  return (
    <div className="option-card">
      <StepNumber number="3" />
      <h2 className="heading-question">What is Your Planned Down Payment?</h2>
      <div className="sm:w-1/2 w-5/6  mx-auto flex flex-col">
        <div className="mt-24 flex justify-center">
          <span className="font-franklin text-2xl p-3 font-semibold self-center bg-blue-200 text-slate-100">
            $
          </span>
          <input
            type="text"
            name="downPayment"
            id="downPayment"
            className="options-input"
            placeholder="e.g. 200,000"
            onInputCapture={() => enableAndSet()}
            required="true"
          />
        </div>

        {filled === false && (
          <button className="disabled-next-button">Next</button>
        )}

        {filled === true && (
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

export default DownPayment;
