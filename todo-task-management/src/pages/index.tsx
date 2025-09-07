import { useState } from "react";
import Header from "../components/ui/header";
import Sidebar from "../components/ui/sidebar";
import Auth from "../components/auth/index";
import Dashboard from "../components/dashboard/dashboard";
import VitalTask from "../components/taskProcess/vitalTask";
import Task from "../components/taskProcess/task";
import TaskCategories from "../components/taskProcess/taskCategories";
import Setting from "../components/setting/setting";
import Help from "../components/setting/help";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<string>("Dashboard");
  const [user, setUser] = useState<boolean>(false);
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
    <section className="flex flex-col">
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <div className="h-full flex flex-col">
          <Header />
          <div className="flex flex-1">
            <div>
              <Sidebar
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
            <main className="flex-1 h-full p-6">{rendercurrentStep()}</main>
          </div>
        </div>
      )}
    </section>
  );
};

export default Index;
