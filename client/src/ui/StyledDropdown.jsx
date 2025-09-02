function StyledDropdown({ label, options = [], value, changeHandler }) {
  return (
    <div className="flex flex-col items-stretch justify-center gap-1">
      <p className="inputLabel">{label}</p>
      <select
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        className="rounded border border-gray-400 bg-neutral-50 p-2.5 shadow focus:outline-none"
      >
        {...options.map((option) => (
          <option className="" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StyledDropdown;
