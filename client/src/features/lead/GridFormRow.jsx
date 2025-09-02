function GridFormRow({ elements }) {
  return (
    <>
      <div className="col-span-1">{elements.at(0)}</div>
      <div className="col-span-1">{elements.at(1)}</div>
    </>
  );
}

export default GridFormRow;
