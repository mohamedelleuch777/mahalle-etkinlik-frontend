import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SliderTop from '../components/slider_top'
import { Container, Row, Col } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'

import slider_image1 from '../assets/img/slider1.png';
import slider_image2 from '../assets/img/slider2@2x.jpg';
import slider_image3 from '../assets/img/slider3@2x.jpg';
import Announcements from '../assets/img/mobil-1@2x.png';

const Haberler = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();

    const styles = {
        title: {
            color: "#475677",
            fontSize: 60,
            fontFamily: 'Poppins',
            textAlign: "center",
            margin: "60px 0",
            fontWeight: 500
        },
        paragraph: {
            fontSize: 19,
            color: "#7D8597",
            fontFamily: 'Poppins',
            textAlign: "center",
            margin: "40px 0"
        },
        hes_code_progress: {
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
            alignItems: "center"
        },
        hes_code_progress_number: {
            padding: "15px",
            backgroundColor: "#8F969E",
            color: "#fff",
            fontSize: "24px",
            fontWeight: "bolder",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        hes_code_progress_title:{
            padding: "0",
            width: "70%",
            textAlign: "left",
            fontSize: "22px",
            fontWeight: "bolder",
            color: "#6C757D"
        },
        announcements: {
            display: "flex",
            justifyContent: "center",
            flexFlow: "column"
        }
    }

    useEffect(() => {
        // console.log("w",width,"h",height);
        if (width <= 992) {
            setismobile(true);
        } else {
            setismobile(false);
        }
    }, [width, height])



    return (
        <>
            <TopBar />
            <Menu />
            {/* ---------------------------------------------------- */}
            <Container>
                <h2 style={styles.title}>Haberler</h2>

                <div className="news-section-container">
                    <h3>Haberler</h3>

                    <Carousel className="slider-carousel">
                        <Carousel.Item>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <img className="d-block w-100" src={slider_image1} style={{ minHeight: "450px", objectFit: "cover" }} alt="First slide" />
                                    <div className="news-content-container">
                                        <div className="haberler-detay-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                        <div className="haberler-detay-aciklama">
                                            <p>Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col sm={12} lg={6}>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image1} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image2} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} lg={6}>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image3} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image1} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>


                        <Carousel.Item>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <img className="d-block w-100" src={slider_image2} style={{ minHeight: "450px", objectFit: "cover" }} alt="First slide" />
                                    <div className="news-content-container">
                                        <div className="haberler-detay-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                        <div className="haberler-detay-aciklama">
                                            <p>Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col sm={12} lg={6}>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image2} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image3} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} lg={6}>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image2} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image3} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>



                        <Carousel.Item>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <img className="d-block w-100" src={slider_image3} style={{ minHeight: "450px", objectFit: "cover" }} alt="First slide" />
                                    <div className="news-content-container">
                                        <div className="haberler-detay-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                        <div className="haberler-detay-aciklama">
                                            <p>Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col sm={12} lg={6}>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image2} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image1} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} lg={6}>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image2} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="haberler_card_slider_container">
                                                <img className="d-block w-100" src={slider_image3} style={{ minHeight: "220px", objectFit: "cover" }} alt="First slide" />
                                                <div className="news-content-container">
                                                    <div className="haberler-detay-header small-news-header">Zafer Mahalle Evi Hizmete Girdi</div>
                                                    <div className="haberler-detay-aciklama">
                                                        <p>with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Carousel.Item>

                    </Carousel>
                </div>

            </Container>

            <hr style={{ borderBottom: "5px solid #CBD7E2", marginTop: "20px" }} />

            <Container>
                <h2 style={styles.title}>Duyurular</h2>

                <div className="news-section-container">
                    <h3>HES Kodumu nasıl alırım ?</h3>

                    <Row style={{marginTop: "60px", marginBottom: "60px", display: "flex", justifyContent: "center"}}>

                        <Col lg={3} sm={12} style={styles.announcements}>
                            <div style={styles.hes_code_progress}>
                                <div style={styles.hes_code_progress_number}>1</div>
                                <div style={styles.hes_code_progress_title}>Kod İşlemleri</div>
                            </div>
                            <div style={styles.hes_code_progress}>
                                <div style={styles.hes_code_progress_number}>2</div>
                                <div style={styles.hes_code_progress_title}>Kodu Oluştur</div>
                            </div>
                            <div style={styles.hes_code_progress}>
                                <div style={styles.hes_code_progress_number}>3</div>
                                <div style={styles.hes_code_progress_title}>Süre</div>
                            </div>
                            <div style={styles.hes_code_progress}>
                                <div style={styles.hes_code_progress_number}>4</div>
                                <div style={styles.hes_code_progress_title}>HES kodu</div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12} style={styles.announcements}>
                            <img className="w-75" src={Announcements} />
                        </Col>

                        <Col lg={3} sm={12} style={styles.announcements}>
                        </Col>
                    </Row>

                </div>

            </Container>

            {/* ---------------------------------------------------- */}
            <Footer />
        </>
    )
}

export default Haberler;


const styles1 = {
    // blueTitleContainer: {
    //     width: "100% 0",
    //     textAlign: "center",
    //     margin: 100
    // },
    // //continue from here
    // lastFont: {
    //     fontSize: 40,
    //     fontWeight: 600,
    //     fontFamily: "Poppins",
    //     color: "#0088CC",
    //     width: "fit-content",
    //     margin: "auto",
    //     position: "relative"
    // },
    // hr1: {
    //     border: "2px solid #0088CC"
    // },
    // hr2: {
    //     position: "absolute",
    //     top: 44,
    //     left: "50%",
    //     transform: "translateX(-50%)",
    //     width: 50,
    //     border: "6px solid #0088CC",
    //     borderRadius: 6
    // },
    img: {
        width: "100%"
    },
    // imgBg: {
    //     position: "absolute",
    //     zIndex: -1,
    //     // transform: "translate(-40%, -40%)"
    // },
    title: {
        color: "#030D28",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 28,
        textAlign: "left",
        // margin: 0,
        // minHeight: 45
    },
    paragraph: {
        color: "#333333",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    }
}