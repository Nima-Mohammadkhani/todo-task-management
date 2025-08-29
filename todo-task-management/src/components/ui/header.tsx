import Icon from "./Icon";
import Input from "./Input";

const Header = () => {
  return (
    <section className="flex items-center justify-between shadow w-full bg-white z-50 p-4">
      <div className="font-bold text-2xl">
        <span className="text-[#FF6767]">Dash</span>board
      </div>
      <div className="relative w-1/2 shadow rounded-md">
        <Input placeholder="Search your task here..." className="p-2" />
        <Icon
          name="Search"
          className="absolute right-0 top-0 h-10 rounded-md bg-[#FF6767] p-2 text-white"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Icon
            name="Calendar"
            className="bg-[#FF6767] p-2 text-white rounded-md"
          />
          <Icon
            name="Bell"
            className="bg-[#FF6767] p-2 text-white rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <span>friday</span>
          <span>2025/02/01</span>
        </div>
      </div>
    </section>
  );
};
export default Header;
