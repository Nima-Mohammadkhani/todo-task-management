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
  const [currentStep, setCurrentStep] = useState<string>("Dashboard");
  const rendercurrentStep = () => {
    switch (currentStep) {
      case "Dashboard":
        return <Dashboard />;
      case "Vital Task":
        return <VitalTask />;
      case "My Task":
        return <Task />;
      case "Task Categories":
        return <TaskCategories />;
      case "Settings":
        return <Setting />;
      case "Help":
        return <Help />;
    }
  };
  return (
    <section className="h-dvh flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <main className="flex-1 p-6">{rendercurrentStep()}</main>
      </div>
    </section>
  );
};

export default Index;
