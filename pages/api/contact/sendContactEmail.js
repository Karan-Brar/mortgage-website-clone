import { sendContactEmail } from "@/utils/email";
import { contactFormValidation } from "@/schemas/validation-schemas";
export default async function handler(req, res) {

	if (req.method === "POST") {
		try {
			//check if input is valid
			const inputIsValid = contactFormValidation.isValid(req.body);

			if (inputIsValid) {
				//Destructure data to only get inputs we need
				const { fullName, companyName, companyEmail, companyPhoneNumber, contactMessage } = req.body;

				//Create an object to clarify what we are sending
				const contactInfoObject = { fullName, companyName, companyEmail, companyPhoneNumber, contactMessage };

				//Send email containing the information we received 
				sendContactEmail(contactInfoObject);
				res.status(200).json({ message: "success" });
			} else {
				res.status(400).json({ message: "Validation error" });
			}


		} catch (e) {
			console.log(e);
			res.status(500).json({
				message: "Other error",
			});
		}
	}
};
