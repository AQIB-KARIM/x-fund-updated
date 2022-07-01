import React from 'react'
import './Header.scss';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import NFtImage from '../../assets/images/NFT-img.png';
import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className='bg_container'>

            <Navbar expand="lg">
                <Container style={{ maxWidth: "90%" }}>
                    <Navbar.Brand href="/">
                        <img src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#projects">Our Projects</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#login">
                                <button>Sign up/Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Container style={{ maxWidth: "90%" }}>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6}>
                        <div className='legal_fund_container'>
                            <h3>World's First Legal NFT Fund</h3>
                            <p>Non-Fungible Tokens (NFT) Are Non-interchangeable Tokens issued On A Blockchain Network That May Be Accquired And Disposed Of Through A Virtual NFT Marketplace.</p>
                            <button>Learn More</button>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='Nft_image_container'>
                            <img src={NFtImage} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
