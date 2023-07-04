import { useState } from "react";
import StepNumber from "./StepNumber";

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
       <button
         onClick={(e) => enableAndSelect(e, "Better Rate")}
         className="choice-button"
       >
         Find a Better Rate
       </button>
       <button
         onClick={(e) => enableAndSelect(e, "Lower Mothly Payment")}
         className="choice-button"
       >
         Lower Your Monthly Payment
       </button>
       <button
         onClick={(e) => enableAndSelect(e, "Pay Mortgage Faster")}
         className="choice-button"
       >
         Pay Your mortgage Faster
       </button>
       <button
         onClick={(e) => enableAndSelect(e, "Takeout Cash")}
         className="choice-button"
       >
         Need to takeout cash from mortgage
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
}

export default YourGoal