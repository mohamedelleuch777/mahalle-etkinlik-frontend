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
import useWindowSize from '../hooks/resize'

import locationIcon from '../assets/img/map-marker-radius.svg'

const AtolyeItem = (props) => {
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
                        <div style={{position:"relative"}}>
                            <img style={styles.image} src={props.img} />
                            <div style={styles.underText}>
                                <span>{props.title}</span>
                                <span>{props.category}</span>
                            </div>
                        </div>
                    </Row>
                </Container>
            }
        </>
    )
}

export default AtolyeItem;

const styles = {
    container: {
        // margin: "60px auto",
        // padding: 20,
        // boxShadow: "#00000029 0 0 15px 0px",
        // borderRadius: 12
        margin: 10
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
        // padding: 20
    },
    image: {
        height: "auto",
        // margin: -20,
        width: "calc(100%)",
        // maxWidth: 333
    },
    underText: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "1.17vw",
        padding: 12,
        background: "rgb(206,206,206)",
        background: "linear-gradient(180deg, rgba(206,206,206,0) 0%, rgba(0,0,42,1) 100%)",
        borderRadius: 10
    },
    title: {
        color: "#475677",
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: 26,
        textAlign: "left",
        margin: 0,
        minHeight: 45,
        height: 62
    },
    paragraph: {
        color: "#475677",
        textAlign: "left",
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: 200,
        // margin: "20px 0"
        maring: "5px 0 20px 0px",
        height: 72
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
    },
    iletisimButton: {
        position: "absolute",
        left: -20,
        bottom: -20,
        border: "none",
        width: "45%",
        backgroundColor: "#0088CC",
        borderRadius: 0,
        fontSize: 18,
        fontWeight: 600,
        padding: 7
    },
    secondPart: {
        position: "relative",
        margin: "0 -20px",
        marginTop: 20,
        marginBottom: -20,
        padding: 40
    }
}