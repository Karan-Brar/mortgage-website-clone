import { sendContactEmail } from "@/utils/email";
import { contactFormValidation } from "@/schemas/validation-schemas";
export default async function handler(req, res) {

	if (req.method === "POST") {
		try {
			//check if input is valid
			//const inputIsValid = contactFormValidation.isValid(req.body);

			if (true) {
				//Destructure data to only get inputs we need
				const { custRequest, email, phoneNum, data, custGoal, custDownPayment, buyingPlan, mortgageEnd, name } = req.body;

				//Create an object to clarify what we are sending
				const contactInfoObject = { custRequest, email, phoneNum, data, custGoal, custDownPayment, buyingPlan, mortgageEnd, name };

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
