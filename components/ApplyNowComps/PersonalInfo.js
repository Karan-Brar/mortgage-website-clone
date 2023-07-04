import { useState } from "react";
import StepNumber from "./StepNumber";

const PersonalInfo = (props) => {
  const componentType = "personalInfo";
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState("");

  const enableAndSet = () => {
    setFilled(true);
    const name = document.getElementById("name").value;
    const phoneNum = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const personalInfo =
    {
        name: name,
        phoneNum: phoneNum,
        email: email
    }
    setData(personalInfo);
  };

  return (
    <div className="option-card">
      <StepNumber number="5" />
      <h2 className="heading-question">Tell Us a Little About Yourself</h2>
      <div className="sm:w-3/4 w-full mx-auto flex flex-col">
        <form className="flex flex-col justify-center items-center">
          <div className="options-input-area !mt-9">
            <label htmlFor="name" className="options-input-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="options-input-2"
              placeholder="Your Name"
              onInputCapture={() => enableAndSet()}
              required="true"
            />
          </div>
          <div className="options-input-area">
            <label htmlFor="number" className="options-input-label">
              Phone Number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              className="options-input-2"
              placeholder="Your Phone Number"
              onInputCapture={() => enableAndSet()}
              required="true"
            />
          </div>
          <div className="options-input-area">
            <label htmlFor="email" className="options-input-label">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="options-input-2"
              placeholder="Your E-Mail"
              onInputCapture={() => enableAndSet()}
              required="true"
            />
          </div>
        </form>

        {filled === false && (
          <button className="disabled-next-button">Submit</button>
        )}

        {filled === true && (
          <button
            className="enabled-next-button"
            onClick={() => props.submitForm({ data, componentType })}
          >
            Submit
          </button>
        )}

        <button className="back-button" onClick={props.setPrev}>
          Back
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo