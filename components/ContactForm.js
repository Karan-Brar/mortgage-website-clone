import { useForm } from "react-hook-form";
import { contactFormValidation } from "@/schemas/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { PhoneNumberInput } from "@/components/Inputs/phoneNumberInput";
import Image from "next/image"
import Link from "next/link";
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
      <div className="items-center font-franklin mt-5 hover:bottom-0 sm:mt-5">
        <div className="flex flex-col items-center justify-center w-full bg-white mb-5">
          <h1 className="mb-4 font-bold tracking-tight heading">
            Contact Information
          </h1>
          <div className="flex items-center justify-between sm:w-2/5">
            <div className="m-5 hover:cursor-pointer">
              <Image
                priority
                quality={30}
                width={80}
                height={80}
                src="/assets/icon/phone2.png"
              />
            </div>

            <Link
              className="m-5"
              href="https://instagram.com/mortgagesbyarmaan?igshid=MTIzZWMxMTBkOA=="
            >
              <Image
                priority
                quality={30}
                width={80}
                height={80}
                src="/assets/icon/instagram.png"
              />
            </Link>

            <Link
              className="m-5"
              href="https://www.facebook.com/armaanpreetbrarmortgage?mibextid=LQQJ4d"
            >
              <Image
                priority
                quality={30}
                width={80}
                height={80}
                src="/assets/icon/facebook.png"
              />
            </Link>

                    <Link className="m-5" href="#">
                        <Image priority quality={30} width={80} height={80} src="/assets/icon/facebook.png" />
                    </Link>

                    <Link className="m-5" href="#">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 22C14.6804 22 13.51 22.639 12.7815 23.6244C13.0832 23.7236 13.3709 23.8822 13.6271 24.1017L36.4207 43.6392C38.4804 45.4046 41.5197 45.4046 43.5794 43.6392L66.3731 24.1017C66.6292 23.8822 66.9169 23.7236 67.2185 23.6245C66.49 22.639 65.3196 22 64 22H16Z" fill="#000" />
                            <path d="M68 29.2926L46.8334 47.4354C42.9012 50.8059 37.0989 50.8059 33.1668 47.4354L12 29.2925V54C12 56.2091 13.7909 58 16 58H64C66.2091 58 68 56.2091 68 54V29.2926Z" fill="#C2CCDE" />
                        </svg>
                    </Link>

                </div>

            </div>
            <div className="flex items-center justify-center pt-4 ">
                <h1 className="mb-2 text-2xl font-bold tracking-tight ">
                    Shoot us a message
                </h1>
            </div>
            <form
                onSubmit={handleSubmit(data => sendContactEmail(data))}
                className="max-w-xl mx-auto mt-5 sm:mt-12"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="mb-2 sm:col-span-2">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-semibold leading-6"
                        >
                            Name
                        </label>

                        <input
                            {...register("fullName")}
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="w-full bg-transparent border border-b-black border-t-transparent border-r-transparent border-l-transparent"
                        />

                        <p>{errors.fullName?.message}</p>
                    </div>
                    <div className="mb-2 sm:col-span-2">
                        <label
                            htmlFor="companyPhoneNumber"
                            className="block text-sm font-semibold leading-6 "
                        >
                            Phone No
                        </label>
                        <div className="relative">
                            <PhoneNumberInput control={control} register={register} />
                        </div>

                        <p>{errors.companyPhoneNumber?.message}</p>
                    </div>
                    <div className="mb-2 sm:col-span-2">
                        <label
                            htmlFor="companyEmail"
                            className="block text-sm font-semibold leading-6 "
                        >
                            E-Mail
                        </label>

                        <input
                            {...register("companyEmail")}
                            type="email"
                            name="companyEmail"
                            id="companyEmail"
                            autoComplete="email"
                            className="w-full bg-transparent border border-b-black border-t-transparent border-r-transparent border-l-transparent"
                        />

                        <p>{errors.companyEmail?.message}</p>
                    </div>

                    <div className="mb-2 sm:col-span-2">
                        <label
                            htmlFor="contactMessage"
                            className="block text-sm font-semibold leading-6 "
                        >
                            What are you looking for?
                        </label>
                        <div className="mt-3">
                            <textarea
                                {...register("contactMessage")}
                                name="contactMessage"
                                id="contactMessage"
                                rows={4}
                                className="w-full bg-transparent border border-black rounded-md "
                                defaultValue={""}
                            />
                        </div>
                        <p>{errors.contactMessage?.message}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-4/6 mx-auto rounded-md bg-blue-200 text-slate-50 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:ring-4 hover:ring-lime-100 hover:ring-opacity-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Message Us
                    </button>
                </div>
                <div>{contactEmailStatus}</div>
            </form>
        </div>
    );
}

export default ContactForm