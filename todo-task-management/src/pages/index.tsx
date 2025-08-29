import { useState } from "react";
import Header from "../components/ui/header";
import Sidebar from "../components/ui/sidebar";
import Dashboard from "../components/dashboard/dashboard";
import VitalTask from "../components/taskProcess/vitalTask";
import Task from "../components/taskProcess/task";
import TaskCategories from "../components/taskProcess/taskCategories";
import Setting from "../components/setting/setting";
import Help from "../components/setting/help";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<string>("dashboard");
  const rendercurrentStep = () => {
    switch (currentStep) {
      case "dashbord":
        return <Dashboard setCurrentSte={setCurrentStep} />;
      case "vitaltask":
        return <VitalTask setCurrentSte={setCurrentStep} />;
      case "task":
        return <Task setCurrentSte={setCurrentStep} />;
      case "taskCategories":
        return <TaskCategories setCurrentSte={setCurrentStep} />;
      case "setting":
        return <Setting setCurrentSte={setCurrentStep} />;
      case "help":
        return <Help setCurrentSte={setCurrentStep} />;
    }
  };
  return (
    <section className="h-dvh flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{rendercurrentStep()}</main>
      </div>
    </section>
  );
};

export default Index;
