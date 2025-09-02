import StyledInput from "../../ui/StyledInput";
import { useForm } from "./context/FormProvider";
import GridFormRow from "./GridFormRow";

function LocationData() {
  const { form, updateField } = useForm();

  return (
    <div className="formMainContent">
      <div className="formCol">
        <div className="grid grid-cols-2 items-center gap-8 pt-16">
          <GridFormRow
            elements={[
              <StyledInput
                label={"Logradouro"}
                value={form.enderecos.at(0).logradouro}
                changeHandler={(val) =>
                  updateField({
                    field: "enderecos",
                    value: [{ ...form.enderecos.at(0), logradouro: val }],
                  })
                }
              />,
              <StyledInput
                label={"Bairro"}
                value={form.enderecos.at(0).bairro}
                changeHandler={(val) =>
                  updateField({
                    field: "enderecos",
                    value: [{ ...form.enderecos.at(0), bairro: val }],
                  })
                }
              />,
            ]}
          />

          <GridFormRow
            elements={[
              <StyledInput
                label={"Município"}
                value={form.enderecos.at(0).municipio}
                changeHandler={(val) =>
                  updateField({
                    field: "enderecos",
                    value: [{ ...form.enderecos.at(0), municipio: val }],
                  })
                }
              />,
              <StyledInput
                label={"CEP"}
                value={form.enderecos.at(0).cep}
                changeHandler={(val) =>
                  updateField({
                    field: "enderecos",
                    value: [{ ...form.enderecos.at(0), cep: val }],
                  })
                }
              />,
            ]}
          />
          <div className="col-span-2 flex flex-row items-center justify-center gap-8">
            <StyledInput
              label={"Número"}
              type="number"
              value={form.enderecos.at(0).numero}
              changeHandler={(val) =>
                updateField({
                  field: "enderecos",
                  value: [{ ...form.enderecos.at(0), numero: val }],
                })
              }
            />

            <StyledInput
              label={"Estado"}
              value={form.enderecos.at(0).estado}
              changeHandler={(val) =>
                updateField({
                  field: "enderecos",
                  value: [{ ...form.enderecos.at(0), estado: val }],
                })
              }
            />
            <StyledInput
              label={"País"}
              value={form.enderecos.at(0).pais}
              changeHandler={(val) =>
                updateField({
                  field: "enderecos",
                  value: [{ ...form.enderecos.at(0), pais: val }],
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex w-full flex-col items-center justify-center">
        <div className="w-[85%]">
          <img src="location-data.png" />
        </div>
      </div>
    </div>
  );
}

export default LocationData;
