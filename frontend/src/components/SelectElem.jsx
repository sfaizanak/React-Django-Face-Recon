const SelectElem = ({ divCls, label, name, optArr, onChange }) => {
  return (
    <div className={`form-group ${divCls}`}>
      <label>{label}</label>
      <select name={name} className="form-control" required onChange={onChange}>
        <option value="">Select {label}</option>
        {optArr.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectElem;
