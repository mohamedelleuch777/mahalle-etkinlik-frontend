import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Row, Col, Button } from 'reactstrap';

import slider_image1 from '../assets/img/MaskGroup643@2x.png';

const MahalleAbout = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();

    const styles = {
        title: {
            color: "#475677",
            fontSize: 60,
            fontFamily: 'Poppins',
            fontWeight: 500,
            margin: "50px 0"
        },
        subTitle: {
            color: "#CE1432",
            fontSize: 35,
            fontFamily: 'Poppins',
            fontWeight: 600,
            margin: "50px 0"
        },
        container: {
            width: "100%",
            background: "rgba(0,0,0,.8)",
            position: "absolute",
            zIndex: "9999999",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 0"
        },
        cardImage: {
            width: "100%"
        },
        content: {
            color: "#475677",
            fontSize: 30,
            fontFamily: 'Poppins',
            fontWeight: 500,
            margin: "50px 0"
        },
        submitBtn: {
            backgroundColor: "#1D8C19",
            color: "#fff",
            margin: "20px 0",
            maxWidth: 180,
            width: "37%",
            fontFamily: "Poppins",
            fontWeight: 600,
            padding: 13,
            fontSize: 22
        },
        cancelBtn: {
            backgroundColor: "#CE1432",
            color: "#fff",
            margin: "20px 0",
            maxWidth: 180,
            width: "37%",
            fontFamily: "Poppins",
            fontWeight: 600,
            padding: 13,
            fontSize: 22
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

            <Container>
                <div style={styles.container}>
                    <div className="cardContainer">
                        <Row>
                            <Col lg={4} md={12} sm={12}>
                                <img src={slider_image1} style={styles.cardImage} />
                            </Col>

                            <Col lg={8} md={12} sm={12} style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "column", textAlign: "center" }}>
                                <h2 style={styles.title}>Çocuk Kayıt Formu</h2>

                                <h4 style={styles.subTitle}>Sayın VELİMİZ</h4>

                                <p style={styles.content}>
                                    Göndermekte olduğunuz formu imzalamak için seçtiğiniz mahalle evine müracat ediniz.
                                </p>

                                <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                                    <Button style={styles.submitBtn}>GÖNDER</Button>
                                    <Button style={styles.cancelBtn}>İPTAL ET</Button>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MahalleAbout;
