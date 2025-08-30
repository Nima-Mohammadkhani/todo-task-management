import Button from "./Button";
import Icon from "./Icon";

const Sidebar = ({ currentStep, setCurrentStep }: any) => {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: "LayoutDashboard",
      action: () => {
        setCurrentStep("Dashboard");
      },
    },
    {
      name: "Vital Task",
      icon: "ClipboardList",
      action: () => {
        setCurrentStep("Vital Task");
      },
    },
    {
      name: "My Task",
      icon: "CheckSquare",
      action: () => {
        setCurrentStep("My Task");
      },
    },
    {
      name: "Task Categories",
      icon: "FolderKanban",
      action: () => {
        setCurrentStep("Task Categories");
      },
    },
    {
      name: "Settings",
      icon: "Settings",
      action: () => {
        setCurrentStep("Settings");
      },
    },
    {
      name: "Help",
      icon: "HelpCircle",
      action: () => {
        setCurrentStep("Help");
      },
    },
  ];

  return (
    <section className="flex flex-col relative w-80 h-full">
      <div className="bg-[#F5F8FF] h-12 w-full"></div>
      <div className="flex-1 flex flex-col justify-between gap-4 bg-[#FF6767] p-6 pt-16 rounded-t-md relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="rounded-full border-4 border-white overflow-hidden w-20 h-20">
            <img
              src="/image/user3.png"
              alt="user profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center text-white">
            <h2 className="font-semibold text-lg">Sundar Gurung</h2>
            <p className="text-sm opacity-80">sundargurung360@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-12 cursor-pointer">
          {sidebarItems.map((item) => (
            <div
              className={`flex items-center gap-4 p-2 rounded-lg transition ${
                item.name === currentStep
                  ? "bg-white text-black"
                  : "text-white hover:bg-[#ff7f7f]"
              }`}
              onClick={item.action}
              key={item.name}
            >
              <Icon name={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Button
            iconLeft="LogOut"
            title="Logout"
            className="flex justify-start items-center text-white cursor-pointer p-2 gap-3 hover:bg-[#ff7f7f] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
