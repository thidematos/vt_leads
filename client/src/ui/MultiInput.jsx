import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledInput from "./StyledInput";
import { useState } from "react";
import Pin from "./Pin";

function MultiInput({ values, label, addHandler, deleteHandler }) {
  const [buffer, setBuffer] = useState("");

  function add() {
    addHandler(buffer);
    setBuffer("");
  }

  return (
    <div>
      <div className="flex flex-col items-start justify-center">
        <p className="inputLabel">{label}</p>
        <div className="flex flex-row gap-2">
          <StyledInput value={buffer} changeHandler={(val) => setBuffer(val)} />
          <button className="text-3xl text-gray-600" onClick={add}>
            +
          </button>
        </div>
      </div>
      <div className="flex h-[150px] flex-col items-start justify-start gap-2 overflow-y-auto py-2">
        {...values.map((value) => (
          <Pin label={value} deleteHandler={() => deleteHandler(value)} />
        ))}
      </div>
    </div>
  );
}

export default MultiInput;
