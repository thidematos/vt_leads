import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const initialState = { status: false, content: null };

function ModalProvider({ children }) {
  const [modal, setModal] = useState(initialState);

  function toggleModal({ status, content }) {
    setModal({ status, content });
  }

  return (
    <modalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </modalContext.Provider>
  );
}

function UseModal() {
  const data = useContext(modalContext);

  return data;
}

export { ModalProvider, UseModal };
