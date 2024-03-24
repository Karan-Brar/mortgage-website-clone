// import Handlebars from "handlebars";
// import fs from "fs";

// export const sendContactEmail = async (inquiryInfo) => {

//   const mailjet = require("node-mailjet").apiConnect(
//     process.env.MAIL_API_KEY,
//     process.env.SECRET_KEY
//   );

//   //somehow load below template
//   const emailTemplateApplyNow = Handlebars.compile(
//     fs.readFileSync(process.cwd() + "/emails/applynow-email.html", "utf-8")
//   );

//   const emailTemplateContactForm = Handlebars.compile(
//     fs.readFileSync(process.cwd() + "/emails/contact-email.html", "utf-8")
//   );

//   const emailSource = inquiryInfo.emailSource;

//   const {
//     custRequest,
//     clientEmail,
//     clientPhoneNumber,
//     contactMessage,
//     data,
//     custCreditScore,
//     custGoal,
//     custDownPayment,
//     buyingPlan,
//     mortgageEnd,
//     fullName,
//   } = inquiryInfo;

//   if (emailSource === "Contact Form") {
//     const request = mailjet.post("send", { version: "v3.1" }).request({
//       Messages: [
//         {
//           From: {
//             Email: process.env.SENDER_EMAIL,
//             Name: "Save on Rates Website",
//           },
//           To: [
//             {
//               Email: process.env.TO_EMAIL,
//               Name: "Armaan Brar",
//             },
//           ],
//           Subject: "From Website - I want to get in touch",
//           TextPart:
//             "",
//           HTMLPart: emailTemplateContactForm({
//             fullName,
//             clientEmail,
//             clientPhoneNumber,
//             contactMessage,
//           }),
//         },
//       ],
//     });
//     request
//       .then((result) => {
//         console.log(result.body);
//       })
//       .catch((err) => {
//         console.log(err.statusCode);
//       });
//   }
//   else {
//         const request = mailjet.post("send", { version: "v3.1" }).request({
//           Messages: [
//             {
//               From: {
//                 Email: process.env.SENDER_EMAIL,
//                 Name: "Save on Rates Website",
//               },
//               To: [
//                 {
//                   Email: process.env.TO_EMAIL,
//                   Name: "Armaan Brar",
//                 },
//               ],
//               Subject: "From Website - Estimate My Rate",
//               TextPart: "",
//               HTMLPart: emailTemplateApplyNow({
//                 custRequest,
//                 clientEmail,
//                 clientPhoneNumber,
//                 data,
//                 custGoal,
//                 custDownPayment,
//                 buyingPlan,
//                 mortgageEnd,
//                 custCreditScore,
//                 fullName,
//               }),
//             },
//           ],
//         });
//         request
//           .then((result) => {
//             console.log(result.body);
//           })
//           .catch((err) => {
//             console.log(err.statusCode);
//           });
//     }
// };

import Handlebars from "handlebars";
import fs from "fs";

export const sendContactEmail = async (inquiryInfo) => {
  const mailjet = require("node-mailjet").apiConnect(
    process.env.MAIL_API_KEY,
    process.env.SECRET_KEY
  );

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
      await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: process.env.SENDER_EMAIL,
              Name: "Save on Rates Website",
            },
            To: [
              {
                Email: process.env.TO_EMAIL,
                Name: "Armaan Brar",
              },
            ],
            Subject: "From Website - I want to get in touch",
            TextPart: "",
            HTMLPart: emailTemplateContactForm({
              fullName,
              clientEmail,
              clientPhoneNumber,
              contactMessage,
            }),
          },
        ],
      });
    } else {
      await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: process.env.SENDER_EMAIL,
              Name: "Save on Rates Website",
            },
            To: [
              {
                Email: process.env.TO_EMAIL,
                Name: "Armaan Brar",
              },
            ],
            Subject: "From Website - Estimate My Rate",
            TextPart: "",
            HTMLPart: emailTemplateApplyNow({
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
          },
        ],
      });
    }
    console.log("Email sent successfully!");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};