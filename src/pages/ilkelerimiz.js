import React, { useState, useEffect, useToggle } from 'react'
import useWindowSize from '../hooks/resize'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';

import slider_image1 from '../assets/img/slider1.png';

const MahalleAbout = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();
    let [principlesAccordion, setPrinciplesAccordion] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); };

    const styles = {
        title: {
            color: "#475677",
            fontSize: 60,
            fontFamily: 'Poppins',
            textAlign: "center",
            margin: "60px 0",
            fontWeight: 500
        },
        principlesContainer: {
            width: "100%",
            margin: "35px 0"
        },
        contentImage: {
            width: "250px",
            maxHeight: "300px",
            objectFit: "contain"
        }
    }

    useEffect(() => {
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
                <h2 style={styles.title}>İlkelerimiz</h2>

                <div style={styles.principlesContainer}>
                    <Row>
                        <Col lg={12}>
                            <section style={{ margin: "25px 0" }}>
                                <div className={principlesAccordion === 1 ? "principleActiveAccordion" : "principlesAccordionContainer"} id="toggler" onClick={() => { setPrinciplesAccordion(1); toggle() }}>
                                    <div>
                                        <h3>Eşitlik</h3>
                                    </div>

                                    <div className="principlesAccordionPlusIcon">
                                        {
                                            isOpen && principlesAccordion === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        }

                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler" style={{ transition: "linear .3s all" }}>
                                    <div className="principlesAccordionContent">
                                        <div className="accordionContentContainer">
                                            <Row>
                                                <Col lg={3} sm={12}>
                                                    <img src={slider_image1} className="w-100" />
                                                </Col>
                                                <Col lg={9} sm={12}>
                                                    <div class="accordion_content_text">
                                                        Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>

                            <section style={{ margin: "25px 0" }}>
                                <div className={principlesAccordion === 2 ? "principleActiveAccordion" : "principlesAccordionContainer"} id="toggler2" onClick={() => { setPrinciplesAccordion(2); toggle() }}>
                                    <div>
                                        <h3>Kapsayıcılık</h3>
                                    </div>

                                    <div className="principlesAccordionPlusIcon">
                                        {
                                            isOpen && principlesAccordion === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        }
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler2" style={{ transition: "linear .3s all" }}>
                                    <div className="principlesAccordionContent">
                                        <div className="accordionContentContainer">
                                            <Row>
                                                <Col lg={3} sm={12}>
                                                    <img src={slider_image1} className="w-100" />
                                                </Col>
                                                <Col lg={9} sm={12}>
                                                    <div class="accordion_content_text">
                                                        Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>

                            <section style={{ margin: "25px 0" }}>
                                <div className={principlesAccordion === 3 ? "principleActiveAccordion" : "principlesAccordionContainer"} id="toggler3" onClick={() => { setPrinciplesAccordion(3); toggle() }}>
                                    <div>
                                        <h3>Yerellik</h3>
                                    </div>

                                    <div className="principlesAccordionPlusIcon">
                                        {
                                            isOpen && principlesAccordion === 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        }
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler3" style={{ transition: "linear .3s all" }}>
                                    <div className="principlesAccordionContent">
                                        <div className="accordionContentContainer">
                                            <Row>
                                                <Col lg={3} sm={12}>
                                                    <img src={slider_image1} className="w-100" />
                                                </Col>
                                                <Col lg={9} sm={12}>
                                                    <div class="accordion_content_text">
                                                        Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>

                            <section style={{ margin: "25px 0" }}>
                                <div className={principlesAccordion === 4 ? "principleActiveAccordion" : "principlesAccordionContainer"} id="toggler4" onClick={() => { setPrinciplesAccordion(4); }}>
                                    <div>
                                        <h3>Dayanışma</h3>
                                    </div>

                                    <div className="principlesAccordionPlusIcon">
                                        {
                                            isOpen && principlesAccordion === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        }
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler4" style={{ transition: "linear .3s all" }}>
                                    <div className="principlesAccordionContent">
                                        <div className="accordionContentContainer">
                                            <Row>
                                                <Col lg={3} sm={12}>
                                                    <img src={slider_image1} className="w-100" />
                                                </Col>
                                                <Col lg={9} sm={12}>
                                                    <div class="accordion_content_text">
                                                        Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>


                            <section style={{ margin: "25px 0" }}>
                                <div className={principlesAccordion === 5 ? "principleActiveAccordion" : "principlesAccordionContainer"} id="toggler5" onClick={() => { setPrinciplesAccordion(5); }}>
                                    <div>
                                        <h3>Gizlilik</h3>
                                    </div>

                                    <div className="principlesAccordionPlusIcon">
                                        {
                                            isOpen && principlesAccordion === 5 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        }
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler5" style={{ transition: "linear .3s all" }}>
                                    <div className="principlesAccordionContent">
                                        <div className="accordionContentContainer">
                                            <Row>
                                                <Col lg={3} sm={12}>
                                                    <img src={slider_image1} className="w-100" />
                                                </Col>
                                                <Col lg={9} sm={12}>
                                                    <div class="accordion_content_text">
                                                        Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>


                            <section style={{ margin: "25px 0" }}>
                                <div className={principlesAccordion === 6 ? "principleActiveAccordion" : "principlesAccordionContainer"} id="toggler6" onClick={() => { setPrinciplesAccordion(6); }}>
                                    <div>
                                        <h3>Katılımcılık</h3>
                                    </div>

                                    <div className="principlesAccordionPlusIcon">
                                        {
                                            isOpen && principlesAccordion === 6 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        }
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler6" style={{ transition: "linear .3s all" }}>
                                    <div className="principlesAccordionContent">
                                        <div className="accordionContentContainer">
                                            <Row>
                                                <Col lg={3} sm={12}>
                                                    <img src={slider_image1} className="w-100" />
                                                </Col>
                                                <Col lg={9} sm={12}>
                                                    <div class="accordion_content_text">
                                                        Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>
                        </Col>

                        <Col lg={12}>
                            <p>
                                Eşitlik(Üzerine tıklayınca aşağıdaki açıklama görünecek şekilde tasarlanmalı.) <br />
                                Mahalle Evi’nde dil, din, inanç, cinsiyet, sosyo-ekonomik statü ve benzeri sebeplerle ayrımcılık yapmayız. <br /> <br />
                                <span className="text-danger">Kapsayıcılık(Üzerine tıklayınca aşağıdaki açıklama görünecek şekilde tasarlanmalı.) <br />Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.</span> <br /><br />
                                Katılımcılık(Üzerine tıklayınca aşağıdaki açıklama görünecek şekilde tasarlanmalı.) <br />Mahalle Evi’nde, mahallelinin karar alma süreçlerinde etkin rol almalarını ve söz sahibi olmalarını teşvik ederiz.<br /><br />
                                Yerellik(Üzerine tıklayınca aşağıdaki açıklama görünecek şekilde tasarlanmalı.) <br />Mahalle Evi’nde gerçekleşen çalışmaları, mahallenin ve mahallelinin talepleri ve ihtiyaçları doğrultusunda şekillendiririz. <br /><br />
                                Dayanışma(Üzerine tıklayınca aşağıdaki açıklama görünecek şekilde tasarlanmalı.) <br />“Toplumsal dayanışma’ya ”’verdiğimiz önemle; Mahalle Evi’nde çalışma ilkelerimizle örtüşen kurum ve kuruluşlarla işbirliği içerisinde çalışırız.<br /><br />
                                Sivil toplum ve yerel kuruluşlarla dayanışma içinde olmaya önem gösteririz. Gizlilik(Üzerine tıklayınca aşağıdaki açıklama görünecek şekilde tasarlanmalı.) Mahalle Evi’nde, mahallelinin kişisel bilgilerini “gizlilik prensipleri” doğrultusunda koruruz.
                            </p>
                        </Col>
                    </Row>
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default MahalleAbout;
