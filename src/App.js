import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Components/Content/Pages/About';
import Contact from './Components/Content/Pages/Contact';
import Career from './Components/Content/Pages/Career';
import Index from './Components/Home/Index';
import HowWeWork from './Components/Content/Pages/HowWeWork';
import OurTeam from './Components/Content/Pages/OurTeam';
import MissionVision from './Components/Content/Pages/MissionVision';
import OurValue from './Components/Content/Pages/OurValue';
import Services from './Components/Content/Pages/Services';
import ServicesDetail from './Components/Content/Pages/ServicesDetail';
import Privacy from './Components/Content/Pages/Privacy';
import Terms from './Components/Content/Pages/Terms';
import Blog from './Components/Content/Pages/Blog';
import Faq from './Components/Content/Pages/Faq';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/about-us" element={<About/>} />
      <Route path="/careers" element={<Career/>}/>
      <Route path="/how-we-work" element={<HowWeWork/>}/>
      <Route path="/our-team" element={<OurTeam/>}/>
      <Route path="/mission-vision" element={<MissionVision/>}/>
      <Route path="/our-value" element={<OurValue/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services-detail" element={<ServicesDetail/>}/>
      <Route path="/privacy-policy" element={<Privacy/>}/>
      <Route path="/terms-and-conditions" element={<Terms/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/help-and-faqs" element={<Faq/>}/>
    </Routes>
    </>
  );
}

export default App;
