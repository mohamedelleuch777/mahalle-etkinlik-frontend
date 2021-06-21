import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'
// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    Table,
    Container,
  } from "reactstrap";
// import Carousel from 'react-bootstrap/Carousel'
import News from './news'


const MahalleBasvuru = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();

    const styles = {
        container: {
            margin: "60px auto"
        },
        columns: {
            textAlign: "center"
        },
        number: {
            color: "#475677",
            fontSize: 80,
            fontFamily: "Poppins",
            fontWeight: 900,
            justifyContent: "center"
        },
        description: {
            color: "#7D8597",
            fontSize: 18,
            fontWeight: 300,
            justifyContent: "center"
        },
        button: {
            padding: "14px 22px",
            backgroundColor: "#3A9544",
            borderRaidus: 6,
            fontSize: 24,
            fontFamily: 'Poppins',
            fontWeight: 700
        },
        buttonParentRow: {
            justifyContent: "center",
            marginTop: 60
        }
    }

    useEffect( ()=>{
        // console.log("w",width,"h",height);
        if(width<=992) {
            setismobile(true);
        } else {
            setismobile(false);
        }
    },[width,height])


    return(
        <>
            <Container style={styles.container}>
                <Row>
                    {isMobile || <Col style={styles.columns} md={isMobile?4:3}>
                        <News />
                    </Col>}
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <Container>
                            <Row style={styles.number}>8</Row>
                            <Row style={styles.description}>Mahalle Evi</Row>
                        </Container>
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <Container>
                            <Row style={styles.number}>150</Row>
                            <Row style={styles.description}>Eğitim Gönüllüsü</Row>
                        </Container>
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <Container>
                            <Row style={styles.number}>1820</Row>
                            <Row style={styles.description}>Mahalle Evi Sakini</Row>
                        </Container>
                    </Col>
                </Row>
                <Row style={styles.buttonParentRow}>
                    <Button style={styles.button}>
                        Mahalleli veya Gönüllü olmak için tıklayın
                    </Button>
                </Row>
            </Container>
            <hr style={{borderBottom: "5px solid #CBD7E2"}} />
        </>
    )
}

export default MahalleBasvuru;