import * as yup from "yup";
const phoneRegExp = /^([(]\d{3}[)])[-](\d{3})[-](\d{4})$/;
const mortgageDataRange =
	/^(0?[1-9]|1[0-2])\/(0?\d{1,3}|[1-8]\d{3}|9[0-8]\d{2}|999[0-8])$/;

export const contactFormValidation = yup.object({
	fullName: yup.string().required("Required"),
	clientEmail: yup.string().email("Invalid Email").required("Required"),
	clientPhoneNumber: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.max(14, "Phone number can only be 10 digits")
		.required("Phone number is required"),
	contactMessage: yup
		.string()

		.min(50, "Please provide more information (50 character minimum)"),
});
export const downPaymentValidation = yup.object({
	custDownPayment: yup.string().required("Incorrect amount entered"),
});
export const mortgageTermValidation = yup.object({
	mortgageEnd: yup
		.string()
		.matches(mortgageDataRange, "Incorrect date entered")
		.required("You forgot the date"),
});
