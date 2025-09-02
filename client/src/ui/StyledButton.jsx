function StyledButton({
  label,
  clickHandler = () => null,
  style = "w-full",
  isCta = true,
}) {
  const buttonTypeStyle = isCta
    ? "rounded bg-orange-500 p-2 text-slate-100 shadow-md hover:bg-orange-600 active:bg-orange-500"
    : "text-lg font-semibold ";

  const baseStyle = "cursor-pointer ";

  const custom = `${baseStyle} ${buttonTypeStyle} ${style}`;

  return (
    <button onClick={clickHandler} className={custom}>
      <p>{label}</p>
    </button>
  );
}

export default StyledButton;
