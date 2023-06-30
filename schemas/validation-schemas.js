import * as yup from "yup";
const phoneRegExp = /^([(]\d{3}[)])[-](\d{3})[-](\d{4})$/;

export const contactFormValidation = yup.object({
	fullName: yup.string().required("Required"),
	companyName: yup.string().required("Required"),
	companyEmail: yup.string().email("Invalid Email").required("Required"),
	companyPhoneNumber: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.max(14, "Phone number can only be 10 digits")
		.required("Phone number is required"),
	contactMessage: yup
		.string()

		.min(50, "Please provide more information (50 character minimum)"),
});
