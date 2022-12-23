import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import C10 from '../../../assets/images/about/C10.jpg';
import C11 from '../../../assets/images/about/C11.jpg';
import AW01 from '../../../assets/images/awardlogo/AW01.svg'
import AW02 from '../../../assets/images/awardlogo/AW02.svg'
import AW03 from '../../../assets/images/awardlogo/AW03.svg'
import AW04 from '../../../assets/images/awardlogo/AW04.svg'
import AW05 from '../../../assets/images/awardlogo/AW05.svg'
import AW06 from '../../../assets/images/awardlogo/AW06.svg'

const HowWeWork = () => {
  return (
<>
<TopNavbar/>
{/* How We Work */}
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
                <h1>How We Work</h1>
              <h2>Making a decision to do something this is the first step. We all know that nothing moves until someone makes a decision.</h2>
              <p className="mb-4">Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal.</p>
              <p>I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in the world with amazing talents who realize only a small percentage of their potential. We all know people who live this truth.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <img className="img-fluid border-radius" src={C10} alt="" />
          </div>
          <div className="col-sm-6">
            <img className="img-fluid border-radius" src={C11} alt="" />
          </div>
        </div>
    </div>
    </section>

    {/* History */}
    <section className="space-pb">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-title is-sticky">
              <h2>Smart strategy & excellent performance</h2>
              <p className="mb-4 mb-md-5">Process that guarantees high productivity and profitability for your solution.</p>
              <a href="#" className="btn btn-light-round btn-round">Let's Start Project<i className="fas fa-arrow-right ps-3"></i></a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-info feature-info-style-08">
              <div className="feature-info-inner">
                <div className="feature-info-item">
                  <div className="feature-info-number"><span>01</span></div>
                  <div className="feature-info-content">
                    <h5 className="mb-3 feature-info-title">Analysis</h5>
                    <p className="mb-0">Then with that thing in mind, follow these simple steps. Step One: Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here. </p>
                  </div>
                </div>
                <div className="feature-info-item">
                  <div className="feature-info-number"><span>02</span></div>
                  <div className="feature-info-content">
                    <h5 className="mb-3 feature-info-title">Design</h5>
                    <p className="mb-0">That is your imagination doing that. You know the sound that your feet make when you walk across gravel don’t you? You can imagine it, but you are not hearing it in your ears, are you? Just imagine these things as best as you can.</p>
                  </div>
                </div>
                <div className="feature-info-item">
                  <div className="feature-info-number"><span>03</span></div>
                  <div className="feature-info-content">
                    <h5 className="mb-3 feature-info-title">Development</h5>
                    <p className="mb-0">Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make.</p>
                  </div>
                </div>
                <div className="feature-info-item">
                  <div className="feature-info-number"><span>04</span></div>
                  <div className="feature-info-content">
                    <h5 className="mb-3 feature-info-title">Testing</h5>
                    <p className="mb-0">Engage with the idea of really being there. Step Three: Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think.</p>
                  </div>
                </div>
                <div className="feature-info-item">
                  <div className="feature-info-number"><span>05</span></div>
                  <div className="feature-info-content">
                    <h5 className="mb-3 feature-info-title">Go-Live</h5>
                    <p className="mb-0">Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Pricing */}
    <section className="space-pb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>Choose the plan that works for you</h2>
              <p>Our pricing works for enterprises of all sizes. Starting at just $19 per month</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pb-4 pb-md-0">
            <div className="pricing">
              <h4 className="pricing-title">Basic</h4>
              <p className="mb-0">Only the basics - Everything you need to get started. Best for startup</p>
              <span className="pricing-price">
                <sup>$</sup>
                <strong>19</strong>
                /month
              </span>
              <ul className="list-unstyled pricing-list">
                <li>5 Analytics Campaign</li>
                <li><s>Branded Reports</s></li>
                <li>500 Keywords</li>
                <li><s>0 Social Account</s></li>
                <li>Phone & Email Support</li>
              </ul>
              <a href="#" className="btn btn-light-round btn-round">Select Plan<i className="fas fa-arrow-right ps-3"></i></a>
            </div>
          </div>
          <div className="col-md-4 pb-4 pb-md-0">
            <div className="pricing active">
              <h4 className="pricing-title">Standard</h4>
              <p className="mb-0">When you are ready to grow, We will grow with you. Get a Standard plan</p>
              <span className="pricing-price">
                <sup>$</sup>
                <strong>39</strong>
                /month
              </span>
              <ul className="list-unstyled pricing-list">
                <li>30 Analytics Campaign</li>
                <li>Branded Reports</li>
                <li><s>700 Keywords</s></li>
                <li>100 Social Account</li>
                <li>Phone & Email Support</li>
              </ul>
              <a href="#" className="btn btn-light-round btn-round">Select Plan<i className="fas fa-arrow-right ps-3"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing">
              <h4 className="pricing-title">Professional</h4>
              <p className="mb-0">Ready to kick it up a notch? Go for big with Professional membership</p>
              <span className="pricing-price">
                <sup>$</sup>
                <strong>69</strong>
                /month
              </span>
              <ul className="list-unstyled pricing-list">
                <li>50 Analytics Campaign</li>
                <li>Branded Reports</li>
                <li>900 Keywords</li>
                <li>200 Social Account</li>
                <li>Phone & Email Support</li>
              </ul>
              <a href="#" className="btn btn-light-round btn-round">Select Plan<i className="fas fa-arrow-right ps-3"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Client Logo */}
    <section className="space-pb our-clients">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary mb-0">Awards and Nominees</h5>
          </div>
          <div className="col-xl-9 col-md-8">
            <div className="owl-carousel" data-nav-arrow="false" data-items="5" data-md-items="5" data-sm-items="4" data-xs-items="3" data-xx-items="2" data-space="40" data-autoheight="true">
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
                <img className="img-fluid grayscale" src={AW04} alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src={AW05} alt="" />
              </div>
              <div className="item">
                <img className="img-fluid grayscale" src={AW06} alt="" />
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

export default HowWeWork