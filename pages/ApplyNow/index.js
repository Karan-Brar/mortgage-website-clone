import { useState } from 'react';
import MainOptions from '@/components/ApplyNowComps/MainOptions'
import PurchasePlan from '@/components/ApplyNowComps/PurchasePlan';
import DownPayment from '@/components/ApplyNowComps/DownPayment';
import YourGoal from '@/components/ApplyNowComps/YourGoal';
import MortgageEnd from '@/components/ApplyNowComps/MortgageEnd';
import CreditScore from '@/components/ApplyNowComps/CreditScore';
import PersonalInfo from '@/components/ApplyNowComps/PersonalInfo';
import ThankYouMessage from '@/components/ApplyNowComps/ThankYouMessage';

const index = () => {
  const [component, setComponent] = useState("main-options");
  const [custRequest, setCustRequest] = useState("");
  const [buyingPlan, setBuyingPlan] = useState("");
  const [custDownPayment, setCustDownPayment] = useState("")
  const [custGoal, setCustGoal] = useState("")
  const [mortgageEnd, setMortgageEnd] = useState("")
  const [name, setName] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [email, setEmail] = useState("")

  const nextComponent = ({ data, componentType }) => {
    setComponent(componentType)

    if (componentType === "custRequest") {
      setCustRequest(data);
    } else if (componentType === "purchasePlan") {
      setBuyingPlan(data);
    } else if (componentType === "downPayment") {
      setCustDownPayment(data);
      // setMortgageEnd("");
    } else if (componentType === "yourGoal") {
      setCustGoal(data)
    } else if (componentType === "mortgageEnd") {
      setMortgageEnd(data)
    }
  }

  const prevComponent = (componentType) => {
    setComponent(componentType);
  }

  const FinalSubmit = ({ data, componentType }) => {
    setComponent(componentType);
    console.log("yo")
    console.log(data)
    let { name, phoneNum, email } = data;
    // setName(data.name);
    // setPhoneNum(data.number);
    // setEmail(data.email);
    //state hasnt updated so these dont mean anything
    console.log({ custRequest, email, phoneNum, data, custGoal, custDownPayment, buyingPlan, mortgageEnd, name });
    console.log("shit")
    async function sendContactEmail(data) {
      let response = await fetch("/api/contact/sendContactEmail", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status == "200") {
        //setContactEmailStatus("Email sent");
      } else {
        //setContactEmailStatus("An error occured, please try again!");
      }
    }
    sendContactEmail({ custRequest, email, phoneNum, data, custGoal, custDownPayment, buyingPlan, mortgageEnd, name });
    {/* code for email submitting */ }
  };


  return (
    <div className="lg:pb-72 pb-72 sm:pb-96 bg-slate-100">
      {component === "main-options" && (
        <MainOptions
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
        />
      )}

      {component === "custRequest" && custRequest == "Purchase" && (
        <PurchasePlan
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent("main-options")}
        />
      )}

      {component === "custRequest" && custRequest === "Refinance/Renew" && (
        <YourGoal
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent("main-options")}
        />
      )}

      {component === "purchasePlan" && (
        <DownPayment
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent("custRequest")}
        />
      )}

      {component === "yourGoal" && (
        <MortgageEnd
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent("custRequest")}
        />
      )}

      {(component === "mortgageEnd" || component == "downPayment") && (
        <CreditScore
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => {
            mortgageEnd === ""
              ? prevComponent("purchasePlan")
              : prevComponent("yourGoal");
          }}
        />
      )}

      {component === "creditScore" && (
        <PersonalInfo
          submitForm={({ data, componentType }) =>
            FinalSubmit({ data, componentType })
          }
          setPrev={() => prevComponent("mortgageEnd")}
        />
      )}

      {component === "personalInfo" && (
        <ThankYouMessage />
      )}
    </div>
  );
}

export default index