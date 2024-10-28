import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
0;
const CaptureImage = ({ handleSubmit }) => {
  document.title = "Face Recognition";
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [btnMessage, setBtnMessage] = useState("Capture Face");

  const capture = () => {
    if (toggle) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      console.log(imageSrc);
      setToggle(false);
      setBtnMessage("Go Back");
    } else {
      setCapturedImage(null);
      setToggle(true);
      setBtnMessage("Capture Face");
    }
  };

  return (
    <main className="center mb-5">
      <div className="capture-image">
        {!capturedImage ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            encType="multipart/media"
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={320}
              height={240}
              id="videoElement"
              className="frame"
            />
          </form>
        ) : (
          <div>
            <h4 align="center" className="p-3">
              Captured Image:
            </h4>
            <img src={capturedImage} alt="Captured" className="frame" />
          </div>
        )}
        <button
          className="btn btn-primary px-4 btn-center m-3"
          onClick={capture}
          style={{ position: "relative", left: "0px" }}
        >
          {btnMessage}
        </button>
      </div>
    </main>
  );
};

export default CaptureImage;
