import React from 'react'
import { Link } from 'react-router-dom'
import home_logo from '../../../assets/images/home_logo.png'


const TopNavbar = () => {
  return (
    <>
    <header className="phHeader">
        <nav className="navbar navbar-expand logo-link">
            <Link to="https://www.write2program.com" className="navbar-brand text-uppercase">
            <img src={home_logo} className="logo-img" alt="Write2Program" /></Link>
            <div className="navbar-nav ml-auto" >
                <a href="https://www.facebook.com/profile.php?id=100086959927893" className="nav-item nav-link"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/write2program" className="nav-item nav-link"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/raja-sahani-450762250/" className="nav-item nav-link"><i className="fa fa-linkedin"></i></a>
                <a href="/" className="nav-item nav-link"><i className="fa fa-youtube"></i></a>
                <a href="https://www.youtube.com/channel/UC6C_3S7slwp5zM2IsvZ1nqg/" className="nav-item nav-link"><i className="fa fa-instagram"></i></a>
            </div>
        </nav>
    </header>

<nav className="navbar navbar-expand-lg navbar-dark special-color-dark sticky-top">
    <button className="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#topMenu" aria-controls="#navbarLeft" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="topMenu">
        <ul className="navbar-nav mr-auto left">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={{fontSize: "20px"}}><i className="fa fa-home" aria-hidden="true"></i></Link>
            </li>
            <li className="nav-item">
                <Link  to="/" className="nav-link">Programming Languages</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">Databases</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" >Cloud Platform</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">AI/ML</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">About Us</Link>
            </li>
        </ul>
    </div>
</nav>
    </>
  )
}

export default TopNavbar