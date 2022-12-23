import React from 'react'
import {Link} from 'react-router-dom'
import TopNavbar from '../../Header/TopNavbar'
import Footer from '../../Footer/Footer'
import C08 from '../../../assets/images/about/C08.jpg'
import C09 from '../../../assets/images/about/C09.jpg'
import G01 from '../../../assets/images/gallery/G01.jpg'
import G02 from '../../../assets/images/gallery/G02.jpg'
import G03 from '../../../assets/images/gallery/G03.jpg'
import G04 from '../../../assets/images/gallery/G04.jpg'
import G05 from '../../../assets/images/gallery/G05.jpg'
import G06 from '../../../assets/images/gallery/G06.jpg'
import G07 from '../../../assets/images/gallery/G07.jpg'
import G08 from '../../../assets/images/gallery/G08.jpg'
import F01 from '../../../assets/images/feature-info/F01.jpg'
import F02 from '../../../assets/images/feature-info/F02.jpg'
import F03 from '../../../assets/images/feature-info/F03.jpg'
import F04 from '../../../assets/images/feature-info/F04.jpg'
import F05 from '../../../assets/images/feature-info/F05.jpg'
import F06 from '../../../assets/images/feature-info/F06.jpg'

const Career = () => {

  return (
    <>
    <TopNavbar/>

    {/* About Us */}

    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h1>Careers</h1>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row g-0 d-flex align-items-end mb-4 mb-sm-2">
              <div className="col-sm-8 pe-sm-2 mb-4 mb-sm-0">
                <img className="img-fluid border-radius" src={C08} alt="" />
              </div>
              <div className="col-sm-4">
                <div className="counter counter-03 py-5">
                  <div className="counter-content">
                    <span className="timer" data-to="491" data-speed="1000">80</span>
                    <label>Projects Complete </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6">
                <img className="img-fluid border-radius" src={C09} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-xl-5">
            <h2 className="mb-4">We enable constant enterprise transformation at speed and scale.</h2>
            <p className="mb-4">Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way! Pretty sad situation, to say the least.</p>
            <ul className="list list-unstyled ckeck-list">
              <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Success is something of which we all want more</span></li>
              <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Most people believe that success is difficult</span></li>
              <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>There are basically six key areas to higher achievement</span></li>
              <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Believing in yourself and those around you</span></li>
              <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Making a decision to do something</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* portfolio */}
    <section className="space-pb popup-gallery overflow-hidden">
      <div className="container-fluid">
        <div className="row d-flex align-items-end">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid" src={G01} alt="" /></a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid w-100" src={G02} alt="" /></a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid" src={G03} alt="" /></a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid" src={G04} alt="" /></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mt-0 mt-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid" src={G05} alt="" /></a>
          </div>
          <div className="col-md-6 col-lg-3 mt-4 mt-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid w-100" src={G06} alt="" /></a>
          </div>
          <div className="col-md-6 col-lg-3 mt-4 mt-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid" src={G07} alt="" /></a>
          </div>
          <div className="col-md-6 col-lg-3 mt-4 mt-lg-3">
            <a className="portfolio-img" href="/"><img className="img-fluid" src={G08} alt="" /></a>
          </div>
        </div>
      </div>
    </section>

    {/* Category */}
    <section className="space-ptb bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <h2 className="mb-3 mb-lg-0">Four reasons why you should choose our service</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a href="#" className="btn btn-white-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
        <div className="row mt-4 mt-lg-5">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-5 mb-lg-0">
            <div className="feature-info feature-info-style-06">
              <div className="feature-info-img">
                <img className="img-fluid" src={F01} alt="" />
              </div>
              <div className="feature-info-number mb-0">
                <span>01</span>
                <h5 className="mb-0 ms-4 feature-info-title">We know your business already</h5>
              </div>
              <p className="mt-4 mb-0">The sad thing is the majority of people have no clue about what they truly want. They have no clarity.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-5 mb-lg-0">
            <div className="feature-info feature-info-style-06">
              <div className="feature-info-img">
                <img className="img-fluid" src={F02} alt="" />
              </div>
              <div className="feature-info-number mb-0">
                <span>02</span>
                <h5 className="mb-0 ms-4 feature-info-title">Building context – not just code</h5>
              </div>
              <p className="mt-4 mb-0">What steps are required to get you to the goals? Make the plan as detailed as possible.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="feature-info feature-info-style-06">
              <div className="feature-info-img">
                <img className="img-fluid" src={F03} alt="" />
              </div>
              <div className="feature-info-number mb-0">
                <span>03</span>
                <h5 className="mb-0 ms-4 feature-info-title">We are responsive and flexible</h5>
              </div>
              <p className="mt-4 mb-0">This is perhaps the single biggest obstacle that all of us must overcome in order to be successful.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-info feature-info-style-06">
              <div className="feature-info-img">
                <img className="img-fluid" src={F04} alt="" />
              </div>
              <div className="feature-info-number mb-0">
                <span>04</span>
                <h5 className="mb-0 ms-4 feature-info-title">10 years experience – and counting</h5>
              </div>
              <p className="mt-4 mb-0">To make these virtues a habit, Franklin can up with a method to grade himself on his daily actions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Career Opportunities */}

    <section className="space-ptb">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>Current career opportunities at Hi-soft</h2>
              <p>Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.</p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <div className="accordion" id="career-opportunities">
              <div className="card">
                <div className="accordion-icon card-header" id="headingOne">
                  <h4 className="mb-0">
                  <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#security-manager" aria-expanded="true" aria-controls="security-manager">IT & Security Manager</button>
                  </h4>
                </div>
                <div id="security-manager" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">From two to five he worked at his trade. The rest of the evening until 10 he spent in music, or diversion of some sort. This time is used also to put things in their places. In the last thing before retiring was examination of the day. At the age of 79, he ascribed his health to temperance; the acquisition of misfortune to industry and frugality; the confidence of his country to sincerity and justice.</p>
                    <ul className="list list-unstyled ckeck-list mb-4 mb-md-5">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Success is something of which we all want more</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Most people believe that success is difficult</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>There are basically six key areas to higher achievement</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Believing in yourself and those around you</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Making a decision to do something</span></li>
                    </ul>
                    <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingTwo">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#business-partner" aria-expanded="false" aria-controls="business-partner">Junior HR Business Partner</button>
                  </h4>
                </div>
                <div id="business-partner" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                    <ul className="list list-unstyled ckeck-list mb-4 mb-md-5">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Making the decisio</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Clarity – developing the Vision</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Commitment – understanding the price and having the willingness to pay that price</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Belief – believing in yourself and those around you</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Taking action – practice Ready, Fire, Aim…</span></li>
                    </ul>
                    <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingThree">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#outreach-representative" aria-expanded="false" aria-controls="outreach-representative">Junior Outreach Representative</button>
                  </h4>
                </div>
                <div id="outreach-representative" className="collapse" aria-labelledby="headingThree" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives. Telephones and e-mail, clients and managers, spouses and kids, TV, newspapers and radio – the distractions are everywhere and endless. Everyone wants a piece of us and the result can be totally overwhelming.</p>
                    <ul className="list list-unstyled ckeck-list mb-4 mb-md-5">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>So, how can we stay on course with all the distractions</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>The best way is to develop and follow a plan. Start with your goals</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>What steps are required to get you to the goals? Make the plan as detailed as possible.</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Try to visualize and then plan for, every possible setback.</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Commit the plan to paper and then keep it with you at all times.</span></li>
                    </ul>
                    <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingFour">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#salesforce-developer" aria-expanded="false" aria-controls="salesforce-developer">Senior Salesforce Developer</button>
                  </h4>
                </div>
                <div id="salesforce-developer" className="collapse" aria-labelledby="headingFour" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times. This requires a little self-discipline, but is a crucial component to achievement of any kind. Before starting any new activity, ask yourself if that activity will move you closer to your goals.</p>
                    <ul className="list list-unstyled ckeck-list mb-4 mb-md-5">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>If the answer is no, you may want to reconsider doing it</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>I coach my clients to practice the 3 D’s – Defer, Delegate or Delete</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Can the particular activity be done later? Defer it!</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Commitment is something that comes from understanding that everything</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>This is important because nobody wants to put significant effort into</span></li>
                    </ul>
                    <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingFive">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#development-manager" aria-expanded="false" aria-controls="development-manager">Senior Business Development Manager</button>
                  </h4>
                </div>
                <div id="development-manager" className="collapse" aria-labelledby="headingFive" data-bs-parent="#career-opportunities">
                  <div className="card-body pb-0">
                    <p className="mb-4">It is truly amazing the damage that we, as parents, can inflict on our children. So why do we do it? For the most part, we don’t do it intentionally or with malice. In the majority of cases, the cause is a well-meaning but unskilled or un-thinking parent, who says the wrong thing at the wrong time, and the message sticks – as simple as that!</p>
                    <ul className="list list-unstyled ckeck-list mb-4 mb-md-5">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>One of the main areas that I work on with my clients</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>And it’s not just parents that are the cause – teachers</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Nothing changes until something moves</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Get the oars in the water and start rowing.</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span> Execution is the single biggest factor in achievement</span></li>
                    </ul>
                    <a href="#" className="btn btn-light-round btn-round w-space">Let’s Get Started<i className="fas fa-arrow-right ps-3"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mt-md-5">
          <div className="col text-center">
            <p>Don’t see a role that fits? Send us your resume.</p>
            <a href="#" className="btn btn-primary btn-round text-white w-space">Contact Us<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Career