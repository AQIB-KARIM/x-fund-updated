import React from 'react'
import './Partners.scss'
import { Container, Col, Row } from 'react-bootstrap'
import Slider from "react-slick";
import { partnersData } from './PartnersData';

const Partners = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='partners_bg_image'>
            <h3>Our Partners</h3>
            <Container>
                <Row>
                    <Col md={12}>
                        <Slider {...settings}>
                            {
                                partnersData.map((partner, index) => (
                                    <div className='partners_container' key={index}>
                                        <img src={partner.partnerAvatar} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Partners
