import { useGetContacts } from "./hooks/useGetContacts";
import LeadsTable from "./LeadsTable";

function ListLeads() {
  const { contacts } = useGetContacts();

  if (!contacts) return null;

  return (
    <div className="col-span-10 flex flex-row items-center justify-center">
      <div className="flex h-[90%] w-[90%] flex-col items-start justify-start gap-4 rounded-lg bg-gray-50 p-8 shadow-xs">
        <h3 className="text-2xl font-bold">Leads </h3>
        <LeadsTable />
      </div>
    </div>
  );
}

export default ListLeads;
