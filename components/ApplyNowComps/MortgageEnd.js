import StepNumber from "./StepNumber";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { mortgageTermValidation } from "@/schemas/validation-schemas";

const MortgageEnd = props => {
  const componentType = "mortgageEnd";
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mortgageTermValidation),
  });
  async function setDataStuff(formData) {
    props.setNext({ data: formData.mortgageEnd, componentType });
  }
  const handleInputChange = e => {
    reset();
    trigger(e.target.name);
  };

  return (
    <div className="option-card">
      <StepNumber number="3" />
      <h2 className="heading-question">
        When Does Your Current Mortgage Term End?
      </h2>
      <form
        onSubmit={handleSubmit(data => setDataStuff(data))}
        className="button-list"
      >
        <div className="flex flex-col">
          <InputMask
            mask="99/9999"
            maskChar=""
            {...register("mortgageEnd")}
            name="mortgageEnd"
            id="mortgageEnd"
            className="mt-24 options-input"
            placeholder="MM/YYYY"
            onChange={handleInputChange}
          />
          <p>{errors.mortgageEnd?.message}</p>
        </div>

        <button
          onClick={() => setDataStuff("N/A")}
          className="choice-button"
        >
          Not Sure
        </button>
        <button type="submit" className="enabled-next-button">
          Next
        </button>

        <button className="back-button" onClick={props.setPrev}>
          Back
        </button>
      </form>
    </div>
  );
};

export default MortgageEnd;
