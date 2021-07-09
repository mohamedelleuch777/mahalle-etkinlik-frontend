import React, { useState, useEffect, useToggle } from 'react'
import useWindowSize from '../hooks/resize'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';

import slider_image1 from '../assets/img/slider1.png';

const Sss = (props) => {
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
        sssHead: {
            display: "flex"
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
                <h2 style={styles.title}>Sık Sorulan Sorular</h2>

                <div style={styles.principlesContainer}>
                    <Row>
                        <Col lg={12}>
                            <section style={{ margin: "25px 0" }}>
                                <div className="sssAccordionContainer" id="toggler" onClick={() => { setPrinciplesAccordion(1); toggle() }}>
                                    <div style={styles.sssHead}>
                                        <div styles={{ display: "flex", alignItems: "center" }}>
                                            {
                                                isOpen === true && principlesAccordion === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                            }
                                        </div>
                                        <h3 style={{ marginLeft: "15px" }}>Mahalle Evi nedir?</h3>
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler" style={{ transition: "linear .3s all" }}>
                                    <div className="sssAccordionContent">
                                        <div className="accordionContentContainer">
                                            <p>
                                                Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                            </p>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>


                            <section style={{ margin: "25px 0" }}>
                                <div className="sssAccordionContainer" id="toggler2" onClick={() => { setPrinciplesAccordion(2); toggle() }}>
                                    <div style={styles.sssHead}>
                                        <div styles={{ display: "flex", alignItems: "center" }}>
                                            {
                                                isOpen === true && principlesAccordion === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                            }
                                        </div>
                                        <h3 style={{ marginLeft: "15px" }}>Nasıl başvururum ?</h3>
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler2" style={{ transition: "linear .3s all" }}>
                                    <div className="sssAccordionContent">
                                        <div className="accordionContentContainer">
                                            <p>
                                                Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                            </p>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>

                            <section style={{ margin: "25px 0" }}>
                                <div className="sssAccordionContainer" id="toggler3" onClick={() => { setPrinciplesAccordion(3); toggle() }}>
                                    <div style={styles.sssHead}>
                                        <div styles={{ display: "flex", alignItems: "center" }}>
                                            {
                                                isOpen && principlesAccordion === 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                            }
                                        </div>
                                        <h3 style={{ marginLeft: "15px" }}>Kayıt nasıl yapılır ?</h3>
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler3" style={{ transition: "linear .3s all" }}>
                                    <div className="sssAccordionContent">
                                        <div className="accordionContentContainer">
                                            <p>
                                                Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                            </p>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>


                            <section style={{ margin: "25px 0" }}>
                                <div className="sssAccordionContainer" id="toggler4" onClick={() => { setPrinciplesAccordion(4); toggle() }}>
                                    <div style={styles.sssHead}>
                                        <div styles={{ display: "flex", alignItems: "center" }}>
                                            {
                                                isOpen && principlesAccordion === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                            }
                                        </div>
                                        <h3 style={{ marginLeft: "15px" }}>Gönüllü olmak istiyorum.</h3>
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler4" style={{ transition: "linear .3s all" }}>
                                    <div className="sssAccordionContent">
                                        <div className="accordionContentContainer">
                                            <p>
                                                Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                            </p>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>


                            <section style={{ margin: "25px 0" }}>
                                <div className="sssAccordionContainer" id="toggler5" onClick={() => { setPrinciplesAccordion(5); toggle() }}>
                                    <div style={styles.sssHead}>
                                        <div styles={{ display: "flex", alignItems: "center" }}>
                                            {
                                                isOpen && principlesAccordion === 5 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                            }
                                        </div>
                                        <h3 style={{ marginLeft: "15px" }}>Etkinlik yapan kimler ?</h3>
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler5" style={{ transition: "linear .3s all" }}>
                                    <div className="sssAccordionContent">
                                        <div className="accordionContentContainer">
                                            <p>
                                                Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                            </p>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>


                            <section style={{ margin: "25px 0" }}>
                                <div className="sssAccordionContainer" id="toggler6" onClick={() => { setPrinciplesAccordion(6); toggle() }}>
                                    <div style={styles.sssHead}>
                                        <div styles={{ display: "flex", alignItems: "center" }}>
                                            {
                                                isOpen && principlesAccordion === 6 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                            }
                                        </div>
                                        <h3 style={{ marginLeft: "15px" }}>Bende etkinlik yapmak istiyorum.</h3>
                                    </div>
                                </div>

                                <UncontrolledCollapse toggler="#toggler6" style={{ transition: "linear .3s all" }}>
                                    <div className="sssAccordionContent">
                                        <div className="accordionContentContainer">
                                            <p>
                                                Mahalle Evi’nde tüm çalışmaları, mahallenin her kesimini kapsayacak bir anlayışla gerçekleştiririz.
                                            </p>
                                        </div>
                                    </div>
                                </UncontrolledCollapse>
                            </section>
                        </Col>
                    </Row>
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default Sss;
