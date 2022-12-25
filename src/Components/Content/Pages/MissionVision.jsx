import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import A from '../../../assets/images/blog/A.jpg'
import B from '../../../assets/images/blog/B.jpg'
import C from '../../../assets/images/blog/C.jpg'
import B07 from '../../../assets/images/bg/B07.png'

const MissionVision = () => {
  return (
<>
<TopNavbar/>

    <section className="space-pt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
                <h1>Our Mission & Vision</h1>
              <h2>We enable constant enterprise transformation at speed and scale.</h2>
              <p>We are a creative company, who works with passion and love. We provide the best services you need. We help you to get better, We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <div className="feature-info feature-info-style-02 bg-dark text-white">
              <div className="feature-info-icon">
                <i className="flaticon-eye text-white"></i>
                <h4 className="mb-0 ms-4 feature-info-title text-white">Our Vision</h4>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">To make these virtues a habit, himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="feature-info feature-info-style-02 bg-primary text-white">
              <div className="feature-info-icon">
                <i className="flaticon-target text-white"></i>
                <h4 className="mb-0 ms-4 feature-info-title text-white">Our Mission</h4>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-sm-12">
            <img className="img-fluid" src={B07} alt="" />
          </div>
        </div>
      </div>
    </section>



    <section className="space-ptb">
      <div className="container">
        <div className="row d-lg-flex align-items-center justify-content-center pb-4 pb-md-5">
          <div className="col-lg-6">
            <h2 className="mb-3 mb-lg-0">Three reasons why you should choose our service</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-07">
              <div className="feature-info-img">
                <img className="img-fluid" src={A} alt="" />
              </div>
              <div className="feature-info-content">
                <h4 className="feature-info-title">Mission and vision</h4>
                <p>Our Vision & Mission are both helping our team to achieve the goal. We identify the clients' requirements and provide the best solutions.</p>
                <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-07">
              <div className="feature-info-img">
                <img className="img-fluid" src={B} alt="" />
              </div>
              <div className="feature-info-content">
                <h4 className="feature-info-title">Our challenges</h4>
                <p>We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.</p>
                <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-info feature-info-style-07">
              <div className="feature-info-img">
                <img className="img-fluid" src={C} alt="" />
              </div>
              <div className="feature-info-content">
                <h4 className="feature-info-title">Meet the our team</h4>
                <p>Meet our institute leaders and the hard-working personalities who deliver innovative concepts to corporations like yours.</p>
                <a href="#" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="space-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="counter counter-02">
              <div className="counter-icon align-self-center">
                <i className="flaticon-emoji"></i>
              </div>
              <div className="counter-content align-self-center">
                <span className="timer" data-to="1790" data-speed="10000">1790</span>
                <label>Happy Clients</label>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter counter-02">
              <div className="counter-icon">
                <i className="flaticon-trophy"></i>
              </div>
              <div className="counter-content">
                <span className="timer" data-to="245" data-speed="10000">32</span>
                <label>Skilled Experts</label>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter counter-02">
              <div className="counter-icon">
                <i className="flaticon-strong"></i>
              </div>
              <div className="counter-content">
                <span className="timer" data-to="491" data-speed="10000">491</span>
                <label>Finished Projects</label>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter counter-02">
              <div className="counter-icon">
                <i className="flaticon-icon-149196"></i>
              </div>
              <div className="counter-content">
                <span className="timer" data-to="1090" data-speed="10000">1090</span>
                <label>Media Posts</label>
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
                <a href="careers.html" className="btn btn-primary-round btn-round text-white">View Positions<i className="fas fa-arrow-right ps-3"></i></a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-04">
              <div className="feature-info-content">
                <h4 className="mb-3 fw-normal feature-info-title">Latest News</h4>
                <p>This path is just like today, with one difference: you have 10 fewer years remaining in your life.</p>
                <a href="blog.html" className="btn btn-primary-round btn-round text-white">Read Articles<i className="fas fa-arrow-right ps-3"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-info feature-info-style-04">
              <div className="feature-info-content">
                <h4 className="mb-3 fw-normal feature-info-title">Contact</h4>
                <p>I want you to think about how you will feel in 10 years if you continue doing the exact same things.</p>
                <a href="contact.html" className="btn btn-primary-round btn-round text-white">Get in Touch<i className="fas fa-arrow-right ps-3"></i></a>
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

export default MissionVision