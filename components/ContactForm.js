import { useForm } from "react-hook-form";
import { contactFormValidation } from "@/schemas/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { PhoneNumberInput } from "@/components/Inputs/phoneNumberInput";

const ContactForm = () => {
  const [contactEmailStatus, setContactEmailStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(contactFormValidation),
  });

  async function sendContactEmail(data) {
    let response = await fetch("/api/contact/sendContactEmail", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.status == "200") {
      setContactEmailStatus("Email sent");
    } else {
      setContactEmailStatus("An error occured, please try again!");
    }
  }
  return (
    <div className="sm:pt-10">
      <div className="flex items-center justify-center py-8">
        <h1 className="mb-2 font-bold tracking-tight heading">
          Shoot us a message
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(data => sendContactEmail(data))}
        className="w-5/6 mx-auto mt-5 lg:w-2/5 sm:mt-12"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mb-2 sm:col-span-2">
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
            />

            <p>{errors.fullName?.message}</p>
          </div>
          <div className="mb-2 sm:col-span-2">
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
              />
            </div>

            <p>{errors.clientPhoneNumber?.message}</p>
          </div>
          <div className="mb-2 sm:col-span-2">
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

            <p>{errors.clientEmail?.message}</p>
          </div>

          <div className="mb-2 sm:col-span-2">
            <label
              htmlFor="contactMessage"
              className="block font-semibold leading-6 form-label "
            >
              What are you looking for?
            </label>
            <div className="mt-3">
              <textarea
                {...register("contactMessage")}
                name="contactMessage"
                id="contactMessage"
                rows={4}
                className="w-full p-2 bg-transparent border border-black rounded-md outline-none"
                defaultValue={""}
              />
            </div>
            <p>{errors.contactMessage?.message}</p>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-4/6 mx-auto rounded-md bg-blue-200 text-slate-50 px-3.5 py-2.5 text-center font-semibold shadow-sm hover:ring-4 hover:ring-lime-100 hover:ring-opacity-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-2xl"
          >
            Message Us
          </button>
        </div>
        <div>{contactEmailStatus}</div>
      </form>
    </div>
  );
};

export default ContactForm;
