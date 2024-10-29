import { useState } from "react";
import InputElem from "../components/InputElem";
import { useDispatch } from "react-redux";
import { orgRegisterData } from "../store";

const OrgResgister = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(orgRegisterData(formData));
  };
  return (
    <section className="center mb-5">
      <div className="details">
        <div className="recentOrders">
          <form className="container1" onSubmit={handleSubmit}>
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
                divCls={"col-md-12"}
                label={"Org Name"}
                type={"text"}
                name={"org_name"}
                Id={"org_name"}
                onChange={handleInputChange}
              />
              <InputElem
                divCls={"col-md-12"}
                label={"Email Addr"}
                type={"email"}
                name={"email"}
                Id={"email"}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrgResgister;
