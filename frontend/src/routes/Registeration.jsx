import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "../components/Register/SignUp";
import EmailVerify from "../components/Register/EmailVerify";
import { sendSignUpData } from "../store";
import PersonalDetails from "../components/Register/PersonalDetails";
import CaputerImage from "./CaputerImage";
const Registeration = () => {
  document.title = `Sign Up`;

  const [userTrack, setUserTrack] = useState("SIGN_UP");
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendSignUpData(formData));
    console.log(register);
  };

  return (
    <>
      <section className="center mb-5">
        <div className="details">
          <div className="recentOrders">
            <div className="container1">
              {userTrack == "SIGN_UP" && (
                <SignUp
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  setUserTrack={setUserTrack}
                />
              )}
              {userTrack == "EMAIL_VERIFY" && (
                <EmailVerify setUserTrack={setUserTrack} />
              )}
              {userTrack == "PERSONAL_DETAILS" && (
                <PersonalDetails
                  handleInputChange={handleInputChange}
                  handleImageChange={handleImageChange}
                  handleSubmit={handleSubmit}
                  setUserTack={setUserTrack}
                />
              )}
              {userTrack == "FACE_SCAN" && (
                <CaputerImage handleSubmit={handleSubmit} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Registeration;
