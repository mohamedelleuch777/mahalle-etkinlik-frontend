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
import News from './news'
import IletisimItem from './iletisim_item'

// import Carousel from 'react-bootstrap/Carousel'
// import TouchCarousel from 'react-touch-carousel'

import ItemsCarousel from 'react-items-carousel';

import img1 from '../assets/img/Mask Group 612@2x.png'
import img2 from '../assets/img/Mask Group 613@2x.png'
import img3 from '../assets/img/Mask Group 614@2x.png'
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
            title: "Cumhuriyet Mahalle Evi" ,
            paragraph: "Beylikdüzü İlçesi",
            numbers: [4,2,1]
        },
        {
            img: img2,
            title: "Zafer Mahalle Evi" ,
            paragraph: "Beylikdüzü İlçesi",
            numbers: [1,5,3]
        },
        {
            img: img3,
            title: "Pazariçi Mahalle Evi" ,
            paragraph: "Gaziosmanpaşa İlçesi",
            numbers: [9,5,8]
        }
    ]

    
      const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

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
                            numberOfCards={3}
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
                                                <IletisimItem
                                                    key={index}
                                                    img={item.img} 
                                                    title={item.title}
                                                    paragraph={item.paragraph}
                                                    numbers={item.numbers}
                                                />
                                            )
                                })}
                        </ItemsCarousel>
                        </div>
                            {/* {
                                data.map( (item, index) => {
                                    return (
                                        // <Carousel.Item>
                                            // <Col style={styles.columns} >
                                                <IletisimItem 
                                                    img={item.img} 
                                                    title={item.title}
                                                    paragraph={item.paragraph}
                                                />
                                            // </Col>
                                        // </Carousel.Item>
                                    )
                                })
                            } */}
                    {/* </Carousel> */}
                </Row>
            </Container>
            {/* <div style={{position: "relative"}}>
                <img style={styles.imageHesKodu} src={img_HesKodu} />
                <div style={styles.bgDiv} >
                    <div style={{marginLeft:"33%"}}>
                        <h2 style={styles.titleHesKodu}>HES Kodu Nasıl Alınır ?</h2>
                        <p style={styles.textHesKodu}>Mahalle Evlerinden yararlanabilmeniz için yasal olarak HES Kodu almanız zorunluluğu vardır. Buraya tıklayarak HES Kodunuzu nasıl alabileceğinizi öğrenebilirsiniz.</p>
                    </div>
                </div>
            </div> */}
            <hr style={{borderBottom: "5px solid #CBD7E2", marginTop: 0}} />
        </>
    )
}

export default IletisimSlider;


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

