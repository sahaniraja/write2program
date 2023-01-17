import React from 'react'
import php_logo from '../../../assets/images/programs_logo/php_logo.png'
import laravel_logo from '../../../assets/images/programs_logo/laravel_logo.png'
import codeigniter_logo from '../../../assets/images/programs_logo/codeigniter_logo.png'
import symfony_logo from '../../../assets/images/programs_logo/symfony_logo.png'
import nodejs_logo from '../../../assets/images/programs_logo/nodejs_logo.png'
import python_logo from '../../../assets/images/programs_logo/python_logo.png'
import react_logo from '../../../assets/images/programs_logo/react_logo.png'
import angular_logo from '../../../assets/images/programs_logo/angular_logo.png'
import vue_logo from '../../../assets/images/programs_logo/vue_logo.png'
import django_logo from '../../../assets/images/programs_logo/django_logo.png'
import flask_logo from '../../../assets/images/programs_logo/flask_logo.png'
import golang_logo from '../../../assets/images/programs_logo/golang_logo.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
        <div id="wrapper-content">
            <div id="page-wrapper">
                <div className="main-content">  
                    <div className="content">
                        <div className="section section-padding list-categories" id="tutorials">
                            <div className="container">
                                {/* <h1 style={{fontSize:"25px"}}>Programming Tutorials </h1> */}
                                <div className="list-categories-wrapper">
                                    <div className="list-categories-content row">
                                        <div className="customs-row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <Link to="/" title="PHP Programs">
                                                        <img src={php_logo} alt="PHP Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">PHP</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <Link to="/laravel/laravel-programs" title="Laravel Programs">
                                                        <img src={laravel_logo} alt="Laravel Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Laravel</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Codeigniter Programs">
                                                        <img src={codeigniter_logo} alt="CodeIgniter Programs" style={{height: "150px", width: "100%"}}/>
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">CodeIgniter</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Symfony Programs">
                                                        <img src={symfony_logo} alt="Symfony Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Symfony</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="customs-row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Node.js Programs">
                                                        <img src={nodejs_logo} alt="Node.js Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Node.js</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <Link to="/reactjs/reactjs-programs" title="React.js Programs">
                                                        <img src={react_logo} alt="React.js Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">React.js</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Angular.js Programs">
                                                        <img src={angular_logo} alt="Angular.js Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Angular.js</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Vue.js Programs">
                                                    <img src={vue_logo} alt="Vue.js Programs" style={{height: "150px", width: "100%"}} />
                                                    <div className="edugate-layout-3-wrapper">
                                                        <div className="edugate-content">
                                                            <div className="text-center title">Vue.js</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="customs-row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Python Programs">
                                                        <img src={python_logo} alt="Python Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Python</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Django Programs">
                                                        <img src={django_logo} alt="Django Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Django</div>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Flask Programs">
                                                        <img src={flask_logo} alt="Flask Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Flask</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="edugate-layout-3">
                                                    <a href="/" title="Golang Programs">
                                                        <img src={golang_logo} alt="Golang Programs" style={{height: "150px", width: "100%"}} />
                                                        <div className="edugate-layout-3-wrapper">
                                                            <div className="edugate-content">
                                                                <div className="text-center title">Golang</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main