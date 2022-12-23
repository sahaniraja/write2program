import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import maplacationimg1 from '../../../assets/images/about/maplacationimg1.png';

const Contact = () => {
  return (
<>
    <TopNavbar/>
    
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h1>Contact us</h1>
              <p>Drop us a line! We'll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-lg-around position-relative pt-5">
          <div className="col-lg-4 col-md-5 mb-4">
            <div className="is-sticky">
              <h4 className="mb-4">Let's talk about what you want to accomplish and how we can make it happen.</h4>
              <h5 className="text-light">This is the beginning of creating the life that you want to live.</h5>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 pe-lg-5">
            <div className="p-4 p-md-5 bg-white shadow">
              <h3>Need assistance? please fill the form</h3>
              <form className="mt-4">
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputName" placeholder="Name"/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputLname" placeholder="Last Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputEnquiry" placeholder="Enquiry Type" />
                </div>
                <div className="mb-4">
                  <textarea className="form-control" id="exampleInputEnquiry-Description" placeholder="Enquiry Description" rows="5"></textarea>
                </div>
                <div className="mb-4">
                  <div className="form-check ms-1">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      I agree to talk about my project with W2P IT
                    </label>
                  </div>
                </div>
                <div className="mb-0">
                  <button type="submit" className="btn btn-primary">Send Massage<i className="fas fa-arrow-right ps-3"></i></button>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-bg-logo text-center">
            <i className="fas fa-comment"></i>
          </div>
        </div>
      </div>
    </section>

    <section className="space-pb">
      <div className="container">
        <div className="row justify-content-lg-around">
          <div className="col-lg-4 col-md-5 mb-4">
            <div className="is-sticky">
              <div className="section-title">
                <h2>Doing business with us is easy</h2>
              </div>
              <Link to="#" className="btn btn-light-round btn-round">Get Direction<i className="fas fa-arrow-right ps-3"></i></Link> 
            </div>
          </div>
          <div className="col-lg-7 col-md-7 pe-lg-5">
            <div className="row">
              <div className="col-sm-6 mb-4 mb-md-5">
                <img className="img-fluid mb-4" src={maplacationimg1} alt=""/>
                <h4>Mumbai</h4>
                <h6 className="text-light mb-0">Malad(W), Mumbai, Maharashtra, 400095</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="space-pb">
      <div className="container">
        <div className="row dark-background">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-04">
              <div className="feature-info-content">
                <h4 className="mb-3 fw-normal feature-info-title">Careers</h4>
                <p>Walkout 10 years into your future and feel how it feels to carry on doing the same thing.</p>
                <Link to="careers.html" className="btn btn-primary-round btn-round text-white">View Positions<i className="fas fa-arrow-right ps-3"></i></Link> 
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-04">
              <div className="feature-info-content">
                <h4 className="mb-3 fw-normal feature-info-title">Latest News</h4>
                <p>This path is just like today, with one difference: you have 10 fewer years remaining in your life.</p>
                <Link to="blog.html" className="btn btn-primary-round btn-round text-white">Read Articles<i className="fas fa-arrow-right ps-3"></i></Link> 
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-info feature-info-style-04">
              <div className="feature-info-content">
                <h4 className="mb-3 fw-normal feature-info-title">Contact</h4>
                <p>I want you to think about how you will feel in 10 years if you continue doing the exact same things.</p>
                <Link to="contact.html" className="btn btn-primary-round btn-round text-white">Get in Touch<i className="fas fa-arrow-right ps-3"></i></Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
</>
  )
}

export default Contact