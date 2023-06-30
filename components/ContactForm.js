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
        <div className="items-center px-20 bg-blue-100 font-franklin py-7 hover:bottom-0 sm:py-8">
            <div className="flex items-center justify-center ">
                <div>
                    <Link href="#">
                        <Image />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center ">
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