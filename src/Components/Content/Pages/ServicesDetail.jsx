import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import F01 from '../../../assets/images/feature-info/F01.jpg'
import C06 from '../../../assets/images/about/C06.jpg'

const ServicesDetail = () => {
  return (
<>
<TopNavbar/>

    <section className="space-ptb">
      <div className="container">
      <div classNameName="row justify-content-center">
          <div classNameName="col-lg-8">
            <div classNameName="section-title text-center">
              <h1>Services Detail</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="service-details">
              <h4 className="fw-bold">Information Security</h4>
              <p className="mb-4 mb-md-5">Do it today. Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow will come.You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing. If you were choose the path to the right, the right path, there are new possibilities, achievement, freedom of mind, positive and progressive implications. Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.</p>
              <img className="img-fluid border-radius mb-4 mb-md-5" src={F01} alt=""/>
              <p className="mb-4 mb-md-5">Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your ways to greatness.</p>
              <ul className="list list-unstyled mb-4 mb-md-5">
                <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Use a past defeat as a motivator. Remind yourself you have nowhere to go except</span></li>
                <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Give yourself the power of responsibility. </span></li>
                <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Remind yourself the only thing stopping you is yourself.</span></li>
                <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Make a list of your achievements toward your long-term</span></li>
                <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>goal and remind yourself that intentions don’t count, only actions.</span></li>
              </ul>
              <p className="mb-4 mb-md-5 ps-4 border-left font-italic">Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal.</p>
              <div className="row mb-4 mb-md-5">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img className="img-fluid border-radius" src={C06} alt=""/>
                </div>
                <div className="col-md-6">
                  <h4 className="fw-bold">The Benefit</h4>
                  <p className="mb-4">You carry on doing the same things, living the same way and dealing with this thing in the same way as you have been doing.</p>
                  <ul className="list list-unstyled mb-4">
                    <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Use a past defeat</span></li>
                    <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Give yourself the power</span></li>
                    <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Remind yourself </span></li>
                    <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>Achievements toward </span></li>
                    <li className="d-flex"><i className="fas fa-check pe-2 pt-1 text-primary"></i><span>goal and remind yourself </span></li>
                  </ul>
                  <p className="mb-0">Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths.</p>
                </div>
              </div>
              <h4 className="fw-bold">Capabilities</h4>
              <div className="row mb-4 mb-md-5">
                <div className="col-md-6">
                  <h5>Strategy</h5>
                  <p>Next time you really want to achieve something, take time to focus on your own personal journal.</p>
                </div>
                <div className="col-md-6">
                  <h5>Restructuring</h5>
                  <p>This is perhaps the single biggest obstacle that all of us must overcome in order to be successful.</p>
                </div>
              </div>
              <h4 className="fw-bold mb-4">Please contact us via below from for more info</h4>
              <form className="row">
                <div className="col-md-4 mb-4">
                  <input type="text" className="form-control" id="exampleInputName" placeholder="Name"/>
                </div>
                <div className="col-md-4 mb-4">
                  <input type="text" className="form-control" id="exampleInputLname" placeholder="Last Name"/>
                </div>
                <div className="col-md-4 mb-4">
                  <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email Address"/>
                </div>
                <div className="col-md-12 mb-4">
                  <textarea className="form-control" rows="5" id="exampleInputEnquiry" placeholder="Enquiry Description"></textarea>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   i agree to talk about my project with Hi-soft
                  </label>
                </div>
                </div>
                <div className="col-md-12 mb-0">
                  <button type="submit" className="btn btn-primary">Send Massage<i className="fas fa-arrow-right ps-3"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

<Footer/>
</>
  )
}

export default ServicesDetail