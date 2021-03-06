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
import img_HesKodu from '../assets/img/Mask Group 611@2x.png'


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
        },
        bgDiv: {
            backgroundColor: "#F5F8FA",
            height: 180,
            width: "100%",
            border: "none",
            bottom: 0,
            position: "absolute",
            zIndex: -1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        imageHesKodu: {
            maxWidth: 500,
            width: "30%"
        },
        titleHesKodu: {
            color: "#3A9544",
            fontSize: 35,
            fontFamily: 'Poppins',
            fontWeight: 700
        },
        textHesKodu: {
            color: "#606060",
            fontSize: 18,
            fontFamily: 'Poppins',
            fontWeight: 300,
            maxWidth: 820
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
                            title="??ocuk Kay??t (5-18 ya??)" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <BasvuruItem 
                            img={img2} 
                            title="Yeti??kin Kay??t (18 ya?? ve ??zeri)" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <BasvuruItem
                            img={img3} 
                            title="Mahalle Evi G??n??ll??s?? Ol" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </Col>
                </Row>
            </Container>
            <div style={{position: "relative"}}>
                <img style={styles.imageHesKodu} src={img_HesKodu} />
                <div style={styles.bgDiv} >
                    <div style={{marginLeft:"33%"}}>
                        <h2 style={styles.titleHesKodu}>HES Kodu Nas??l Al??n??r ?</h2>
                        <p style={styles.textHesKodu}>Mahalle Evlerinden yararlanabilmeniz i??in yasal olarak HES Kodu alman??z zorunlulu??u vard??r. Buraya t??klayarak HES Kodunuzu nas??l alabilece??inizi ????renebilirsiniz.</p>
                    </div>
                </div>
            </div>
            <hr style={{borderBottom: "5px solid #CBD7E2", marginTop: 0}} />
        </>
    )
}

export default MahalleBasvuru;