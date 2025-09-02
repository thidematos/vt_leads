import { cnpj } from "cpf-cnpj-validator";
import { useGetContacts } from "./hooks/useGetContacts";
import ActiveFlag from "../../ui/ActiveFlag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDeleteContact } from "./hooks/useDeleteContact";

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
        <Row key={lead.id} lead={lead} isEven={ind % 2 === 0} />
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
      <HeaderCol cols={"col-span-2"}>CNPJ</HeaderCol>
      <HeaderCol cols={"col-span-2"}>Email</HeaderCol>
      <HeaderCol cols={"col-span-1"}>Segmento</HeaderCol>
      <HeaderCol cols={"col-span-1"}>Origem</HeaderCol>
      <HeaderCol cols={"col-span-1"} useCentralize>
        Ativo
      </HeaderCol>
    </div>
  );
}

function HeaderCol({ cols, children, isFirst = false, useCentralize = false }) {
  const style = `flex flex-row  ${cols} ${isFirst && "pl-6"} ${useCentralize ? "justify-center items-center" : " justify-start"}`;

  return (
    <div className={style}>
      <p className="text-sm text-gray-500">{children}</p>
    </div>
  );
}

function Row({ lead, isEven }) {
  console.log(lead);

  const deleteContactFn = useDeleteContact();

  return (
    <div className={`row-span-1 grid grid-cols-10 items-baseline`}>
      <RowColumn cols={"col-span-2"} isFirst>
        {lead.nome}
      </RowColumn>
      <RowColumn cols={"col-span-1"} textSize={"text-sm"}>
        {lead.razaoSocial || "Não fornecido"}
      </RowColumn>
      <RowColumn cols={"col-span-2"} textSize={"text-sm"}>
        {cnpj.format(lead.cnpj) || "Não fornecido"}
      </RowColumn>
      <RowColumn cols={"col-span-2"} textSize={"text-sm"}>
        {lead.emailPrincipal || "Não fornecido"}
      </RowColumn>
      <RowColumn cols={"col-span-1"} textSize={"text-sm"}>
        {lead.segmento || "Não fornecido"}
      </RowColumn>
      <RowColumn cols={"col-span-1"} textSize={"text-sm"}>
        {lead.origem || "Não fornecido"}
      </RowColumn>
      <RowColumn cols={"col-span-1"} textSize={"text-sm"} useCentralize>
        <ActiveFlag
          isActive={lead.ativo}
          clickHandler={() =>
            deleteContactFn({
              id: lead.id,
            })
          }
        />
      </RowColumn>
    </div>
  );
}

function RowColumn({
  cols,
  children,
  isFirst = false,
  textSize,
  useCentralize = false,
}) {
  const style = `${cols} py-3 ${isFirst && "pl-6"} ${textSize} ${useCentralize && "flex flex-row justify-center items-center"}`;

  return (
    <div className={style}>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export default LeadsTable;
