import InputElem from "../InputElem";
import SelectElem from "../SelectElem";

const PersonalDetails = ({
  handleInputChange,
  handleImageChange,
  handleSubmit,
  setUserTack,
}) => {
  return (
    <form
      encType="multipart/form-data"
      onSubmit={(e) => {
        setUserTack("FACE_SCAN");
        handleSubmit(e);
      }}
    >
      <div className="form-row">
        <InputElem
          divCls={"col-md-4"}
          label={"First Name"}
          type={"text"}
          name={"first_name"}
          Id={"firstName"}
          onChange={handleInputChange}
        />
        <InputElem
          divCls={"col-md-4"}
          label={"Middle Name"}
          type={"text"}
          name={"middle_name"}
          Id={"middleName"}
          onChange={handleInputChange}
        />
        <InputElem
          divCls={"col-md-4"}
          label={"Last Name"}
          type={"text"}
          name={"last_name"}
          Id={"lastName"}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <SelectElem
          divCls={"col-md-6"}
          label={"Department"}
          name={"dept"}
          optArr={["Computer Science", "Computer Application", "Commerce"]}
          onChange={handleInputChange}
        />
        <SelectElem
          divCls={"col-md-6"}
          label={"Designation"}
          name={"desg"}
          optArr={["Senior", "Junior"]}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <InputElem
          divCls={"col-md-6"}
          label={"Image"}
          type={"file"}
          name={"img"}
          Id={"img"}
          onChange={handleImageChange}
          multiple
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Capture Face
      </button>
    </form>
  );
};

export default PersonalDetails;
