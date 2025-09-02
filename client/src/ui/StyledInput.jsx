function StyledInput({ label, value, changeHandler, type = "text" }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-1">
      <p className="inputLabel">{label}</p>

      <input
        type={type}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        className={`w-full rounded-sm border ${value !== "" ? "border-blue-400" : "border-slate-400 focus:border-orange-300"} bg-neutral-50 p-2 focus:outline-none`}
      />
    </div>
  );
}

export default StyledInput;
