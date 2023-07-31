import { sendContactEmail } from "@/utils/email";
import {
  contactFormValidation,
  downPaymentValidation,
  mortgageTermValidation,
} from "@/schemas/validation-schemas";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (req.body.mortgageEnd) {
        await mortgageTermValidation.validate(req.body);
      }
      if (req.body.custDownPayment) {
        console.log("yo");
        await downPaymentValidation.validate(req.body);
      }
      await contactFormValidation.validate(req.body);
      console.log("yo");

      sendContactEmail(req.body);
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      if (error.name === "ValidationError") {
        // Validation error occurred
        res.status(400).json({ message: "An error occurred" });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}
