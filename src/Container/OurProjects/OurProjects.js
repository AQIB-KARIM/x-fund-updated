import React, { useState } from 'react'
import BannerHeader from '../../Components/BannerHeader/BannerHeader'
import './OurProjects.scss'
import Footer from '../../Components/Footer/Footer'
import { Container, Col, Row } from 'react-bootstrap'
import OurProject1 from '../../assets/images/ourproject1.png'
import OurProject2 from '../../assets/images/ourproject2.png'
import OurProject3 from '../../assets/images/ourproject3.png'

const OurProjects = () => {
    const [isLoading, setLoading] = useState(true);
    const spinner = document.getElementById('spinner')

    if (spinner) {
        setTimeout(() => {
            spinner.style.display = "none";
            setLoading(false)
        }, 1000)
    }
    return (
        !isLoading && (
            <React.Fragment>
                <BannerHeader title={'Our Projects'} />

                <div className='our_projects_main'>
                    <Container>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={6}>
                                <div className='Nft_community_image'>
                                    <img src={OurProject1} alt='project1' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='Nft_community_text'>
                                    <h3><span>Build</span> Strong NFT Community</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='nft_fund_text_container'>
                                    <h3><span>NFT</span> Fund</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='nft_fund_image_container'>
                                    <img src={OurProject2} alt='project2' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='strong_nft_image_container'>

                                    <img src={OurProject3} alt='project3' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='nft_fund_text_container'>
                                    <h3><span>Build</span> Strong NFT Community</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </React.Fragment>
        )
    )
}

export default OurProjects
