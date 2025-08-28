import Button from "./Button";
import Icon from "./Icon";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Dashboard", icon: "LayoutDashboard", action: () => {} },
    { name: "Vital Task", icon: "ClipboardList", action: () => {} },
    { name: "My Task", icon: "CheckSquare", action: () => {} },
    { name: "Task Categories", icon: "FolderKanban", action: () => {} },
    { name: "Setting", icon: "Settings", action: () => {} },
    { name: "Help", icon: "HelpCircle", action: () => {} },
  ];
  return (
    <section className="flex flex-col w-80">
      <div></div>
      <div className="flex flex-col justify-between gap-4 bg-[#FF6767] h-dvh p-4">
        <div className="flex flex-col gap-6 cursor-pointer">
          {sidebarItems.map((item) => (
            <div
              className={`flex items-center gap-4 p-2 ${
                item.name === "Dashboard"
                  ? "bg-white text-black rounded-lg"
                  : "text-white"
              }`}
              onClick={item.action}
              key={item.name}
            >
              <Icon name={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <Button
          iconLeft="LogOut"
          title="Logout"
          className="flex justify-start text-white cursor-pointer p-2"
        />
      </div>
    </section>
  );
};
export default Sidebar;
