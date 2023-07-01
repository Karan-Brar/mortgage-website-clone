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
        <div className="items-center bg-blue-100 font-franklin py-7 hover:bottom-0 sm:py-8">

            <div className="flex flex-col items-center justify-center w-full pt-5 bg-white">
                <h1 className="mb-2 text-2xl font-bold tracking-tight ">Contact Information</h1>
                <div className="flex items-center justify-between ">

                    <Link className="m-5" href="#">
                        <svg width="100" height="100" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7713 53.9886C49.6026 53.5249 49.4424 53.059 49.2908 52.591C48.6653 50.6608 46.5832 49.5245 44.6833 50.2369C42.0683 51.2175 39.2788 49.2844 39.2788 46.4916L39.2788 46.2636L39.2788 34.2636L39.2788 34.0356C39.2788 31.2428 42.0683 29.3097 44.6833 30.2903C46.4839 30.9655 48.4543 29.8671 49.0042 28.0244C49.2365 27.2461 49.4922 26.4729 49.7713 25.706C50.3284 24.1754 50.9729 22.6859 51.6994 21.2438C52.8973 18.8661 51.8646 15.8395 49.3326 15.0168L42.6597 12.8487C41.5612 12.4918 40.3481 12.8018 39.6056 13.6866C33.3573 21.1331 29.9324 30.5429 29.9324 40.2636C29.9324 49.9843 33.3573 59.3941 39.6056 66.8406C40.3486 67.7261 41.5626 68.0363 42.6619 67.6791L49.6969 65.3933C52.2607 64.5602 53.2813 61.4732 52.0269 59.0871C51.1653 57.4481 50.4108 55.7454 49.7713 53.9886Z" fill="#2F80ED" />
                        </svg>
                    </Link>

                    <Link className="m-5" href="#">
                        <Image priority quality={30} width={80} height={80} src="/assets/icon/instagram.png" />
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
            <digv className="flex items-center justify-center pt-4 ">
                <h1 className="mb-2 text-2xl font-bold tracking-tight ">
                    Shoot us a message
                </h1>
            </digv>
            <form
                onSubmit={handleSubmit(data => sendContactEmail(data))}
                className="max-w-xl mx-auto mt-5 sm:mt-12"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="mb-2 sm:col-span-2">
                        <label
                            htmlFor="fullName"
                            className="block form-label font-semibold leading-6"
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
                            className="block form-label font-semibold leading-6 "
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
                            className="block form-label font-semibold leading-6 "
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
                            className="block form-label font-semibold leading-6 "
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