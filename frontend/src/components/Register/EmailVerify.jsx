import { useState } from "react";
import InputElem from "../InputElem";

const EmailVerify = ({ setUserTrack }) => {
  const [otp, setOpt] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOpt({ ...otp, [name]: value });
  };
  const handleClick = () => {
    let otpjoin = [];
    for (let i in otp) {
      otpjoin.push(otp[i]);
    }
    otpjoin = otpjoin.join("");
    setUserTrack("PERSONAL_DETAILS");
  };
  return (
    <div align="center">
      <h4>Enter OTP send on Your email</h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {["1st", "2nd", "3rd", "4th"].map((no) => (
          <InputElem
            divCls={"col-md-2"}
            label={""}
            type={"text"}
            name={no}
            maxLength={1}
            onChange={handleInputChange}
            key={no}
          />
        ))}
      </div>
      <button className="btn btn-primary m-2" onClick={handleClick}>
        Verify
      </button>
      <button className="btn btn-secondary m-2">Resend</button>
    </div>
  );
};

export default EmailVerify;
