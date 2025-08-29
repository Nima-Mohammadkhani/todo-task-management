import { useState } from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
const Index = ({ setUser }: any) => {
  const [step, setStep] = useState<string>("sign-up");
  const renderAuthStep = () => {
    switch (step) {
      case "sign-up":
        return <SignUp setStep={setStep} setUser={setUser}/>;
      case "sign-in":
        return <SignIn setStep={setStep} setUser={setUser}/>;
      default:
        return <SignIn setStep={setStep} setUser={setUser}/>;
    }
  };
  return (
    <section className="flex-1 relative bg-[#FF6767] bg-[url('../../..//image/bg.png')] bg-cover bg-center bg-no-repeat">
      {renderAuthStep()}
    </section>
  );
};
export default Index;
