import React from 'react';
import A from '../../assets/images/blog/A.jpg'
import B from '../../assets/images/blog/B.jpg'
import C from '../../assets/images/blog/C.jpg'
import D from '../../assets/images/blog/D.jpg'
import E from '../../assets/images/blog/E.jpg'
import F from '../../assets/images/blog/F.jpg'

const Blog = () => {
  return (
    <>
    {/* Start Blog Section */}
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>Latest technology and inspirational stories</h2>
              <p>Check out our latest blog posts, articles, client success stories and essential announcement.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={A} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Operations</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Feb 4, 2022</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="#">From a small startup to a leading global organization in 10 Years</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={B} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Marketing</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Feb 15, 2022</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="#">How SEO works and affects your website traffic</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="blog-post">
              <div className="blog-post-image">
                <img className="img-fluid" src={C} alt=""/>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-info">
                  <div className="blog-post-author">
                    <a href="#" className="btn btn-light-round btn-round text-primary">Finance</a>
                  </div>
                  <div className="blog-post-date">
                    <a href="#">Sep 19, 2022</a>
                  </div>
                </div>
                <div className="blog-post-details">
                  <h5 className="blog-post-title">
                    <a href="#">Five reasons why you must create a website for your company</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row mt-5">
          <div className="col-12 d-md-flex justify-content-center align-items-center">
            <p className="mb-3 mb-md-0 mx-0 mx-md-3 text-light">We have articles on a range of topics</p>
            <a href="#" className="btn btn-primary-round btn-round mx-0 mx-md-3">View all Blogs<i className="fas fa-arrow-right ps-3"></i></a>
          </div>
        </div>
      </div>
    </section>
    {/* End Blog Section */}
    </>
  )
}

export default Blog