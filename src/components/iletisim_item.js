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

import locationIcon from '../assets/img/map-marker-radius.svg'

const IletisimItem = (props) => {
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
                            <Button style={styles.iletisimButton}>
                                <img src={locationIcon} style={{width:27,marginRight:10}} />
                                İletişim
                            </Button>
                        </div>
                        <div style={styles.secondPart}>
                            <h4 style={styles.title}>{props.title}</h4>
                            <span style={styles.paragraph}>{props.paragraph}</span>
                            <div style={{display: "flex",height: 74,alignItems: "center",marginTop: 25,marginLeft:-25,marginRight:-25}}>
                                {/* div1 */}
                                <div style={{width:"30%",textAlign:"center",display: "flex",flexDirection: "column",color:"#475677"}}>
                                    <span style={{fontFamiliy:"Poppins",fontSize:36,fontWeight:600}}>{props.numbers[0]}</span>
                                    <span style={{fontFamiliy:"Poppins",fontSize:18,fontWeight:200}}>Atölye</span>
                                </div>
                                {/* div2 */}
                                <div style={{width:"40%",textAlign:"center",display: "flex",flexDirection: "column",color:"#475677",
                                    borderRight: "#475677 solid 1px",borderLeft: "#475677 solid 1px"
                                }}>
                                    <span style={{fontFamiliy:"Poppins",fontSize:36,fontWeight:600}}>{props.numbers[1]}</span>
                                    <span style={{fontFamiliy:"Poppins",fontSize:18,fontWeight:200}}>Gönüllü</span>
                                </div>
                                {/* div3 */}
                                <div style={{width:"30%",textAlign:"center",display: "flex",flexDirection: "column",color:"#475677"}}>
                                    <span style={{fontFamiliy:"Poppins",fontSize:36,fontWeight:600}}>{props.numbers[2]}</span>
                                    <span style={{fontFamiliy:"Poppins",fontSize:18,fontWeight:200}}>Sorumlu</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            }
        </>
    )
}

export default IletisimItem;

const styles = {
    container: {
        // margin: "60px auto",
        // padding: 20,
        // boxShadow: "#00000029 0 0 15px 0px",
        // borderRadius: 12
        margin: "10px 0"
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