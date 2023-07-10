const sgMail = require("@sendgrid/mail");
import Handlebars from "handlebars";
import fs from "fs";

export const sendContactEmail = inquiryInfo => {
	//somehow load below template
	const emailTemplate = Handlebars.compile(
		fs.readFileSync(process.cwd() + "/emails/contact-email.html", "utf-8")
	);

	sgMail.setApiKey(process.env.SEND_GRID_KEY);

	const {
		custRequest,
		clientEmail,
		clientPhoneNumber,
		data,
		custGoal,
		custDownPayment,
		buyingPlan,
		mortgageEnd,
		fullName,
	} = inquiryInfo;

	const msg = {
		to: "thenry.he@gmail.com", // Change to your recipient
		from: process.env.SEND_GRID_EMAIL, // Change to your verified sender
		subject: "Test Client email",

		html: emailTemplate({
			custRequest,
			clientEmail,
			clientPhoneNumber,
			data,
			custGoal,
			custDownPayment,
			buyingPlan,
			mortgageEnd,
			fullName,
		}),
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent!");
		})
		.catch(error => {
			console.error(error);
		});
};
