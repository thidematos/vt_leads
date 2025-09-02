import AddLead from "../features/lead/AddLead";
import Logo from "./logo";
import StyledButton from "./StyledButton";

function Sidebar() {
  return (
    <div className="flex h-full w-[15%] flex-col items-stretch justify-between border border-red-500 bg-orange-100 py-10">
      <Logo />
      <AddLead />
    </div>
  );
}

export default Sidebar;
