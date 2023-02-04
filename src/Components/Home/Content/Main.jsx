import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        const getCategory = async () => {
            const response = await axios.get(process.env.REACT_APP_API_URL);
            setCategories(JSON.parse(response.data.body).Items);
        }
        getCategory();
    },[]);

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
                                            {
                                                categories.map(
                                                    cat => (
                                                    <div className="col-md-3 col-sm-6">
                                                        <div className="edugate-layout-3">
                                                            <Link to={cat.caturl} title="PHP Programs" style={{textDecoration:'none'}}>
                                                                {/* <img src={cat.catimage} alt="PHP Programs" style={{height: "150px", width: "100%"}} /> */}
                                                                <div className="edugate-layout-3-wrapper">
                                                                    <div className="edugate-content">
                                                                        <div className="text-center title">{cat.catname}</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    )
                                                )
                                            }
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