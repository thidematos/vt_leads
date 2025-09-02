import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const formContext = createContext();

const origin = [
  "Instagram",
  "Telefone",
  "Indicação",
  "Email",
  "Landing Page",
  "LinkedIn",
];

const category = [
  "Cliente ativo",
  "Lead",
  "Prospect",
  "Parceiro",
  "Ex-cliente",
  "Fornecedor",
];

const segment = [
  "Advocacia",
  "Tecnologia",
  "Saúde",
  "Educação",
  "Finanças",
  "Varejo",
  "Indústria",
  "Serviços",
];

const initialState = {
  nome: "",
  cnpj: "",
  razaoSocial: "",
  origem: origin[0],
  categoria: category[0],
  segmento: segment[0],
  receitaAnual: "",
  indicadoPor: "",
  ativo: true,
  sigiloso: false,
  facebook: "",
  linkedin: "",
  twitter: "",
  site: "",
  camposPersonalizados: {
    instagram: "",
  },
  emails: [],
  telefones: [],
  enderecos: [
    {
      bairro: "",
      cep: "",
      complemento: "",
      estado: "",
      logradouro: "",
      municipio: "",
      numero: "",
      pais: "",
      principal: true,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "update/field":
      return {
        ...state,
        [`${action.payload.field}`]: action.payload.value,
      };
  }
}

function FormProvider({ children }) {
  const [form, dispatch] = useReducer(reducer, initialState);

  function updateField(data) {
    dispatch({
      type: "update/field",
      payload: data,
    });
  }

  console.log(form);

  return (
    <formContext.Provider
      value={{ form, updateField, origin, category, segment }}
    >
      {children}
    </formContext.Provider>
  );
}

function useForm() {
  const data = useContext(formContext);

  return data;
}

export { FormProvider, useForm };
