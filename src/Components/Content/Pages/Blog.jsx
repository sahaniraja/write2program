import React from 'react'
import Footer from '../../Footer/Footer'
import TopNavbar from '../../Header/TopNavbar'
import A from '../../../assets/images/blog/A.jpg'
import B from '../../../assets/images/blog/B.jpg'
import C from '../../../assets/images/blog/C.jpg'
import D from '../../../assets/images/blog/D.jpg'
import E from '../../../assets/images/blog/E.jpg'
import F from '../../../assets/images/blog/F.jpg'
import B2 from '../../../assets/images/header-inner/B2.jpg'

const Blog = () => {
  return (
<>
<TopNavbar/>
    <section className="header-inner bg-overlay-black-50" style={{backgroundImage: "url("+B2+")"}}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="header-inner-title text-center position-relative">
              <h1 className="text-white fw-normal">Blog</h1>
              <p className="text-white mb-0">The sad thing is the majority of people have no clue about what they truly want. They have no clarity. When asked the question</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="space-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={A} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Marketing</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Feb 4, 2020</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="">From a small startup to a leading global agency in 10 Years.</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={B} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Finance</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Feb 15, 2020</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="">How google’s BERT algorithm affects your website traffic</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={C} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Operations</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Sep 19, 2020</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="#">Fxive reasons why you must create a website for your company</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={D} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Strategy</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Oct 19, 2014</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="">Corporations that Prove Data is Key to Victorious Digital Transformation</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={E} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Jobs</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">March 27, 2014</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="">Google, Facebook or Instagram Which one is best for my business?</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={F} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Technology</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Feb 19, 2014</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="">Five initial steps you must do to increase your business incomes</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mt-md-5">
          <div className="col-12 text-center">
            <a href="#" className="btn btn-primary-round btn-round">Load Mores<i className="fas fa-arrow-right ps-3"></i></a>
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

export default Blog