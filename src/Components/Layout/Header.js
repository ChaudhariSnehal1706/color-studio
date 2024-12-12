import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbara navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <Link to="/" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primary">Color Studio</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/services" className="nav-item nav-link">Services</Link>
        </div>
        <Link to="/" className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block">
          <h1 className="text-white">Color Studio</h1>
        </Link>
        <div className="navbar-nav me-auto py-0">
          <Link to="/projects" className="nav-item nav-link">Projects</Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
            <div className="dropdown-menu rounded-0 shadow-sm border-0 m-0">
              <Link to="/features" className="dropdown-item">Features</Link>
              <Link to="/team" className="dropdown-item">Our Team</Link>
              <Link to="/testimonials" className="dropdown-item">Testimonial</Link>
              <Link to="/404" className="dropdown-item">404 Page</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
