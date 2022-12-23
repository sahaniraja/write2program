import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import H05 from '../../../assets/images/header-inner/H05.jpg'

const Faq = () => {
  return (
<>
<TopNavbar/>

    <section class="header-inner bg-overlay-black-50" style={{backgroundImage: "url("+H05+")"}}>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <div class="header-inner-title text-center position-relative">
              <h1 class="text-white fw-normal">Frequently Asked Questions</h1>
              <p class="text-white mb-0">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="space-ptb">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <div className="accordion" id="career-opportunities">
              <div className="card">
                <div className="accordion-icon card-header" id="headingOne">
                  <h4 className="mb-0">
                  <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#security-manager" aria-expanded="true" aria-controls="security-manager">I have some questions about privacy. Who can I ask?</button>
                  </h4>
                </div>
                <div id="security-manager" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">From two to five he worked at his trade. The rest of the evening until 10 he spent in music, or diversion of some sort. This time is used also to put things in their places. In the last thing before retiring was examination of the day. At the age of 79, he ascribed his health to temperance; the acquisition of misfortune to industry and frugality; the confidence of his country to sincerity and justice.</p>
                    <ul className="list list-unstyled ckeck-list mb-0">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Success is something of which we all want more</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Most people believe that success is difficult</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>There are basically six key areas to higher achievement</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Believing in yourself and those around you</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Making a decision to do something</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingTwo">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#business-partner" aria-expanded="false" aria-controls="business-partner">What is the cost of a Service Agreement?</button>
                  </h4>
                </div>
                <div id="business-partner" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight. One thing for certain though, is that irrespective of the number of steps the experts talk about, they all originate from the same roots.</p>
                    <ul className="list list-unstyled ckeck-list mb-0">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Making the decisio</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Clarity – developing the Vision</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Commitment – understanding the price and having the willingness to pay that price</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Belief – believing in yourself and those around you</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Taking action – practice Ready, Fire, Aim…</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingThree">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#outreach-representative" aria-expanded="false" aria-controls="outreach-representative">Why IT Staff Management?</button>
                  </h4>
                </div>
                <div id="outreach-representative" className="collapse" aria-labelledby="headingThree" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives. Telephones and e-mail, clients and managers, spouses and kids, TV, newspapers and radio – the distractions are everywhere and endless. Everyone wants a piece of us and the result can be totally overwhelming.</p>
                    <ul className="list list-unstyled ckeck-list mb-0">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>So, how can we stay on course with all the distractions</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>The best way is to develop and follow a plan. Start with your goals</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>What steps are required to get you to the goals? Make the plan as detailed as possible.</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Try to visualize and then plan for, every possible setback.</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Commit the plan to paper and then keep it with you at all times.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingFour">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#salesforce-developer" aria-expanded="false" aria-controls="salesforce-developer">I am worried about e-mail scams...</button>
                  </h4>
                </div>
                <div id="salesforce-developer" className="collapse" aria-labelledby="headingFour" data-bs-parent="#career-opportunities">
                  <div className="card-body">
                    <p className="mb-4">Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times. This requires a little self-discipline, but is a crucial component to achievement of any kind. Before starting any new activity, ask yourself if that activity will move you closer to your goals.</p>
                    <ul className="list list-unstyled ckeck-list mb-0">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>If the answer is no, you may want to reconsider doing it</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>I coach my clients to practice the 3 D’s – Defer, Delegate or Delete</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Can the particular activity be done later? Defer it!</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Commitment is something that comes from understanding that everything</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>This is important because nobody wants to put significant effort into</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordion-icon card-header" id="headingFive">
                  <h4 className="mb-0">
                  <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#development-manager" aria-expanded="false" aria-controls="development-manager">What are the Benefits of our service?</button>
                  </h4>
                </div>
                <div id="development-manager" className="collapse" aria-labelledby="headingFive" data-bs-parent="#career-opportunities">
                  <div className="card-body pb-0">
                    <p className="mb-4">It is truly amazing the damage that we, as parents, can inflict on our children. So why do we do it? For the most part, we don’t do it intentionally or with malice. In the majority of cases, the cause is a well-meaning but unskilled or un-thinking parent, who says the wrong thing at the wrong time, and the message sticks – as simple as that!</p>
                    <ul className="list list-unstyled ckeck-list mb-0">
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>One of the main areas that I work on with my clients</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>And it’s not just parents that are the cause – teachers</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Nothing changes until something moves</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Get the oars in the water and start rowing.</span></li>
                      <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span> Execution is the single biggest factor in achievement</span></li>
                    </ul>
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

export default Faq