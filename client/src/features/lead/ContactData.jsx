import MultiInput from "../../ui/MultiInput";
import StyledInput from "../../ui/StyledInput";
import { useForm } from "./context/FormProvider";
import GridFormRow from "./GridFormRow";

function ContactData() {
  const { form, updateField } = useForm();

  return (
    <div className="formMainContent">
      <div className="formCol">
        <div className="grid grid-cols-2 items-center gap-8 pt-16">
          <GridFormRow
            elements={[
              <StyledInput
                label={"Facebook"}
                value={form.facebook}
                changeHandler={(val) =>
                  updateField({ field: "facebook", value: val })
                }
              />,
              <StyledInput
                label={"Twitter"}
                value={form.twitter}
                changeHandler={(val) =>
                  updateField({ field: "twitter", value: val })
                }
              />,
            ]}
          />

          <GridFormRow
            elements={[
              <StyledInput
                label={"Homepage"}
                value={form.site}
                changeHandler={(val) =>
                  updateField({ field: "site", value: val })
                }
              />,
              <StyledInput
                label={"Instagram"}
                value={form.camposPersonalizados.instagram}
                changeHandler={(val) =>
                  updateField({
                    field: "camposPersonalizados",
                    value: { instagram: val },
                  })
                }
              />,
            ]}
          />
          <GridFormRow
            elements={[
              <MultiInput
                values={form.emails}
                label={"Emails"}
                addHandler={(val) =>
                  updateField({ field: "emails", value: [...form.emails, val] })
                }
                deleteHandler={(val) =>
                  updateField({
                    field: "emails",
                    value: form.emails.filter((email) => email != val),
                  })
                }
              />,
              <MultiInput
                values={form.telefones}
                label={"Telefones"}
                addHandler={(val) =>
                  updateField({
                    field: "telefones",
                    value: [...form.telefones, val],
                  })
                }
                deleteHandler={(val) =>
                  updateField({
                    field: "telefones",
                    value: form.telefones.filter((email) => email != val),
                  })
                }
              />,
            ]}
          />
        </div>
      </div>
      <div className="col-span-1 flex w-full flex-col items-center justify-center">
        <div className="w-[75%]">
          <img src="contact-data.png" />
        </div>
      </div>
    </div>
  );
}

export default ContactData;
