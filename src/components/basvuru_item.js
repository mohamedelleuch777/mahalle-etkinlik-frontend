import React, { useState, useEffect } from 'react'
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
import Carousel from 'react-bootstrap/Carousel'
import useWindowSize from '../hooks/resize'



const BasvuruItem = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();


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
            {
                isMobile || <Container style={styles.container}>
                    <Row style={styles.row}>
                        <img style={styles.image} src={props.img} />
                        <a style={styles.link} href="#">Kayıt</a>
                        <h4 style={styles.title}>{props.title}</h4>
                        <p style={styles.paragraph}>{props.paragraph}</p>
                        <Button style={styles.button}>Başvur</Button>
                    </Row>
                </Container>
            }
        </>
    )
}

export default BasvuruItem;



const styles = {
    container: {
        // margin: "60px auto",
        // padding: 20,
        // boxShadow: "#00000029 0 0 15px 0px",
        // borderRadius: 12
    },
    row: {
        display: "block",
        textAlign: "left",
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        boxShadow: "#00000029 0 0 15px 0px",
        padding: 20
    },
    image: {
        height: "auto",
        margin: -20,
        width: "calc(100% + 40px)",
    },
    link: {
        color: "#0088CC",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 16,
        margin: "20px 0",
        transform: "translateY(11px)"
    },
    title: {
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: 18,
        textAlign: "left",
        margin: 0,
        minHeight: 45
    },
    paragraph: {
        color: "#606060",
        textAlign: "left",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 300,
        // margin: "20px 0"
        maring: "5px 0 20px 0px"
    },
    button: {
        backgroundColor: "#0088CC",
        borderRadius: 8,
        color: "#fff",
        margin: "20px 0",
        maxWidth: 180,
        margin: "0 auto",
        width: "50%",
        border: "none",
        fontFamily: "Poppins",
        fontWeight: 600
    }
}