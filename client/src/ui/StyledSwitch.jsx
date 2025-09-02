function StyledSwitch({ value, label, changeHandler }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="inputLabel">{label}</p>
      <label class="switch">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => changeHandler(e.target.checked)}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default StyledSwitch;
