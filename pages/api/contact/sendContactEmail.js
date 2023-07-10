import { sendContactEmail } from "@/utils/email";
import { contactFormValidation, downPaymentValidation, mortgageTermValidation } from "@/schemas"
//TODO Remove unused inputs from email
//API Error handling
//Finish email setup
export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			// Validate the request body against the schema
			await contactFormValidation.validate(req.body);
			await downPaymentValidation.validate(req.body);
			await mortgageTermValidation.validate(req.body);

			let contactInfoObject = Object.fromEntries(
				Object.entries(req.body).map(([k, v]) => {
					if (v != null && v !== "") {
						return [k, v];
					}
					return [k, "N/A"];
				})
			);

			// Send email containing the information we received
			sendContactEmail(contactInfoObject);
			res.status(200).json({ message: "success" });
		} catch (error) {
			if (error.name === "ValidationError") {
				// Validation error occurred
				res.status(400).json({ message: error.message });
			} else {
				// Other error occurred
				console.error(error);
				res.status(500).json({ message: "Internal Server Error" });
			}
		}
	}
}