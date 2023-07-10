import { sendContactEmail } from "@/utils/email";

//TODO Remove unused inputs from email
//API Error handling
//Finish email setup
export default async function handler(req, res) {

	if (req.method === "POST") {
		try {
			//check if input is valid
			//const inputIsValid = contactFormValidation.isValid(req.body);
			//Destructure data to only get inputs we need

			let contactInfoObject = Object.fromEntries(
				Object.entries(req.body).map(([k, v]) => {
					if (v != null && v !== "") {
						return [k, v];
					}
					return [k, 'N\\A']; // Return an empty string for entries that don't meet the condition
				})
			);

			//Create an object to clarify what we are sending


			//Send email containing the information we received 
			sendContactEmail(contactInfoObject);
			res.status(200).json({ message: "success" });

		} catch (e) {
			console.log(e);
			res.status(500).json({
				message: "Other error",
			});
		}
	}
};
