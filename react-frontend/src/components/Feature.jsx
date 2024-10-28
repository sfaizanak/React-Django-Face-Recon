const Feature = () => {
  const features = [
    {
      name: "Enhanced Security",
      desc: "Face recognition can be used for access control systems,replacing traditional methods like passwords or access cards.",
    },
    {
      name: "Convenience",
      desc: "Compared to traditional authentication methods, such as passwords or PINs, face recognition is more convenient as it doesn't require users to remember or carry additional credentials.",
    },
    {
      name: "Efficiency",
      desc: "Face recognition systems can process authentication quickly, making them suitable for high-traffic areas like airports, train stations, or office buildings.",
    },
    {
      name: "Non-intrusive",
      desc: "Unlike fingerprint or iris scanning, face recognition is non-intrusive and doesn't require physical contact.",
    },
  ];
  return (
    <section id="why" className="services-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center" id="feature">
          <div className="col-lg-7">
            <div className="section-title text-center pb-25">
              <h3 className="title">
                Unveiling the Power of Facial Recognition
              </h3>
              <p className="text">
                Unlock a world of seamless authentication with our cutting-edge
                facial recognition technology. With Face Recognition, enjoy
                unparalleled convenience, enhanced security, and effortless
                access to your college details
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-sm-6" key={feature.name}>
              <div
                className={`single-services services-color-${
                  index + 1
                } text-center mt-30 wow fadeInUpBig`}
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-layout"></i>
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">{feature.name}</a>
                  </h4>
                  <p className="text">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
