const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;
import Handlebars from "handlebars";
import fs from "fs";

export const sendContactEmail = (inquiryInfo) => {
  // Configure API key authorization: api-key
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.MAIL_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();


  //somehow load below template
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

  if (emailSource === "Contact Form") {
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail = {
      to: [
        {
          email: process.env.TO_EMAIL,
          name: "Armaan Brar",
        },
      ],
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "Save On Rates",
      },
      subject: "From Website - I want to get in touch",
      htmlContent: emailTemplateContactForm({
        fullName,
        clientEmail,
        clientPhoneNumber,
        contactMessage,
      }),
      headers: {
        "X-Mailin-custom": `api-key:${process.env.MAIL_API_KEY}|content-type:application/json|accept:application/json`,
      },
    };

    apiInstance
      .sendTransacEmail(sendSmtpEmail)
      .then(() => {
        console.log("Email sent!");
      })
      .catch((error) => {
        console.error(error);
        console.log(process.env.TO_EMAIL);
        console.log(process.env.MAIL_API_KEY);
        console.log(process.env.SENDER_EMAIL)
      });
  } else {
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail = {
      to: [
        {
          email: process.env.TO_EMAIL,
          name: "Armaan Brar",
        },
      ],
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "Save On Rates",
      }, // Change to your verified sender
      subject: "From Website - Estimate My Rate",

      htmlContent: emailTemplateApplyNow({
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
      headers: {
        "X-Mailin-custom": `api-key:${process.env.MAIL_API_KEY}|content-type:application/json|accept:application/json`,
      },
    };

    apiInstance
      .sendTransacEmail(sendSmtpEmail)
      .then(() => {
        console.log("Email sent!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
