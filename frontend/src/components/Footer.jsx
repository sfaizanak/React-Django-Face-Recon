import shape from "/img/footer-shape.svg";
import footerImage from "/img/face2.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <footer id="footer" className="footer-area">
      {arr.map((i) => (
        <div className={`footer-shape shape-${i}`} key={i}>
          <img className="svg" src={shape} alt="Shape" loading="lazy" />
        </div>
      ))}

      <div className="footer-widget pt-30 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="footer-about mt-50 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <Link className="logo" to="#">
                  <img src={footerImage} alt="Logo" loading="lazy" />
                </Link>
                <p className="text">
                  Welcome to our innovative Student Face Recognition project!
                  Leveraging advanced facial recognition technology, our system
                  offers a convenient and secure solution for student
                  identification.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-link d-flex flex-wrap">
                <div
                  className="footer-link-wrapper mt-45 wow fadeIn"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  <div className="footer-title">
                    <h4 className="title">Quick Links</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <a href="/#">Home</a>
                    </li>
                    <li>
                      <a href="/#feature">Features</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="footer-link-wrapper mt-45 wow fadeIn"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  <div className="footer-title">
                    <h4 className="title">Developer</h4>
                  </div>
                  <ul className="link">
                    <li>Shaikh Faizan Abdul Kadar</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="footer-contact mt-45 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                <div className="footer-title">
                  <h4 className="title">Contact Us</h4>
                </div>
                <ul className="contact-list">
                  <li>
                    <div className="contact-info d-flex">
                      <div className="info-content media-body">
                        <p className="text">
                          <i className="lni lni-phone"></i>+91 7875629952
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info d-flex">
                      <div className="info-content media-body">
                        <p className="text">
                          <Link to="mailto:sfakfaizan38@gmail.com">
                            <i className="lni lni-envelope"></i>
                            digitalId38@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info d-flex">
                      <div className="info-content media-body">
                        <p className="text">
                          <Link to="#">
                            <i className="lni lni-world"></i>digitalID.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright d-sm-flex justify-content-between">
                <div className="copyright-text text-center">
                  <p className="text">
                    Stay Connected with
                    <Link rel="nofollow" to="#">
                      digital_ID
                    </Link>
                  </p>
                </div>

                <div className="copyright-privacy text-center">
                  <Link to="mailto:sfakfaizan38@gmail.com">
                    Report Issues on digitalId38@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
