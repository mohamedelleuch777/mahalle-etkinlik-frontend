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
import AtolyeItem from './atolye_item'

// import Carousel from 'react-bootstrap/Carousel'
// import TouchCarousel from 'react-touch-carousel'

import ItemsCarousel from 'react-items-carousel';

import img1 from '../assets/img/1@2x.png'
import img2 from '../assets/img/2@2x.png'
import img3 from '../assets/img/3@2x.png'
import img4 from '../assets/img/4@2x.png'
import arrowRight from '../assets/img/Group 6292.svg'
import arrowLeft from '../assets/img/Group 6293.svg'


const IletisimSlider = (props) => {
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


    const data = [
        {
            img: img1,
            title: "Kültür Sanat",
            category: "Etkinlikleri"
        },
        {
            img: img2,
            title: "Bilim ve Teknoloji" ,
            category: "Etkinlikleri"
        },
        {
            img: img3,
            title: "Müzik ve Ritim" ,
            category: "Atölyesi"
        },
        {
            img: img4,
            title: "Dans ve Spor" ,
            category: "Etkinlikleri"
        }
    ]

    
      const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

    return(
        <>
            <Container style={styles.container}>
                <Row>

                    <div className="iletisim-slider-container" style={{"padding":"0 0px","maxWidth":"90%","margin":"0 auto"}}>
                        <ItemsCarousel
                            infiniteLoop={true}
                            gutter={width*0.026}
                            activePosition={'center'}
                            chevronWidth={60}
                            disableSwipe={false}
                            alwaysShowChevrons={false}
                            numberOfCards={4}
                            slidesToScroll={1}
                            outsideChevron={true}
                            showSlither={false}
                            firstAndLastGutter={false}
                            activeItemIndex={activeItemIndex}
                            requestToChangeActive={value => setActiveItemIndex(value)}
                            rightChevron=   {
                                                <Button style={{backgroundColor:"transparent",padding:0,border:"none"}}>
                                                <img src={arrowRight} />
                                                </Button>
                                            }
                            leftChevron=   {
                                                <Button style={{backgroundColor:"transparent",padding:0,border:"none"}}>
                                                <img src={arrowLeft} />
                                                </Button>
                                            }
                        >
                            {data.map( (item, index) => {
                                    return (
                                                <AtolyeItem
                                                    key={index}
                                                    img={item.img} 
                                                    title={item.title}
                                                    category={item.category}
                                                />
                                            )
                                })}
                        </ItemsCarousel>
                        </div>
                </Row>
            </Container>
            {/* <hr style={{borderBottom: "5px solid #CBD7E2", marginTop: 0}} /> */}
        </>
    )
}

export default IletisimSlider;




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
    },
    idv: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    }
}

