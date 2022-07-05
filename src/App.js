import React from 'react'
import './App.scss'
import Home from './Container/Home/Home'
import ContactUs from './Container/ContactUs/ContactUs';
import OurProjects from './Container/OurProjects/OurProjects';
import OurServices from './Container/OurServices/OurServices';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<ContactUs />} />
          <Route path={"/projects"} element={<OurProjects />} />
          <Route path={"/features"} element={<OurServices />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
