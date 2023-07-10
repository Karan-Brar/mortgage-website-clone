import { useState } from 'react';
import MainOptions from '@/components/ApplyNowComps/MainOptions'
import PurchasePlan from '@/components/ApplyNowComps/PurchasePlan';
import DownPayment from '@/components/ApplyNowComps/DownPayment';
import YourGoal from '@/components/ApplyNowComps/YourGoal';
import MortgageEnd from '@/components/ApplyNowComps/MortgageEnd';
import CreditScore from '@/components/ApplyNowComps/CreditScore';
import PersonalInfo from '@/components/ApplyNowComps/PersonalInfo';
import ThankYouMessage from '@/components/ApplyNowComps/ThankYouMessage';
import { ComponentTypes } from '@/Enum/ComponentEnums';

const index = () => {
  const [component, setComponent] = useState("main-options");
  const [custRequest, setCustRequest] = useState("");
  const [buyingPlan, setBuyingPlan] = useState("");
  const [custDownPayment, setCustDownPayment] = useState("")
  const [custGoal, setCustGoal] = useState("")
  const [mortgageEnd, setMortgageEnd] = useState("")

  const nextComponent = ({ data, componentType }) => {
    setComponent(componentType)

    if (componentType === ComponentTypes.REQUEST) {
      setCustRequest(data);
    } else if (componentType === ComponentTypes.PURCHASE) {
      setBuyingPlan(data);
    } else if (componentType === ComponentTypes.DOWN) {
      setCustDownPayment(data);
    } else if (componentType === ComponentTypes.GOAL) {
      setCustGoal(data)
    } else if (componentType === ComponentTypes.END) {
      setMortgageEnd(data)
    }
  }

  const prevComponent = (componentType) => {
    setComponent(componentType);
  }

  const FinalSubmit = ({ data, componentType }) => {
    setComponent(componentType);

    let { name, phoneNum, email } = data;

    async function sendContactEmail(data) {
      await fetch("/api/contact/sendContactEmail", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      // if (response.status == "200") {
      //   //setContactEmailStatus("Email sent");
      // } else {
      //   //setContactEmailStatus("An error occured, please try again!");
      // }
    }
    sendContactEmail({ custRequest, email, phoneNum, custGoal, custDownPayment, buyingPlan, mortgageEnd, name });

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

      {component === ComponentTypes.REQUEST && custRequest == "Purchase" && (
        <PurchasePlan
          setNext={({ data, componentType }) =>
            nextComponent({ data, componentType })
          }
          setPrev={() => prevComponent("main-options")}
        />
      )}

      {component === ComponentTypes.REQUEST && custRequest === "Refinance/Renew" && (
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

      {(component === ComponentTypes.END || component == ComponentTypes.DOWN) && (
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

      {component === "personalInfo" && (
        <ThankYouMessage />
      )}
    </div>
  );
}

export default index