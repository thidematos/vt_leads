import { useStepper } from "../../context/StepperProvidder";
import Stepper from "../../ui/Stepper";
import StyledButton from "../../ui/StyledButton";
import Form from "./BasicData";
import { useForm } from "./context/FormProvider";
import { useCreateContact } from "./hooks/useCreateContact";

function FormContainer() {
  const { nextStep, prevStep, currentStep, steps } = useStepper();
  const { form } = useForm();

  const reqNewContact = useCreateContact();

  console.log(currentStep);

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="flex h-full flex-col items-stretch justify-start">
      <p className="mb-8 text-2xl font-semibold">Adicionar Lead</p>
      <Stepper />
      {steps[currentStep].component}
      <div className="mt-8 flex flex-row justify-end gap-16">
        {currentStep != 0 && (
          <StyledButton
            isCta={false}
            label={"Voltar"}
            style="w-min"
            clickHandler={prevStep}
          />
        )}
        <StyledButton
          label={isLastStep ? "Criar" : "Próximo"}
          style="w-[20%]"
          clickHandler={isLastStep ? () => reqNewContact(form) : nextStep}
        />
      </div>
    </div>
  );
}

export default FormContainer;
