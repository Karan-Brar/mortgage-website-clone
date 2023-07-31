import { useState } from "react";
import StepNumber from "./StepNumber";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormValidation } from "@/schemas/validation-schemas";
import { PhoneNumberInput } from "@/components/Inputs/phoneNumberInput";

const PersonalInfo = (props) => {
  const componentType = "personalInfo";
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(contactFormValidation),
  });

  const enableAndSet = () => {
    setFilled(true);
    const name = document.getElementById("name").value;
    const phoneNum = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const personalInfo = {
      name,
      phoneNum,
      email,
    };
    setData(personalInfo);
  };
  function sendContactEmail(formData) {
    let temp = data;
    temp += formData;
    props.submitForm({ data: formData, componentType });
  }
  return (
    <div className="option-card">
      <StepNumber number="5" />
      <h2 className="heading-question">Tell Us a Little About Yourself</h2>
      <div className="flex flex-col w-full mx-auto sm:w-3/4">
        {/* Why form? I mean semantically it makes sense but the following buttons types arent set so we are actually "submitting" to no where */}
        <form
          onSubmit={handleSubmit((data) => sendContactEmail(data))}
          className="flex flex-col items-center justify-center"
        >
          <div className="options-input-area !mt-9">
            <label
              htmlFor="fullName"
              className="block font-semibold leading-6 form-label"
            >
              Name
            </label>
            <input
              {...register("fullName")}
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
            />{" "}
            <p className="error-message">{errors.fullName?.message}</p>
          </div>
          <div className="options-input-area">
            <label
              htmlFor="companyPhoneNumber"
              className="block font-semibold leading-6 form-label "
            >
              Phone No
            </label>
            <div className="relative">
              <PhoneNumberInput
                control={control}
                register={register}
                className="form-input"
              />{" "}
              <p className="error-message">
                {errors.clientPhoneNumber?.message}
              </p>
            </div>
          </div>
          <div className="options-input-area">
            <label
              htmlFor="companyEmail"
              className="block font-semibold leading-6 form-label"
            >
              E-Mail
            </label>

            <input
              {...register("clientEmail")}
              type="email"
              name="clientEmail"
              id="clientEmail"
              autoComplete="email"
              className="form-input"
            />
            <p className="error-message">{errors.clientEmail?.message}</p>
          </div>
          <button className="enabled-next-button">Submit</button>
        </form>

        <button className="back-button" onClick={props.setPrev}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
