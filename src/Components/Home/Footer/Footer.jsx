import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="section footer pt-5">
    <div className="footer-main">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-md-5 ">
                            <div className="edugate-widget widget">
                                <div className="title-widget">Write2Program.com</div>
                                <div className="content-widget">
                                    <p>
                                        Write2Program.com is designed and developed for learning web technologies with various realtime problems.
                                        Examples provided will be simplified to enhance programming skills and basic understanding.
                                        While using this site, you agree to have read and accepted our terms
                                        of use and <Link to="our-pages/privacy-policy">privacy policy</Link>.
                                    </p>
                                    {/* <div className="info-list">
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-envelope-o"></i>
                                            <a href="/cdn-cgi/l/email-protection#0e686b6b6a6c6f6d654e7a7b7a617c676f627d7a6b6f6d666b7c206d6163"> <span className="__cf_email__" data-cfemail="21474444454340424a615554554e5348404d52554440424944530f424e4c">[email protected]</span></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="useful-link-widget widget">
                                <div className="title-widget">Programs</div>
                                <div className="content-widget">
                                    <div className="useful-link-list">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4">
                                                <ul className="list-unstyled">
                                                    <li><i className="fa fa-angle-right"></i><a href="/">PHP</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Node.js</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Python</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Golang</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">C#</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Java</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-sm-4 ">
                                                <ul className="list-unstyled">
                                                    <li><i className="fa fa-angle-right"></i><a href="/">SQL</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">MySQL</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">MongoDB</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">SQL Server</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">PostgreSQL</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Redis</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-sm-4 ">
                                                <ul className="list-unstyled">
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Linux</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Windows</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">AWS</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Google Cloud</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Azure</a></li>
                                                    <li><i className="fa fa-angle-right"></i><a href="/">Digital Ocean</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="mailing-widget widget">
                                <div className="title-widget">E-mail list</div>
                                <div className="content-wiget">
                                    <p>
                                        Subscribe us with Write2Program email list and get latest updates, tips &
                                        tricks on PHP, Java, Python, Node.js, MySQL, SQL Server, Linux to your inbox.
                                    </p>
                                    <form action="#" method="post" id="subscribe-form" name="subscribe-form" className="validate" noValidate>
                                        <div className="input-group">
                                            <input type="text" placeholder="Email address" defaultValue="Enter your email" className="form-control form-email-widget" name="MERGE0" id="MERGE0" size="25" readOnly/>
                                            <span className="input-group-btn">
                                                <input type="submit" value="Go" name="subscribe" id="mc-embedded-subscribe" className="btn btn-email"/>
                                            </span>
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                            <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                        </div>
                                        
                                        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                            <input type="text" name="write2program" tabIndex="-1" />
                                        </div>
                                        <div className="alert-success" id="successMsg"></div>
                                        <div className="alert-danger" id="failMsg"></div>

                                    </form>
                                    <p>We respect your privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row hyperlink text-center text-md-left">
                <div className="col-md-6 hyper-left">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="/">HOME</a></li>
                        <li className="list-inline-item"><a href="/">PRIVACY POLICY</a></li>
                        <li className="list-inline-item"><a href="/">TERMS OF USE</a></li>
                        <li className="list-inline-item"><a href="/">ADVERTISE WITH US</a></li>
                    </ul>
                </div>
                <div className="col-md-6 hyper-right text-center text-md-right">
                    <i className="fa fa-copyright" aria-hidden="true"></i> Copyright {new Date().getFullYear()} <a href="/">W2P IT Software</a> All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer