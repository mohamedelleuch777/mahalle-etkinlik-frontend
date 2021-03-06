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
                                    <span style={styles.title}>??ocuk Kay??t (5-18 ya??)</span>
                                </Row>
                                <Row style={styles.paragraph}>
                                    <p>
                                        - ??ocuk kay??t ba??vuru formunu eksiksiz ve do??ru doldurulmas?? gerekmektedir.
                                    </p>
                                    <p>
                                        - Formda beyan edilen bilgiler doldurulduktan sonra kayd??n tamamlanmas?? i??in  ba??vurulan mahalle evine gidilerek, doldurulan formun veli taraf??ndan  imzalanmas?? gerekmektedir.
                                    </p>
                                    <p>
                                        - Ba??vuru, imza al??nd??ktan sonra tamamlanmaktad??r.
                                    </p>
                                </Row>
                                <Row>
                                    <Button style={styles.button}>Ba??vur</Button>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    {/* item 2 */}
                    <Row style={{marginBottom:120}}>
                        <Col md="7">
                            <Container style={{display:"flex",flexDirection:"column",position:"relative",height:"100%",justifyContent:"space-between",paddingLeft:"5%"}}>
                                <Row>
                                    <span style={styles.title}>Yeti??kin Kay??t (18 ya?? ve ??zeri)</span>
                                </Row>
                                <Row style={styles.paragraph}>
                                    <p>
                                        - Yeti??kin kay??t ba??vuru formunu eksiksiz ve do??ru doldurulmas?? gerekmektedir.
                                    </p>
                                    <p>
                                        - Formda beyan edilen bilgiler doldurulduktan sonra kayd??n tamamlanmas?? i??in  ba??vurulan mahalle evine gidilerek, doldurulan formun veli taraf??ndan  imzalanmas?? gerekmektedir.
                                    </p>
                                    <p>
                                        - Ba??vuru, imza al??nd??ktan sonra tamamlanmaktad??r.
                                    </p>
                                </Row>
                                <Row>
                                    <Button style={styles.button}>Ba??vur</Button>
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
            <BlueTitle title="G??n??ll?? Ol"/>
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
                                <span style={styles.title}>G??n??ll?? Olmak ????in</span>
                            </Row>
                            <Row style={styles.paragraph}>
                                <ul className="list-blue-bullet">
                                    <li>
                                        18 ya????n?? doldurmu?? olmak
                                    </li>
                                    <li>
                                        G??n??ll??l??k s??recinin d??zenli ve s??rekli bir seyir izlemesi gerekti??inin bilincinde olmak
                                    </li>
                                    <li>
                                        ??nsan Haklar?? ve ??ocuk Haklar?????n?? benimsemek
                                    </li>
                                </ul>
                            </Row>
                            {/* sub item 2 */}
                            <Row>
                                <span style={styles.title}>G??n??ll??l??k S??reci</span>
                            </Row>
                            <Row style={styles.paragraph}>
                                <ul className="list-blue-bullet">
                                    <li>
                                        Mahalle Evi???nde g??n??ll?? olmak i??in ba??vuran adaylar G??n??ll?? Tan????ma Toplant??s?????na davet edilir.
                                    </li>
                                    <li>
                                        Tan????ma toplant??s??na kat??lan, belirledi??i g??n ve saatlerde d??zenli kat??l??m?? kabul eden g??n??ll??ler tercih ettikleri g??n??ll??l??k t??r??nde, tercih ettikleri g??n ve saatlerde destek vermeye ba??lar.
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
            <BlueTitle title="G??n??ll??l??k T??rleri"/>
            <Container>
                <Row>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem 
                            img={img1} 
                            title="Ofis G??n??ll??s??" 
                            paragraph="Ofis g??n??ll??leri, Mahalle Evi'nde ileti??im, koordinasyon, raporlama, proje y??r??tme konular??nda destek verir."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem 
                            img={img2} 
                            title="Oyun G??n??ll??s??" 
                            paragraph="Oyun odas?? g??n??ll??leri, Mahalle Evi'ne kay??tl?? olan ??ocuklar ile keyifli vakit ge??irmek i??in oyun odas??nda onlara e??lik eder ve ??e??itli aktiviteler ger??ekle??tirir."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem 
                            img={img3} 
                            title="E??itim Destek G??n??ll??s??"
                            paragraph="E??itim destek g??n??ll??leri, Mahalle Evi'nde ??ocuklara ve gen??lere akademik destek verir."
                        />
                    </Col>
                    <Col style={styles.columns} md={isMobile?4:3}>
                        <GonullulukTurleriItem
                            img={img4} 
                            title="Etkinlik G??n??ll??s??"
                            paragraph="Etkinlik g??n??ll??leri, ki??isel veya mesleki bilgi ve becerileri do??rultusunda Mahalle Evi'nde mahalleliye y??nelik e??itim veya at??lye deste??i verir."
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
                Mahalle Evi'ne g??n??ll?? kay??t s??reci <strong>??stanbul G??n??ll??leri</strong> ??zerinden sa??lanmaktad??r. Ba??vuru i??in l??tfen a??a????da bulunan <strong>G??n??ll?? Kay??t'a t??klay??n??z.</strong>
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
            }}>G??n??ll?? Kay??t</Button>
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
                        {/* <a style={styles1.link} href="#">Kay??t</a> */}
                        <h4 style={styles1.title}>{props.title}</h4>
                        <p style={styles1.paragraph}>{props.paragraph}</p>
                        {/* <Button style={styles1.button}>Ba??vur</Button> */}
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