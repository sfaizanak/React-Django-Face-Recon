import InputElem from "../InputElem";
import SelectElem from "../SelectElem";

const SignUp = ({ handleInputChange, handleSubmit, setUserTrack }) => {
  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          setUserTrack("EMAIL_VERIFY");
          handleSubmit(e);
        }}
      >
        <div className="form-row">
          <InputElem
            divCls={"col-md-6"}
            label={"User-ID"}
            type={"text"}
            name={"username"}
            Id={"username"}
            onChange={handleInputChange}
          />
          <InputElem
            divCls={"col-md-6"}
            label={"Password"}
            type={"password"}
            name={"password"}
            Id={"password"}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <InputElem
            divCls={"col-md-6"}
            label={"Email Addr"}
            type={"email"}
            name={"email"}
            Id={"email"}
            onChange={handleInputChange}
          />
          <InputElem
            divCls={"col-md-6"}
            label={"Phone No."}
            type={"number"}
            name={"mobile"}
            Id={"mobile"}
            onChange={handleInputChange}
          />
        </div>
        <SelectElem
          divCls={""}
          label={"Org Name"}
          name={"org_name"}
          optArr={["Wipro", "TCS"]}
          onChange={handleInputChange}
        />
        <div className="form-group" style={{ alignSelf: "center" }}>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
export default SignUp;
