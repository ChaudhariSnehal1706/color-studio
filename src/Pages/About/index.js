import React from "react";
import { Layout } from "../../Components";

function index() {
  return (
    <Layout>
      <div>
        {/* Header Start */}
        <div className="container-fluid hero-header bg-light py-5 mb-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 mb-3 animated slideInDown">
                  About Us
                </h1>
                <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-6 animated fadeIn">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid bg-white p-3 w-100"
                      src="img/hero-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid bg-white p-3 w-100"
                      src="img/hero-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-3 img-twice position-relative h-100">
                  <div className="col-6">
                    <img
                      className="img-fluid bg-light p-3"
                      src="img/about-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6 align-self-end">
                    <img
                      className="img-fluid bg-light p-3"
                      src="img/about-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                  <p className="text-primary text-uppercase mb-2">About Us</p>
                  <h1 className="display-6 mb-4">
                    We Are Creative And Professional Photographer
                  </h1>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <div className="row g-2 mb-4">
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3" />
                      Quality Products
                    </div>
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3" />
                      Custom Products
                    </div>
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3" />
                      Online Order
                    </div>
                    <div className="col-sm-6">
                      <i className="fa fa-check text-primary me-3" />
                      Home Delivery
                    </div>
                  </div>
                  <a className="btn btn-primary py-3 px-5" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Facts Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="text-primary text-uppercase mb-2">Why Choose Us!</p>
              <h1 className="display-6 mb-5">
                The Leading Photo Studio In The Country
              </h1>
            </div>
            <div className="row g-3">
              <div
                className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="fact-item bg-light text-center h-100 p-5">
                  <h1
                    className="display-2 text-primary mb-3"
                    data-toggle="counter-up"
                  >
                    35
                  </h1>
                  <h4 className="mb-3">Award Winning</h4>
                  <span>
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo
                  </span>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="fact-item bg-light text-center h-100 p-5">
                  <h1
                    className="display-2 text-primary mb-3"
                    data-toggle="counter-up"
                  >
                    45
                  </h1>
                  <h4 className="mb-3">Years Experience</h4>
                  <span>
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo
                  </span>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="fact-item bg-light text-center h-100 p-5">
                  <h1
                    className="display-2 text-primary mb-3"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                  <h4 className="mb-3">Happy Clients</h4>
                  <span>
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Facts End */}

        {/* Team Start */}
        <div className="container-xxl px-0 py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="text-primary text-uppercase mb-2">Our Team</p>
            <h1 className="display-6 mb-0">
              Creative Photograher And Videographer
            </h1>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 flex-sm-row">
                <div className="col-sm-6">
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="h-100 p-5 d-flex flex-column justify-content-between">
                    <div className="mb-3">
                      <h4>Lucifer Jhones</h4>
                      <span>Photographer</span>
                    </div>
                    <p>
                      Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                      sit, sed stet lorem sit clita duo
                    </p>
                    <div className="d-flex">
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="row g-0 flex-sm-row-reverse flex-lg-row">
                <div className="col-sm-6">
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="h-100 p-5 d-flex flex-column justify-content-between">
                    <div className="mb-3">
                      <h4>Jesse Joslin</h4>
                      <span>Videographer</span>
                    </div>
                    <p>
                      Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                      sit, sed stet lorem sit clita duo
                    </p>
                    <div className="d-flex">
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 flex-lg-row-reverse">
                <div className="col-sm-6">
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="h-100 p-5 d-flex flex-column justify-content-between">
                    <div className="mb-3">
                      <h4>Richard Archer</h4>
                      <span>Retoucher</span>
                    </div>
                    <p>
                      Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                      sit, sed stet lorem sit clita duo
                    </p>
                    <div className="d-flex">
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="row g-0 flex-sm-row-reverse">
                <div className="col-sm-6">
                  <div className="team-img position-relative">
                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="h-100 p-5 d-flex flex-column justify-content-between">
                    <div className="mb-3">
                      <h4>April Ryan</h4>
                      <span>Editor</span>
                    </div>
                    <p>
                      Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                      sit, sed stet lorem sit clita duo
                    </p>
                    <div className="d-flex">
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary rounded-circle me-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
      </div>
    </Layout>
  );
}

export default index;
