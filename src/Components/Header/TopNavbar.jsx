import React from 'react';
import {Link} from 'react-router-dom';
import logo400x118 from '../../assets/images/logo400x118.png';

const TopNavbar = () => {
  return (
    <>
    <header className="header default">
      <div className="topbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-md-flex align-items-center text-center">
                <div className="me-4 d-inline-block py-1">
                  <Link to="#"><i className="far fa-envelope me-2 fa-flip-horizontal text-primary"></i>write2program@gmail.com</Link>
                </div>
                <div className="me-auto d-inline-block py-1">
                  <Link to="tel:1-800-555-1234"><i className="fas fa-map-marker-alt text-primary me-2"></i>Mumbai, Maharashtra</Link>
                </div>
                <div className="d-inline-block py-1">
                  <ul className="list-unstyled">
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/blog"s>Blogs</Link></li>
                    <li><Link to="/help-and-faqs">FAQ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar bg-white navbar-static-top navbar-expand-lg">
        <div className="container-fluid">
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo400x118} alt="logo"/> 
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" >Home</Link>
              </li>
              <li className="dropdown nav-item">
                <Link to="#" className="nav-link" data-bs-toggle="dropdown">Services</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">IT Consultancy</Link></li>
                    <li><Link className="dropdown-item" to="#">Digital Services</Link></li>
                    <li><Link className="dropdown-item" to="#">Advisory Services</Link></li>
                    <li><Link className="dropdown-item" to="#">Data Structuring</Link></li>
                    <li><Link className="dropdown-item" to="#">Experience Design</Link></li>
                    <li><Link className="dropdown-item" to="#">Content Engineering</Link></li>
                  </ul>
              </li>
              <li className="dropdown nav-item">
                <Link to="#" className="nav-link" data-bs-toggle="dropdown">Company</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/how-we-work">How We Work<i className="fas fa-arrow-right"></i></Link></li>
                    <li><Link className="dropdown-item" to="/our-team">Our Team<i className="fas fa-arrow-right"></i></Link></li>
                    <li><Link className="dropdown-item" to="/mission-vision">Mission Vision<i className="fas fa-arrow-right"></i></Link></li>
                    <li><Link className="dropdown-item" to="/our-value">Our Value<i className="fas fa-arrow-right"></i></Link></li>
                    <li><Link className="dropdown-item" to="/services">Services<i className="fas fa-arrow-right"></i></Link></li>
                    <li><Link className="dropdown-item" to="/services-detail">Services Detail<i className="fas fa-arrow-right"></i></Link></li>
                  </ul>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link">Careers</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link" txt="About W2P IT">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="d-none d-sm-flex ms-auto me-5 me-lg-0 pe-4 pe-lg-0">
            <ul className="nav ms-1 ms-lg-2 align-self-center">
              <li className="contact-number nav-item pe-4 ">
                <Link className="fw-bold" to="#"><i className="fab fa-whatsapp pe-2"></i>+91 9029318921</Link>
              </li>
              <li className="header-search nav-item">
                <div className="search">
                  <Link className="search-btn not_click" to="#"></Link>
                  <div className="search-box not-click">
                    <form action="search.html" method="get">
                      <input type="text" className="not-click form-control" name="search" placeholder="Search.."/>
                      <button className="search-button" type="submit"> <i className="fa fa-search not-click"></i></button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default TopNavbar