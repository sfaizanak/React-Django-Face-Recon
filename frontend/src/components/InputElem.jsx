const InputElem = ({
  divCls,
  label,
  type,
  Id,
  name,
  warningMsg,
  onChange,
  ...props
}) => {
  return (
    <div className={`form-group ${divCls}`}>
      <label htmlFor={Id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={Id}
        placeholder={label}
        // required
        name={name}
        accept=".jpg, .jpeg, .png"
        onChange={onChange}
        {...props}
      />
      <p style={{ color: "red" }}> {warningMsg} </p>
    </div>
  );
};
export default InputElem;
