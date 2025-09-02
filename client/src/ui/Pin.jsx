import { faCircleXmark, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pin({ label, deleteHandler }) {
  return (
    <div className="flex flex-row items-center gap-3 rounded-2xl bg-blue-400 px-3 py-1 text-gray-100 shadow">
      <p>{label}</p>
      <FontAwesomeIcon
        onClick={deleteHandler}
        icon={faTrashCan}
        className="cursor-pointer text-slate-200"
      />
    </div>
  );
}

export default Pin;
