import { useState } from "react";
import StepNumber from "./StepNumber";
import { downPaymentValidation } from "@/schemas/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const DownPayment = (props) => {
  const componentType = "downPayment";
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(downPaymentValidation),
  });

  async function setDataStuff(formData) {
    props.setNext({ data: formData.custDownPayment, componentType });
  }
  const handleInputChange = (e) => {
    reset();
    trigger(e.target.name);
  };
  return (
    <div className="option-card">
      <StepNumber number="3" />
      <h2 className="heading-question">What is Your Planned Down Payment?</h2>
      <form
        onSubmit={handleSubmit((data) => setDataStuff(data))}
        className="flex flex-col w-5/6 mx-auto sm:w-1/2"
      >
        <div className="flex flex-col items-center justify-center mt-24">
          <div className="flex ">
            <span className="p-3 text-3xl font-semibold bg-blue-200 b-2 font-franklin text-slate-100">
              $
            </span>
            <InputMask
              mask="9999999999"
              maskChar=""
              {...register("custDownPayment")}
              name="custDownPayment"
              id="custDownPayment"
              className="options-input"
              placeholder="e.g. 20500"
              onChange={handleInputChange}
            />
          </div>

          <p className="error-message">{errors.custDownPayment?.message}</p>
        </div>

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

export default DownPayment;
