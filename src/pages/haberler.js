import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'
import classnames from 'classnames';
import slider_image1 from '../assets/img/slider1.png';
import slider_image2 from '../assets/img/slider2@2x.jpg';
import slider_image3 from '../assets/img/slider3@2x.jpg';
import Announcements from '../assets/img/mobil-1@2x.png';
import Announcements2 from '../assets/img/mobil-2@2x.png';
import Announcements3 from '../assets/img/mobil-3@2x.png';
import Announcements4 from '../assets/img/mobil-4@2x.png';

const Haberler = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();
    const [activeTab, setActiveTab] = useState('1');
    const [activeNumber, setActiveNumber] = useState(1)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const styles = {
        announcementsTitle: {
            color: "#475677",
            fontSize: "32px",
            fontFamily: 'Poppins',
            margin: "70px 0 50px",
            fontWeight: "bolder"
        },
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
        hes_code_progress_title: {
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
        },
        button: {
            backgroundColor: "#1D8C19",
            borderRadius: 8,
            padding: "10px 15px",
            color: "#fff",
            margin: "20px 0",
            width: "50%",
            border: "none",
            fontFamily: "Poppins",
            fontWeight: 600
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
                    <Row style={{ marginTop: "60px", marginBottom: "60px", display: "flex", justifyContent: "center", flexWrap: "inherit" }}>

                        <Col lg={4} sm={12} style={styles.announcements}>
                            <Nav tabs style={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); setActiveNumber(1); }}
                                    >
                                        <div style={styles.hes_code_progress}>
                                            <div className="hes_code_progress_number" style={{backgroundColor: activeNumber === 1 ? "rgb(29, 140, 25)" : "#8F969E"}}>1</div>
                                            <div style={styles.hes_code_progress_title}>Kod İşlemleri</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); setActiveNumber(2); }}
                                    >
                                        <div style={styles.hes_code_progress}>
                                            <div className="hes_code_progress_number" style={{backgroundColor: activeNumber === 2 ? "rgb(29, 140, 25)" : "#8F969E"}}>2</div>
                                            <div style={styles.hes_code_progress_title}>Kodu Oluştur</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); setActiveNumber(3); }}
                                    >
                                        <div style={styles.hes_code_progress}>
                                            <div className="hes_code_progress_number" style={{backgroundColor: activeNumber === 3 ? "rgb(29, 140, 25)" : "#8F969E"}}>3</div>
                                            <div style={styles.hes_code_progress_title}>Süre</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); setActiveNumber(4); }}
                                    >
                                        <div style={styles.hes_code_progress}>
                                            <div className="hes_code_progress_number" style={{backgroundColor: activeNumber === 4 ? "rgb(29, 140, 25)" : "#8F969E"}}>4</div>
                                            <div style={styles.hes_code_progress_title}>HES kodu</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>


                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col lg={6} sm={12} style={styles.announcements}>
                                        <img className="news_announcements_image" src={Announcements} />
                                    </Col>

                                    <Col lg={6} sm={12} style={styles.announcements} style={{ float: "left" }}>
                                        <h3 style={styles.announcementsTitle}>Kod İşlemleri</h3>

                                        <p style={{ fontSize: "19px", color: "#333" }}>
                                            HES ugulamasında anasayfa açılır, HES uygulaması üzerinde HES KODU OLUŞTURMA ekranına geçiş yapılır. <br /> <br /> Butona basılınca kod oluşturma ekranına geçiş yapılır.
                                        </p>

                                        <Button style={styles.button}>Sonraki Adım</Button>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col lg={6} sm={12} style={styles.announcements}>
                                        <img className="news_announcements_image" src={Announcements2} />
                                    </Col>

                                    <Col lg={6} sm={12} style={styles.announcements} style={{ float: "left" }}>
                                        <h3 style={styles.announcementsTitle}>HES Kodu Oluştur</h3>

                                        <p style={{ fontSize: "19px", color: "#333" }}>
                                            "HES KODU OLUŞTUR" bölümünün altında "Yeni Kod Ekle" butonuna basılarak kod oluşturulmaya başlanılır.
                                        </p>

                                        <Button style={styles.button}>Sonraki Adım</Button>

                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col lg={6} sm={12} style={styles.announcements}>
                                        <img className="news_announcements_image" src={Announcements3} />
                                    </Col>

                                    <Col lg={6} sm={12} style={styles.announcements} style={{ float: "left" }}>
                                        <h3 style={styles.announcementsTitle}>Detaylar</h3>

                                        <p style={{ fontSize: "19px", color: "#333" }}>
                                            "Yeni Kod Ekle" butonuna basıldıktan sonra açılan ekranda HES kodu için süre seçilir ve istenirse isim verilebilir.
                                        </p>

                                        <Button style={styles.button}>Sonraki Adım</Button>

                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col lg={6} sm={12} style={styles.announcements}>
                                        <img className="news_announcements_image" src={Announcements4} />
                                    </Col>

                                    <Col lg={6} sm={12} style={styles.announcements} style={{ float: "left" }}>
                                        <h3 style={styles.announcementsTitle}>HES Kodunuz hazır</h3>

                                        <p style={{ fontSize: "19px", color: "#333" }}>
                                            Oluşturulan HES kodu ilgili firma, kurum ya da kişiye iletilir ve kişinin hastalık riski taşıyıp taşımadığı bu kod ile sorgulanabilir.
                                        </p>

                                        <Button style={styles.button}>HES Kodunu oluştur</Button>

                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Row>

                </div>

            </Container>

            {/* ---------------------------------------------------- */}
            <Footer />
        </>
    )
}

export default Haberler;