import StyledDropdown from "../../ui/StyledDropdown";
import StyledInput from "../../ui/StyledInput";
import StyledSwitch from "../../ui/StyledSwitch";
import { useForm } from "./context/FormProvider";
import GridFormRow from "./GridFormRow";

function BasicData() {
  const { form, updateField, origin, category, segment } = useForm();

  return (
    <div className="formMainContent">
      <div className="formCol">
        <div className="grid grid-cols-2 gap-8">
          <GridFormRow
            elements={[
              <StyledInput
                label={"Nome"}
                value={form.nome}
                changeHandler={(val) =>
                  updateField({ field: "nome", value: val })
                }
              />,
              <StyledInput
                label={"CNPJ"}
                value={form.cnpj}
                changeHandler={(val) =>
                  updateField({ field: "cnpj", value: val })
                }
              />,
            ]}
          />
          <GridFormRow
            elements={[
              <StyledInput
                label={"Razão Social"}
                value={form.razaoSocial}
                changeHandler={(val) =>
                  updateField({ field: "razaoSocial", value: val })
                }
              />,
              <StyledDropdown
                label={"Origem"}
                options={origin}
                value={form.origem}
                changeHandler={(val) =>
                  updateField({ field: "origem", value: val })
                }
              />,
            ]}
          />
          <GridFormRow
            elements={[
              <StyledDropdown
                label={"Categoria"}
                options={category}
                value={form.categoria}
                changeHandler={(val) =>
                  updateField({ field: "categoria", value: val })
                }
              />,
              <StyledDropdown
                label={"Segmento"}
                options={segment}
                value={form.segmento}
                changeHandler={(val) =>
                  updateField({ field: "segmento", value: val })
                }
              />,
            ]}
          />

          <GridFormRow
            elements={[
              <StyledInput
                type="number"
                label={"Receita Anual"}
                value={form.receitaAnual}
                changeHandler={(val) =>
                  updateField({ field: "receitaAnual", value: val })
                }
              />,
              <StyledDropdown
                label={"Indicador por"}
                options={["teste", "testeee", "testeeee"]}
                value={form.indicadoPor}
                changeHandler={(val) =>
                  updateField({ field: "indicadoPor", value: val })
                }
              />,
            ]}
          />

          <div className="col-span-2 flex flex-row justify-around">
            <StyledSwitch
              label={"Sigiloso"}
              value={form.sigiloso}
              changeHandler={(val) =>
                updateField({ field: "sigiloso", value: val })
              }
            />

            <StyledSwitch
              label={"Ativo"}
              value={form.ativo}
              changeHandler={(val) =>
                updateField({ field: "ativo", value: val })
              }
            />
          </div>
        </div>
      </div>

      <div
        className={`formCol flex w-full flex-col items-center justify-center`}
      >
        <div className="flex h-full flex-row items-center justify-center">
          <div className="flex w-[75%] flex-row justify-center">
            <img src="personal-data.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicData;
