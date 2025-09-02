import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faAt,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { createContext, useCallback, useContext, useReducer } from "react";
import BasicData from "../features/lead/BasicData";
import ContactData from "../features/lead/ContactData";
import LocationData from "../features/lead/LocationData";

const StepperContext = createContext();

const steps = [
  {
    label: "Informações Básicas",
    icon: faAddressCard,
    component: <BasicData />,
  },
  {
    label: "Contato",
    icon: faAt,
    component: <ContactData />,
  },
  {
    label: "Localização",
    icon: faLocationDot,
    component: <LocationData />,
  },
];

const initials = {
  steps: steps,
  currentStep: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "nextStep":
      if (state.currentStep === state.steps.length - 1) return state;
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "prevStep":
      if (state.currentStep === 0) return state;

      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case "reset":
      return initials;

    default:
      throw new Error("Unknown action");
  }
}

function StepperProvider({ children }) {
  const [{ steps, currentStep }, dispatch] = useReducer(reducer, initials);

  function nextStep() {
    dispatch({
      type: "nextStep",
    });
  }

  function prevStep() {
    dispatch({
      type: "prevStep",
    });
  }

  return (
    <StepperContext.Provider
      value={{
        steps,
        currentStep,
        prevStep,
        nextStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}

function useStepper() {
  const context = useContext(StepperContext);

  if (context === undefined) throw new Error("Wrong use of Context");

  return context;
}

export { StepperProvider, useStepper };
