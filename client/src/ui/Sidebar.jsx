import AddLead from "../features/lead/AddLead";
import Logo from "./logo";
import StyledButton from "./StyledButton";

function Sidebar() {
  return (
    <div className="col-span-2 flex h-full flex-col items-stretch justify-between border-r border-r-gray-200 bg-orange-100 py-10 shadow-lg">
      <Logo />
      <div className="w-[80%] self-center">
        <AddLead />
      </div>
    </div>
  );
}

export default Sidebar;
