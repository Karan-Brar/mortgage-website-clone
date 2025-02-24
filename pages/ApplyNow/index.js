import { useState } from "react";
import MainOptions from "@/components/ApplyNowComps/MainOptions";
import PurchasePlan from "@/components/ApplyNowComps/PurchasePlan";
import DownPayment from "@/components/ApplyNowComps/DownPayment";
import YourGoal from "@/components/ApplyNowComps/YourGoal";
import MortgageEnd from "@/components/ApplyNowComps/MortgageEnd";
import CreditScore from "@/components/ApplyNowComps/CreditScore";
import PersonalInfo from "@/components/ApplyNowComps/PersonalInfo";
import ThankYouMessage from "@/components/ApplyNowComps/ThankYouMessage";
import { ComponentTypes } from "@/Enum/ComponentEnums";

const index = () => {
  const [component, setComponent] = useState("main-options");
  const [custRequest, setCustRequest] = useState("");
  const [buyingPlan, setBuyingPlan] = useState("");
  const [custDownPayment, setCustDownPayment] = useState("");
  const [custCreditScore, setCustCreditScore] = useState("");
  const [custGoal, setCustGoal] = useState("N/A");
  const [mortgageEnd, setMortgageEnd] = useState("N/A");

  const nextComponent = ({ data, componentType }) => {
    setComponent(componentType);
    0;
    if (componentType === ComponentTypes.REQUEST) {
      setCustRequest(data);
    } else if (componentType === ComponentTypes.PURCHASE) {
      setBuyingPlan(data);
    } else if (componentType === ComponentTypes.DOWN) {
      setCustDownPayment(data);
    } else if (componentType === ComponentTypes.GOAL) {
      setCustGoal(data);
    } else if (componentType === ComponentTypes.END) {
      setMortgageEnd(data);
    } else if (componentType === ComponentTypes.SCORE) {
      setCustCreditScore(data);
    }
  };

  const prevComponent = (componentType) => {
    setComponent(componentType);
  };

  const FinalSubmit = ({ data, componentType }) => {
    setComponent(componentType);

    let { fullName, clientPhoneNumber, clientEmail } = data;
    async function sendContactEmail(data) {
      await fetch("/api/contact/sendContactEmail", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
    }
    sendContactEmail({
      custRequest,
      clientEmail,
      clientPhoneNumber,
      custGoal,
      custCreditScore,
      custDownPayment,
      buyingPlan,
      mortgageEnd,
      fullName,
    });
    window.open("https://calendly.com/saveonrates/rateoptions", "_self");
  };

  return (
    <div className="lg:pb-72 pb-72 sm:pb-96 bg-slate-100" id="options-page">
      {component === "main-options" && (
        <MainOptions
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
        />
      )}
      {component === ComponentTypes.REQUEST && custRequest == "Purchase" && (
        <PurchasePlan
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent("main-options")}
        />
      )}
      {component === ComponentTypes.REQUEST &&
        custRequest === "Refinance/Renew" && (
          <YourGoal
            setNext={({ data, componentType }) =>
              nextComponent({ data, componentType })
            }
            setPrev={() => prevComponent("main-options")}
          />
        )}
      {component === ComponentTypes.PURCHASE && (
        <DownPayment
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent(ComponentTypes.REQUEST)}
        />
      )}
      {component === ComponentTypes.GOAL && (
        <MortgageEnd
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent(ComponentTypes.REQUEST)}
        />
      )}
      {(component === ComponentTypes.END ||
        component == ComponentTypes.DOWN) && (
        <CreditScore
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => {
            mortgageEnd === ""
              ? prevComponent(ComponentTypes.PURCHASE)
              : prevComponent(ComponentTypes.GOAL);
          }}
        />
      )}
      {component === "creditScore" && (
        <PersonalInfo
          submitForm={({ data, componentType }) =>
            FinalSubmit({ data, componentType })
          }
          setPrev={() => prevComponent(ComponentTypes.END)}
        />
      )}
      {component === "personalInfo" && <ThankYouMessage />}
    </div>
  );
};

export default index;
