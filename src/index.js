import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome/all.min.css';
import './assets/css/flaticon/flaticon.css';
import './assets/css/bootstrap/bootstrap.min.css';
import './assets/css/owl-carousel/owl.carousel.min.css';
import './assets/css/swiper/swiper.min.css';
import './assets/css/animate/animate.min.css';
import './assets/css/magnific-popup/magnific-popup.css';
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
