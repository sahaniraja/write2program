import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import C05 from '../../../assets/images/about/C05.jpg'
import C06 from '../../../assets/images/about/C06.jpg'
import C07 from '../../../assets/images/about/C07.jpg'
import T01 from '../../../assets/images/team/T01.jpg'
import T02 from '../../../assets/images/team/T02.jpg'
import T03 from '../../../assets/images/team/T03.jpg'
import T04 from '../../../assets/images/team/T04.jpg'
import T05 from '../../../assets/images/team/T05.jpg'
import T06 from '../../../assets/images/team/T06.jpg'
import T07 from '../../../assets/images/team/T07.jpg'
import T08 from '../../../assets/images/team/T08.jpg'
import T09 from '../../../assets/images/team/T09.jpg'
import T10 from '../../../assets/images/team/T10.jpg'
import T11 from '../../../assets/images/team/T11.jpg'
import A01 from '../../../assets/images/avatar/A01.jpg'
import A02 from '../../../assets/images/avatar/A02.jpg'
import AW01 from '../../../assets/images/awardlogo/AW01.svg'
import AW02 from '../../../assets/images/awardlogo/AW02.svg'
import AW03 from '../../../assets/images/awardlogo/AW03.svg'

const OurTeam = () => {
  return (
<>
<TopNavbar/>

{/* Our Team */}
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h1>Our Team</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h2 className="mb-3">We enable constant enterprise transformation at speed and scale.</h2>
              <p>We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success. Things like “I’m not good enough”, “I’m not smart enough”, “I’m not lucky enough”, and the worst,</p>
            </div>
            <a href="#" className="btn btn-light-round btn-round w-space">Know More About<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <img className="img-fluid border-radius mb-4 mt-4" src={C05} alt="" />
                <img className="img-fluid border-radius mb-4 mb-sm-0" src={C06}alt="" />
              </div>
              <div className="col-sm-6">
                <img className="img-fluid border-radius mb-4" src={C07} alt="" />
                <div className="counter counter-03">
                  <div className="counter-content">
                    <span className="timer" data-to="491" data-speed="10000">339</span>
                    <label>Projects Complete</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="space-pb overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>Meet our heroes</h2>
              <p className="lead">Our team is friendly, talkative, and fully reliable.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T01} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Aaron Sharp</a>
                <p>Chief People Officer</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T02} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Homer Reyes</a>
                <p>Vice President</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T03}alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Felica Queen</a>
                <p>Team Leader</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T04} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Sara Lisbon</a>
                <p>Production Manager</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T05} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Michael Bean</a>
                <p>Quality control</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T06} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Alice Williams </a>
                <p>Marketing manager</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T07} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Paul Flavius</a>
                <p>Human resources</p>
                <ul className="list-unstyled">
                  <li><a href="#"> <i className="fab fa-facebook-f"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-linkedin-in"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T08} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Anne Smith</a>
                <p>Sales and Marketing</p>
                <ul className="list-unstyled">
                  <li><a href="#"> <i className="fab fa-facebook-f"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-linkedin-in"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T09} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Mellissa Doe</a>
                <p>Marketing Expert</p>
                <ul className="list-unstyled">
                  <li><a href="#"> <i className="fab fa-facebook-f"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-linkedin-in"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T10} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Ben Aguilar</a>
                <p>Community</p>
                <ul className="list-unstyled">
                  <li><a href="#"> <i className="fab fa-facebook-f"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
                  <li><a href="#"> <i className="fab fa-linkedin-in"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team">
              <div className="team-bg"></div>
              <div className="team-img">
                <img className="img-fluid" src={T11} alt="" />
              </div>
              <div className="team-info">
                <a href="#" className="team-name">Kim Hamilton</a>
                <p>Developer</p>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="team apply-position">
              <div className="team-icon">
                <i className="far fa-user-circle"></i>
              </div>
              <div className="team-info">
                <a href="#" className="btn btn-link">Apply for Possition<i className="fas fa-arrow-right text-dark ps-1"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Testimonial */}
    <section className="space-pb pt-4 pt-md-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <div className="owl-carousel testimonial" data-nav-arrow="true" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
              <div className="item">
                <div className="testimonial-item">
                  <div className="testimonial-avatar shadow">
                    <img className="img-fluid rounded-circle" src={A01} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-name">
                      <h6 className="mb-1">Alice Williams</h6>
                      <span>Vetrov Systems Development</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="testimonial-avatar shadow">
                    <img className="img-fluid rounded-circle" src={A02} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>The hi-soft database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead.</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-name">
                      <h6 className="mb-1">Michael Bean</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* ClientLogo */}
    <section className="space-pb our-clients">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary mb-0">Awards and Nominees</h5>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-8">
            <div className="owl-carousel testimonial-center owl-nav-bottom-center" data-nav-arrow="false" data-items="5" data-md-items="4" data-sm-items="4" data-xs-items="3" data-xx-items="2" data-space="40" data-autoheight="true">
              <div className="item">
                <img className="img-fluid grayscale" src={AW01} alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src={AW02} alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src={AW03} alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src="images/award-logo/04.svg" alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src="images/award-logo/05.svg" alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src="images/award-logo/06.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* News */}
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

export default OurTeam