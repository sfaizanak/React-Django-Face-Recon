import hero from "/img/f5.jpg";
const Hero = () => {
  return (
    <div
      id="home"
      className="header-hero bg_cover d-lg-flex align-items-center center"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div className="col-lg-6 col-md-10">
            <div className="header-hero-content">
              <h3
                className="header-title wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <span>Digital_ID</span> Empowering Student Connectivity
              </h3>
              <p
                className="text wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                Say goodbye to traditional ID cards and hello to convenience.
                Experience the future of student identification with FaceSnap
                today!.Experience the power of facial recognition - the smarter
                choice for modern authentication.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-10">
            <div className="header-image">
              <img
                src={hero}
                alt="app"
                className="image wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
