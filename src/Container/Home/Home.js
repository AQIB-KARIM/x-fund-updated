import React from 'react'
import Header from '../../Components/Navbar/Header';
import Services from '../Services/Services';
import Features from '../../Components/Features/Features';
import Projects from '../../Components/Projects/Projects';
import OurTeam from '../OurTeam/OurTeam';
import Partners from '../Partners/Partners';
import Footer from '../../Components/Footer/Footer';
import './Home.scss'

const Home = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header />
            <Services />
            <Features />
            <Projects />
            <OurTeam />
            <Partners />
            <Footer />
        </div>
    )
}

export default Home
