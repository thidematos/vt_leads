import ListLeads from "../features/lead/ListLeads";
import Sidebar from "../ui/Sidebar";

function Home() {
  return (
    <div className="grid h-full w-full grid-cols-12 bg-slate-100">
      <Sidebar />
      <ListLeads />
    </div>
  );
}

export default Home;
