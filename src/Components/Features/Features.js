import React from 'react'
import './Features.scss'
import { Container, Col, Row } from 'react-bootstrap'
import Slider from "react-slick";
import { data } from './featuresData'

const Features = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <div className='features_bg_color'>
            <h3>Features</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

            <Container>
                <Row>
                    <Col md={12}>
                        <Slider {...settings}>
                            {
                                data.map((featuresData, index) => (
                                    <div className='nft_feature_container' key={index}>
                                        <img src={featuresData.avatar} />
                                        <p>{featuresData.text}</p>
                                        <button>Learn More</button>
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

export default Features
