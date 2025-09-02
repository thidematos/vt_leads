function ActiveFlag({ isActive, clickHandler }) {
  return (
    <div
      className={`rounded-3xl px-3 py-1 ${isActive ? "bg-orange-400" : "bg-red-400"} w-min cursor-pointer text-gray-50 shadow`}
      onClick={clickHandler}
    >
      <p className="text-xs">{isActive ? "Ativo" : "Inativo"}</p>
    </div>
  );
}

export default ActiveFlag;
