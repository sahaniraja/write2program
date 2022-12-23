import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import F01 from '../../../assets/images/feature-info/F01.jpg'
import F02 from '../../../assets/images/feature-info/F02.jpg'
import F03 from '../../../assets/images/feature-info/F03.jpg'
import F04 from '../../../assets/images/feature-info/F04.jpg'
import F05 from '../../../assets/images/feature-info/F05.jpg'
import F06 from '../../../assets/images/feature-info/F06.jpg'

const Services = () => {
  return (
<>
<TopNavbar/>

    <section className="space-ptb">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h1>IT Solutions & Services</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-info feature-info-style-02 h-100">
              <div className="feature-info-icon">
                <i className="flaticon-data"></i>
                <h5 className="mb-0 ms-4 feature-info-title">Information Security</h5>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.</p>
                <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
              <div className="feature-info-bg-img" style={{backgroundImage: "url("+F01+")"}}></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-info feature-info-style-02 h-100">
              <div className="feature-info-icon">
                <i className="flaticon-author"></i>
                <h5 className="mb-0 ms-4 feature-info-title">Data Synchronization</h5>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately.</p>
                <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
              <div className="feature-info-bg-img" style={{backgroundImage: "url("+F02+")"}}></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="feature-info feature-info-style-02 h-100">
              <div className="feature-info-icon">
                <i className="flaticon-icon-149196"></i>
                <h5 className="mb-0 ms-4 feature-info-title">Mobile Platforms</h5>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success.</p>
                <a href="/" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
              <div className="feature-info-bg-img" style={{backgroundImage: "url("+F03+")"}}></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-02 h-100">
              <div className="feature-info-icon">
                <i className="flaticon-chart"></i>
                <h5 className="mb-0 ms-4 feature-info-title">Process Automation</h5>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">It must come from within as the natural product of your desire to achieve something and your belief that you are capable to succeed at your goal.</p>
                <a href="/" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
              <div className="feature-info-bg-img" style={{backgroundImage: "url("+F04+")"}}></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="feature-info feature-info-style-02 h-100">
              <div className="feature-info-icon">
                <i className="flaticon-design"></i>
                <h5 className="mb-0 ms-4 feature-info-title">Event Processing</h5>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing to do with luck,</p>
                <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
              <div className="feature-info-bg-img" style={{backgroundImage: "url("+F05+")"}}></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-info feature-info-style-02 h-100">
              <div className="feature-info-icon">
                <i className="flaticon-group"></i>
                <h5 className="mb-0 ms-4 feature-info-title">Content Management</h5>
              </div>
              <div className="feature-info-content">
                <p className="mb-0">There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight.</p>
                <a href="service-detail.html" className="icon-btn"><i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
              <div className="feature-info-bg-img" style={{backgroundImage: "url("+F06+")"}}></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-md-flex justify-content-center align-items-center">
            <p className="mb-3 mb-md-0 mx-0 mx-md-3">Start now! Your big opportunity may be right where you are!</p>
            <a href="#" className="btn btn-primary-round btn-round mx-0 mx-md-3">See All Services<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
      </div>
    </section>


    <section className="space-pb dark-background">
      <div className="container">
        <div className="bg-dark text-center rounded py-5 px-3">
          <h2 className="text-white">Tell us about your idea, and we’ll make it happen.</h2>
          <h6 className="text-white">Have a brand problem that needs to be solved? We’d love to hear about it!</h6>
          <a href="#" className="btn btn-primary-round btn-round mx-0 mx-md-3 text-white">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
        </div>
      </div>
    </section>

<Footer/>
</>
  )
}

export default Services