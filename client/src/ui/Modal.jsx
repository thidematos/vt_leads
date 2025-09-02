import { UseModal } from "../context/ModalProvider";

function Modal() {
  const { modal, toggleModal } = UseModal();

  return modal.status ? (
    <>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-[9998] bg-gray-900/20 backdrop-blur-xs"
        onClick={() => toggleModal({ status: false, content: null })}
      ></div>

      <div className="centerXY absolute z-[9999] h-[85%] w-[60%] rounded-lg bg-slate-100 p-6 shadow-xl">
        {modal.content}
      </div>
    </>
  ) : null;
}

export default Modal;
