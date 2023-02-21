import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App';
import BandList from './components/BandList/BandList';
import BandDetails from './components/BandDetails/BandDetails';
import VenueDetails from './components/VenueDetails/VenueDetails';
import About from './components/About/About';
import VenueList from './components/VenueList/VenueList'
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<BandList />} />
        <Route path="venues" element={<VenueList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<BandDetails />} />
        <Route path="/venue-details/:id" element={<VenueDetails />} />
      </Route>
    </Routes>
  </Router>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();