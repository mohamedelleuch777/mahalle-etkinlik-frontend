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
import BasvuruItem from './basvuru_item'

import img1 from '../assets/img/girl-with-big-smile-classroom@2x.png'
import img2 from '../assets/img/Group 3106@2x.png'
import img3 from '../assets/img/Mask Group 610@2x.png'


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
                        <BasvuruItem 
                            img={img1} 
                            title="Çocuk Kayıt (5-18 yaş)" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <BasvuruItem 
                            img={img2} 
                            title="Yetişkin Kayıt (18 yaş ve üzeri)" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <BasvuruItem
                            img={img3} 
                            title="Mahalle Evi Gönüllüsü Ol" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
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