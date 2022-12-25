import React from 'react';
import Blog from '../Content/Blog';
import Footer from '../Footer/Footer';
import TopNavbar from '../Header/TopNavbar';
import Aboutus from '../Content/Aboutus';
import History from '../Content/History';
import Banner from '../Content/Banner';
import Service from '../Content/Service';
import Award from '../Content/Award';

const Index = () => {
  return (
    <>
        <TopNavbar/>
        <Banner/>
        <Award/>
        <Service/>
        <History/>
        <Aboutus/>
        <Blog/>
        <Footer/>
    </>
  )
}

export default Index