import { UseModal } from "../../context/ModalProvider";
import { StepperProvider } from "../../context/StepperProvidder";
import StyledButton from "../../ui/StyledButton";
import { FormProvider } from "./context/FormProvider";
import FormContainer from "./FormContainer";

function AddLead() {
  const { isOpen, toggleModal } = UseModal();

  return (
    <StyledButton
      label={"Novo Lead"}
      clickHandler={() =>
        toggleModal({
          status: true,
          content: (
            <StepperProvider>
              <FormProvider>
                <FormContainer />
              </FormProvider>
            </StepperProvider>
          ),
        })
      }
    />
  );
}

export default AddLead;
