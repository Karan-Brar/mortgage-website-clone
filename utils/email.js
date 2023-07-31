const sgMail = require("@sendgrid/mail");
import Handlebars from "handlebars";
import fs from "fs";

export const sendContactEmail = (inquiryInfo) => {
  //somehow load below template
  const emailTemplateApplyNow = Handlebars.compile(
    fs.readFileSync(process.cwd() + "/emails/applynow-email.html", "utf-8")
  );

  const emailTemplateContactForm = Handlebars.compile(
    fs.readFileSync(process.cwd() + "/emails/contact-email.html", "utf-8")
  );

  sgMail.setApiKey(process.env.SEND_GRID_KEY);

  const emailSource = inquiryInfo.emailSource;

  const {
    custRequest,
    clientEmail,
    clientPhoneNumber,
    contactMessage,
    data,
    custGoal,
    custDownPayment,
    buyingPlan,
    mortgageEnd,
    fullName,
  } = inquiryInfo;

  if(emailSource === "Contact Form")
  {
    const msg = {
      to: "brarkaran938@gmail.com",
      from: process.env.SEND_GRID_EMAIL, // Change to your verified sender
      subject: "From Website - I want to get in touch",

      html: emailTemplateContactForm({
        fullName,
        clientEmail,
        clientPhoneNumber,
        contactMessage
      }),
    };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent!");
        })
        .catch((error) => {
          console.error(error);
        });
  }
  else
  {
      const msg = {
        to: "brarkaran938@gmail.com",
        from: process.env.SEND_GRID_EMAIL, // Change to your verified sender
        subject: "From Website - Estimate My Rate",

        html: emailTemplateApplyNow({
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
          .catch((error) => {
            console.error(error);
          });
  }
};
