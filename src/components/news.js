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


const MahalleBasvuru = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();

    const styles = {
        container: {
            margin: "60px auto",
            padding: 20,
            boxShadow: "#00000029 0 0 15px 0px",
            borderRadius: 12
        },
        row: {
            display: "block"
        },
        title: {
            color: "#475677",
            fontSize: 21,
            fontWeight: 600,
            fontFamily: "Poppins",
            textAlign: "left",
            paddingLeft: 24
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
            {
                isMobile || <Container style={styles.container}>
                    <Row style={styles.row}>
                        <h3 style={styles.title}>Duyurular</h3>
                        <hr style={{borderBottom: "0px solid #CBD7E2"}} />
                        <Carousel className="news-carousel">
                            <Carousel.Item>
                                {/* <Carousel.Caption>
                                <h3>Bahçelievler Mahalle Evi Açıldı</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Carousel.Caption> */}

                                <Item
                                    title="Bahçelievler Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                                <Item 
                                    title="Zafer Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                                <Item 
                                    title="Bahçelievler Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                                <Item 
                                    title="Zafer Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Item
                                    title="Zafer Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                                <Item 
                                    title="Bahçelievler Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                                <Item 
                                    title="Zafer Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                                <Item 
                                    title="Bahçelievler Mahalle Evi Açıldı"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero orci, congue lacinia sed, rhoncus et augue."
                                />
                            </Carousel.Item>
                        </Carousel>

                        
                    </Row>
                </Container>
            }
        </>
    )
}

export default MahalleBasvuru;


const Item = (props) => {

    const styles = {
        title: {
            color: "#475677",
            fontFamily: "Poppins",
            fontSize: 14,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
        },
        paragraph: {
            color: "#383D46",
            fontFamily: "Poppins",
            fontSize: 12,
            // textOverflow: "ellipsis",
            overflow: "hidden",
            height: 55
        },
        link: {
            position: "absolute",
            top: 55,
            right: 0,
            backgroundColor: "white"
        }
    }

    return (
        <div className="news-sub-item">
            <h4 className="title" style={styles.title}>{props.title}</h4>
            <p style={styles.paragraph}>{props.text}</p>
            <a style={styles.link} href="#">...Devamı</a>
        </div>
    )
}