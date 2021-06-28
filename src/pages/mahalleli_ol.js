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

import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'

import img_bg_img from '../assets/img/Group 33.svg'
import img_girl from '../assets/img/Image@2x.png'
import img_youth from '../assets/img/Image@2x 2.png'
import img_clip from '../assets/img/Clip@2x.png'

import img1 from '../assets/img/Mask Group 4@2x.png'
import img2 from '../assets/img/Mask Group 4@2x 2.png'
import img3 from '../assets/img/Mask Group 4@2x 3.png'
import img4 from '../assets/img/Mask Group 621@2x.png'

const MahalleliOl = (props) => {
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
            <TopBar />
            <Menu />
            {/* ---------------------------------------------------- */}
            <Container className="full-width" style={{display:"flex",flexDirection:"column",position:"relative",margin:0}}>
                <BlueTitle title="Mahalleli Ol"/>
                <Container>
                    {/* item 1 */}
                    <Row style={{marginBottom:120}}>
                        <Col md="5" style={{position:"relative"}}>
                            <img src={img_bg_img} style={{...styles.imgBg,transform:"translate(-40%, -40%)"}}/>
                            <img src={img_girl} style={styles.img}/>
                        </Col>
                        <Col md="7">
                            <Container style={{display:"flex",flexDirection:"column",position:"relative",height:"100%",justifyContent:"space-between",paddingLeft:"5%"}}>
                                <Row>
                                    <span style={styles.title}>Çocuk Kayıt (5-18 yaş)</span>
                                </Row>
                                <Row style={styles.paragraph}>
                                    <p>
                                        - Çocuk kayıt başvuru formunu eksiksiz ve doğru doldurulması gerekmektedir.
                                    </p>
                                    <p>
                                        - Formda beyan edilen bilgiler doldurulduktan sonra kaydın tamamlanması için  başvurulan mahalle evine gidilerek, doldurulan formun veli tarafından  imzalanması gerekmektedir.
                                    </p>
                                    <p>
                                        - Başvuru, imza alındıktan sonra tamamlanmaktadır.
                                    </p>
                                </Row>
                                <Row>
                                    <Button style={styles.button}>Başvur</Button>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {/* item 2 */}
                    <Row style={{marginBottom:120}}>
                        <Col md="7">
                            <Container style={{display:"flex",flexDirection:"column",position:"relative",height:"100%",justifyContent:"space-between",paddingLeft:"5%"}}>
                                <Row>
                                    <span style={styles.title}>Yetişkin Kayıt (18 yaş ve üzeri)</span>
                                </Row>
                                <Row style={styles.paragraph}>
                                    <p>
                                        - Yetişkin kayıt başvuru formunu eksiksiz ve doğru doldurulması gerekmektedir.
                                    </p>
                                    <p>
                                        - Formda beyan edilen bilgiler doldurulduktan sonra kaydın tamamlanması için  başvurulan mahalle evine gidilerek, doldurulan formun veli tarafından  imzalanması gerekmektedir.
                                    </p>
                                    <p>
                                        - Başvuru, imza alındıktan sonra tamamlanmaktadır.
                                    </p>
                                </Row>
                                <Row>
                                    <Button style={styles.button}>Başvur</Button>
                                </Row>
                            </Container>
                        </Col>
                        <Col md="5" style={{position:"relative"}}>
                            <img src={img_bg_img} style={{...styles.imgBg,transform:"translate(+25%, -40%)",right:0}}/>
                            <img src={img_youth} style={styles.img}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <hr style={{borderBottom: "5px solid #CBD7E2", marginTop: 0}} />
            {/* ---------------------------------------------------- */}
            <BlueTitle title="Gönüllü Ol"/>
            <Container style={{backgroundColor:"#fff",position:"relative"}}>
                <img src={img_bg_img} style={{...styles.imgBg,transform:"translate(+40%, -40%)",right:0}}/>
                <Row style={{marginBottom:120,position:"relative",boxShadow:"0 0 59px 0 #60e9ff45",padding:40}}>
                    <Col md="6" style={{position:"relative"}}>
                        <img src={img_clip} style={styles.img}/>
                    </Col>
                    <Col md="6">
                        <Container style={{display:"flex",flexDirection:"column",position:"relative",height:"100%",justifyContent:"space-between",paddingLeft:"5%",backgroundColor:"#fff",padding:"45px 40px"}}>
                            {/* sub item 1 */}
                            <Row>
                                <span style={styles.title}>Gönüllü Olmak İçin</span>
                            </Row>
                            <Row style={styles.paragraph}>
                                <ul className="list-blue-bullet">
                                    <li>
                                        18 yaşını doldurmuş olmak
                                    </li>
                                    <li>
                                        Gönüllülük sürecinin düzenli ve sürekli bir seyir izlemesi gerektiğinin bilincinde olmak
                                    </li>
                                    <li>
                                        İnsan Hakları ve Çocuk Hakları’nı benimsemek
                                    </li>
                                </ul>
                            </Row>
                            {/* sub item 2 */}
                            <Row>
                                <span style={styles.title}>Gönüllülük Süreci</span>
                            </Row>
                            <Row style={styles.paragraph}>
                                <ul className="list-blue-bullet">
                                    <li>
                                        Mahalle Evi’nde gönüllü olmak için başvuran adaylar Gönüllü Tanışma Toplantısı’na davet edilir.
                                    </li>
                                    <li>
                                        Tanışma toplantısına katılan, belirlediği gün ve saatlerde düzenli katılımı kabul eden gönüllüler tercih ettikleri gönüllülük türünde, tercih ettikleri gün ve saatlerde destek vermeye başlar.
                                    </li>
                                </ul>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <img src={img_bg_img} style={{...styles.imgBg,transform:"translate(-40%, -190%)",left:0}}/>
            </Container>
            {/* ---------------------------------------------------- */}
            <hr style={{borderBottom: "5px solid #CBD7E2", marginTop: 0}} />
            {/* ---------------------------------------------------- */}
            <BlueTitle title="Gönüllülük Türleri"/>
            <Container>
                <Row>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem 
                            img={img1} 
                            title="Ofis Gönüllüsü" 
                            paragraph="Ofis gönüllüleri, Mahalle Evi'nde iletişim, koordinasyon, raporlama, proje yürütme konularında destek verir."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem 
                            img={img2} 
                            title="Oyun Gönüllüsü" 
                            paragraph="Oyun odası gönüllüleri, Mahalle Evi'ne kayıtlı olan çocuklar ile keyifli vakit geçirmek için oyun odasında onlara eşlik eder ve çeşitli aktiviteler gerçekleştirir."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem 
                            img={img3} 
                            title="Eğitim Destek Gönüllüsü"
                            paragraph="Eğitim destek gönüllüleri, Mahalle Evi'nde çocuklara ve gençlere akademik destek verir."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem
                            img={img4} 
                            title="Etkinlik Gönüllüsü"
                            paragraph="Etkinlik gönüllüleri, kişisel veya mesleki bilgi ve becerileri doğrultusunda Mahalle Evi'nde mahalleliye yönelik eğitim veya atölye desteği verir."
                        />
                    </Col>
                </Row>
            </Container>
            <p style={{
                    textAlign: "center",
                    fontSize: 26,
                    fontFamily: 'Poppins',
                    color: "#7D8597",
                    maxWidth: 1170,
                    margin: "auto",
                    marginTop: 120,
                    marginBottom: 40,
                    lineHeight: "70px"
            }}>
                Mahalle Evi'ne gönüllü kayıt süreci <strong>İstanbul Gönüllüleri</strong> üzerinden sağlanmaktadır. Başvuru için lütfen aşağıda bulunan <strong>Gönüllü Kayıt'a tıklayınız.</strong>
            </p>
            <Button style={{
                margin: "auto",
                width: 280,
                marginLeft: "50%",
                transform: "translateX(-50%)",
                marginBottom: 120,
                height: 60,
                backgroundColor: "#0088CC",
                boxShadow: "0 0 30px 0 #0088cc99",
                color: "#fff",
                fontSize: 22,
                fontFamily: 'Poppins',
                fontWeight: 600,
                borderRadius: 30,
                border: "none"
            }}>Gönüllü Kayıt</Button>
            <Footer/>
        </>
    )
}

export default MahalleliOl;


const BlueTitle = (props) => {
    return (
        <div style={styles.blueTitleContainer}>
            <h2 style={styles.lastFont} className="blue-title">
                {props.title}
                <hr style={styles.hr1}/>
                <hr style={styles.hr2}/>
            </h2>
        </div>
    )
}



const GonullulukTurleriItem = (props) => {
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
                isMobile || <Container style={styles1.container}>
                    <Row style={styles1.row}>
                        <img style={styles1.image} src={props.img} />
                        {/* <a style={styles1.link} href="#">Kayıt</a> */}
                        <h4 style={styles1.title}>{props.title}</h4>
                        <p style={styles1.paragraph}>{props.paragraph}</p>
                        {/* <Button style={styles1.button}>Başvur</Button> */}
                    </Row>
                </Container>
            }
        </>
    )
}




const styles = {
    blueTitleContainer: {
        width: "100% 0",
        textAlign: "center",
        margin: 100
    },
    //continue from here
    lastFont: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#0088CC",
        width: "fit-content",
        margin: "auto",
        position: "relative"
    },
    hr1: {
        border: "2px solid #0088CC"
    },
    hr2: {
        position: "absolute",
        top: 44,
        left: "50%",
        transform: "translateX(-50%)",
        width: 50,
        border: "6px solid #0088CC",
        borderRadius: 6
    },
    img: {
        width: "100%"
    },
    imgBg: {
        position: "absolute",
        zIndex: -1,
        // transform: "translate(-40%, -40%)"
    },
    title: {
        color: "#030D28",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 28,
        textAlign: "left",
        // margin: 0,
        // minHeight: 45
    },
    paragraph: {
        color: "#333333",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "left",
        display:"flex",
        flexDirection:"column",
        position:"relative"
    },
    button: {
        backgroundColor: "#0088CC",
        borderRadius: 8,
        color: "#fff",
        margin: "20px 0",
        maxWidth: 180,
        margin: "0 auto",
        marginLeft: 0,
        width: "37%",
        maxWidth: 9999999,
        border: "none",
        fontFamily: "Poppins",
        fontWeight: 600,
        padding: 13,
        fontSize: 22
    }
}



const styles1 = {
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
        textAlign: "center",
        margin: 0,
        minHeight: 45,
        marginTop: 50
    },
    paragraph: {
        color: "#606060",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 300,
        // margin: "20px 0"
        maring: "5px 0 20px 0px",
        minHeight: 110
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