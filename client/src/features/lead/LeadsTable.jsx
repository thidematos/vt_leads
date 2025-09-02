import { useGetContacts } from "./hooks/useGetContacts";

function LeadsTable() {
  const { contacts } = useGetContacts();

  if (!contacts) return null;

  if (contacts.length === 0)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <img src="no-data.png" className="opacity-90" />
        <p className="text-2xl text-gray-600">Nenhum Lead encontrado!</p>
      </div>
    );

  return (
    <div className="grid max-h-full w-full grid-flow-row overflow-clip rounded-xl border border-gray-200">
      <Header />
      {contacts.map((lead, ind) => (
        <Row lead={lead} isEven={ind % 2 === 0} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className="row-span-1 grid grid-cols-10 bg-gray-100 py-3">
      <HeaderCol cols={"col-span-2"} isFirst>
        Nome
      </HeaderCol>
      <HeaderCol cols={"col-span-1"}>Razão Social</HeaderCol>
    </div>
  );
}

function HeaderCol({ cols, children, isFirst = false }) {
  const style = `flex flex-row justify-start ${cols} ${isFirst && "pl-6"}`;

  return (
    <div className={style}>
      <p className="text-sm text-gray-500">{children}</p>
    </div>
  );
}

function Row({ lead, isEven }) {
  console.log(lead);

  return (
    <div className={`row-span-1 grid grid-cols-10`}>
      <RowColumn cols={"col-span-2"} isFirst>
        {lead.nome}
      </RowColumn>
      <RowColumn cols={"col-span-1"}>
        {lead.razaoSocial || "Não fornecido"}
      </RowColumn>
    </div>
  );
}

function RowColumn({ cols, children, isFirst = false }) {
  const style = `${cols} py-3 ${isFirst && "pl-6"}`;

  return (
    <div className={style}>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

export default LeadsTable;
