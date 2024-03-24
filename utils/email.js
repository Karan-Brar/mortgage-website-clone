import Handlebars from "handlebars";
import fs from "fs";
const sgMail = require("@sendgrid/mail");

export const sendContactEmail = async (inquiryInfo) => {
  sgMail.setApiKey(process.env.MAIL_API_KEY);

  // Load email templates
  const emailTemplateApplyNow = Handlebars.compile(
    fs.readFileSync(process.cwd() + "/emails/applynow-email.html", "utf-8")
  );

  const emailTemplateContactForm = Handlebars.compile(
    fs.readFileSync(process.cwd() + "/emails/contact-email.html", "utf-8")
  );

  const emailSource = inquiryInfo.emailSource;

  const {
    custRequest,
    clientEmail,
    clientPhoneNumber,
    contactMessage,
    data,
    custCreditScore,
    custGoal,
    custDownPayment,
    buyingPlan,
    mortgageEnd,
    fullName,
  } = inquiryInfo;

  try {
    if (emailSource === "Contact Form") {
      const msg = {
        to: process.env.TO_EMAIL, // Change to your recipient
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: "From Website - I want to get in touch",
        text: "Client Inquiry from the website",
        html: emailTemplateContactForm({
          fullName,
          clientEmail,
          clientPhoneNumber,
          contactMessage,
        }),
      };

      // const sended = await sgMail.send(msg);

      await new Promise((resolve, reject) => {
        // send mail
        sgMail.send(msg, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });

      return { success: true };
    } else {
      const msg = {
        to: process.env.TO_EMAIL, // Change to your recipient
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: "From Website - I want to get in touch",
        text: "Client Inquiry from the website",
        html: emailTemplateApplyNow({
          custRequest,
          clientEmail,
          clientPhoneNumber,
          data,
          custGoal,
          custDownPayment,
          buyingPlan,
          mortgageEnd,
          custCreditScore,
          fullName,
        }),
      };

      const sended = await sgMail.send(msg);
      console.log("sended: ", sended);

      return { success: true };
    }
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
