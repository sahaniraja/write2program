import React from 'react'
import TopNavbar from '../../Header/TopNavbar'
import Footer from '../../Footer/Footer'

const LaravelIndex = () => {
  return (
    <>
        <TopNavbar/>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div style={{width:"100%",minHeight:"250px",backgroundColor:"#fafafa",marginTop:"0px",marginBottom:"20px",borderBottom:"5px solid #eaedf5",position:"relative",transition:"all .3s linear",border:"1px solid #bdbdbd",borderRadius:"4px"}}>
                        <div style={{position:"relative",padding:"0 30px 10px 30px"}}>
                            <h5><b>Generate PDF File in Laravel With Data</b></h5>
                            <div style={{paddingTop:"10px"}}>
                                <iframe title="Generate PDF File in Laravel With Data" style={{width: "100%",border:"3px solid black"}} src="https://youtube.com/embed/2ggLTTP-xfE/?controls=0"></iframe>
                                <a href="https://youtu.be/2ggLTTP-xfE/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{backgroundColor:"#16ccf0",color:"black",margin:"0 auto",marginTop:"10px",width:"100%"}}>View Video</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div style={{width:"100%",minHeight:"250px",backgroundColor:"#fafafa",marginTop:"0px",marginBottom:"20px",borderBottom:"5px solid #eaedf5",position:"relative",transition:"all .3s linear",border:"1px solid #bdbdbd",borderRadius:"4px"}}>
                        <div style={{position:"relative",padding:"0 30px 10px 30px"}}>
                            <h5><b>Add Bootstrap Template in Laravel</b></h5>
                            <div style={{paddingTop:"10px"}}>
                                <iframe title="Add Bootstrap Template in Laravel" style={{width: "100%",border:"3px solid black"}} src="https://youtube.com/embed/vGMyjzg9_Ek?controls=0"></iframe>
                                <a href="https://youtu.be/vGMyjzg9_Ek" target="_blank" rel="noreferrer" className="btn btn-primary" style={{backgroundColor:"#16ccf0",color:"black",margin:"0 auto",marginTop:"10px",width:"100%"}}>View Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default LaravelIndex