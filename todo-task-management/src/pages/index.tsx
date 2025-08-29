import { useState } from "react";
import Header from "../components/ui/header";
import Sidebar from "../components/ui/sidebar";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<string>("dashboard");
  const rendercurrentStep = () => {
    switch (currentStep) {
      case "dashbord":
        return "";
    }
  };
  return (
    <section className="h-dvh flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {rendercurrentStep()}
        </main>
      </div>
    </section>
  );
};

export default Index;
