import React from 'react'
import {Link} from 'react-router-dom'
import logo400x118 from '../../assets/images/logo400x118.png';
import Privacy from '../Content/Pages/Privacy';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <a href="/"><img className="img-fluid" src={logo400x118} alt="logo"/></a>
            </div>
            <div className="col-sm-9 text-sm-end mt-4 mt-sm-0">
              <ul className="list-unstyled mb-0 social-icon">
                <li><a href="https://www.facebook.com/profile.php?id=100086959927893"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/write2program"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/raja-sahani-450762250/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/write2program/"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/write2program/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://wa.me/9029318921"><i className="fab fa-whatsapp"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC6C_3S7slwp5zM2IsvZ1nqg/"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
          <hr className="my-4 my-sm-5 pb-0"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-primary mb-2 mb-sm-4">IT Services</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><a href="#">Data Synchronization</a></li>
                <li><a href="#">Content Management</a></li>
                <li><a href="#">Content Delivery</a></li>
                <li><a href="#">Process Automation</a></li>
              </ul>
              <ul className="list-unstyled mb-0">
                <li><a href="#">Event Processing</a></li>
                <li><a href="#">Information Security</a></li>
                <li><a href="#">Mobile Platforms</a></li>
                <li><a href="#">Communications</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-primary mb-2 mb-sm-4">Company</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/blogs">IT Blog</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/careers">Careers <span className="badge bg-success ms-2">We're hiring</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4 mb-sm-0">
            <h5 className="text-primary mb-2 mb-sm-4">Support</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link to="/help-and-faqs">Help & FAQs</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="footer-contact-info">
              <h5 className="text-primary mb-3">Contact W2P IT</h5>
              <div className="contact-address">
                <div className="contact-item">
                  <label>Address:</label>
                  <p>Malad(W), Mumbai, Maharashtra, 400095</p>
                </div>
                <div className="contact-item">
                  <label>Phone:</label>
                  <h4 className="mb-0 fw-bold"><a href="#">+91 9029318921</a></h4>
                </div>
                <div className="contact-item">
                  <label>Email:</label>
                  <a className="text-dark" href="#">write2program@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-sm-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0">©Copyright {new Date().getFullYear()} <a href="/">W2P IT Software</a> All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div id="back-to-top" className="back-to-top">up</div>
    </>
  )
}

export default Footer
