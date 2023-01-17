import Index from "./Components/Home/Index"
import {Routes, Route} from 'react-router-dom'
import AboutUs from "./Components/Home/OurPages/AboutUs";
import TermsOfUse from "./Components/Home/OurPages/TermsOfUse";
import AdvertiseWithUs from "./Components/Home/OurPages/AdvertiseWithUs";
import PHPIndex from "./Components/Home/ProgramPages/PHPPages/PHPIndex";
import LaravelIndex from "./Components/Home/ProgramPages/LaravelPages/LaravelIndex";
import ReactjsIndex from "./Components/Home/ProgramPages/ReactjsPages/ReactjsIndex";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/our-pages/privacy-policy" element={<AboutUs/>}/>
      <Route path="/our-pages/terms-of-use" element={<TermsOfUse/>}/>
      <Route path="/our-pages/advertise-with-us" element={<AdvertiseWithUs/>}/>
      <Route path="/our-pages/aboutus" element={<AboutUs/>}/>
      <Route path="/" element={<PHPIndex/>}/>
      <Route path="/laravel/laravel-programs" element={<LaravelIndex/>}/>
      <Route path="/reactjs/reactjs-programs" element={<ReactjsIndex/>}/>
    </Routes>
    </>
  )
}

export default App;
