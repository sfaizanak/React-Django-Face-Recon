import f3 from "/img/f3.jpg";
const AboutUs = () => {
  document.title = "About Us";
  return (
    <section id="download" className="download-area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-9">
            <div
              className="download-image mt-50 wow fadeInRightBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <img className="image" src={f3} alt="download" />

              <div className="download-shape-1"></div>
              <div className="download-shape-2"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="download-content mt-45 mb-45 wow fadeInLeftBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <h3 className="download-title">About Us</h3>
              <p className="text">
                At FaceSnap, we're passionate about revolutionizing student
                identification. Our team of experts has developed a
                state-of-the-art facial recognition system to streamline access
                to college details. With a focus on innovation and efficiency,
                we aim to enhance campus security and convenience for both
                students and institutions. Join us in shaping the future of
                student recognition technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
