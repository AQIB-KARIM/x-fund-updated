import React, {useState} from 'react'
import './App.scss'
import Home from './Container/Home/Home'
import ContactUs from './Container/ContactUs/ContactUs';
import OurProjects from './Container/OurProjects/OurProjects';
import OurServices from './Container/OurServices/OurServices';
import TeamsInner from './Container/TeamsInner/TeamsInner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner')

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false)
    }, 2000)
  }

  return (
    !isLoading && (
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<ContactUs />} />
          <Route path={"/projects"} element={<OurProjects />} />
          <Route path={"/features"} element={<OurServices />} />
          <Route path={"/teams"} element={<TeamsInner />} />
        </Routes>
      </Router>
    )
  )
}

export default App
