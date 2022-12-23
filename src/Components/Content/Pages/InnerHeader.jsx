import React,{useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import H01 from '../../../assets/images/header-inner/H01.jpg'

const InnerHeader = () => {
    const  location = useLocation();
    const [state,setState] = useState({
        loading: false,
        pageinfo:{
            'path': location.pathname,
            'bgimage': H01
        },
    });
    let {loading, pageinfo} = state;
  return (
<>
    <section className="header-inner header-inner-menu bg-overlay-black-50" style={{backgroundImage: "url("+pageinfo.bgimage+")"}}>
        <div className="container position-relative">
            <div className="row d-flex justify-content-center position-relative">
                <div className="col-md-8">
                    <div className="header-inner-title text-center">
                        {
                            (pageinfo.path == "/about-usx")
                            ? (
                            <>
                                <h1 className="text-white fw-normal">About W2P IT</h1>
                                <p className="text-white mb-0">Our Expertise. Know more about what we do</p>
                            </>
                            ) : (<></>)
                        }
                        {
                            (pageinfo.path == "/careers")
                            ? (
                            <>
                                <h1 className="text-white fw-normal">Careers</h1>
                                <p className="text-white mb-0">Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself.</p>
                            </>
                            ) : (<></>)
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="header-inner-nav">
            <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                <ul className="nav">
                    <li className="nav-item"><Link to="/about-us" className="nav-link active">About us</Link></li>
                    {/* <li className="nav-item"><Link className={`nav-link ${pageinfo.path =="/careers" ? "active" : ""}`} to="/careers">Careers</Link></li> */}
                    <li className="nav-item"><Link to="/careersxxxx" className="nav-link">Careers</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="how-we-work">How we work</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="our-team">Our team</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="mission-vision">Mission and vision</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="our-value">Our values</Link></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
</>
  )
}

export default InnerHeader