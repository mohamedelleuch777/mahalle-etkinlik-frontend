import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'


import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SliderTop from '../components/slider_top'
import { Container, Row, Col } from 'reactstrap';


import img_clip from '../assets/img/image 12.png'

const MahalleAbout = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();
    

    const styles = {
        title: {
            color: "#475677",
            fontSize: 60,
            fontFamily: 'Poppins',
            textAlign: "center",
            margin: "60px 0",
            fontWeight: 500
        },
        paragraph: {
            fontSize: 19,
            color: "#7D8597",
            fontFamily: 'Poppins',
            textAlign: "center",
            margin: "40px 0"
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
        <TopBar />
        <Menu />
        {/* ---------------------------------------------------- */}
        <Container>
            <h2 style={styles.title}>Mahalle Evlerimiz Hakkında</h2>
            <p style={styles.paragraph}>
                Mahalle Evi aracılığı ile mahalle ölçeğinde kadın, çocuk, yaşlı ve gençlerin sosyal ve kültürel hayata katılımının arttırılması, eğitim destek, psikososyal gelişim ve kültür-sanat faaliyetlerinin İstanbul'un her noktasına yayılması, mahallelinin belediye hizmetleri ve sosyal hizmetlere hak temelli erişebilmesi, mahalle kültürünü canlandırarak toplumsal dayanışmanın güçlendirilmesi hedeflenmektedir.
            </p>
            <p style={styles.paragraph}>
                Tüm bu hedefler doğrultusunda gönüllüler, okullar ve sivil toplum kuruluşlarıyla işbirliği yapmaktayız. Gönüllülerimiz fırsat eşitliği oluşturma yolunda daha fazla kadına, çocuğa, yaşlıya ve gence ulaşmamıza katkı sağlamakta ve bizlere destek vermekte; bu gönüllülerimize İstanbul Gönüllüleri gönüllü ağı üzerinden ulaşmaktayız.
            </p>
        </Container>
        <hr style={{borderBottom: "5px solid #CBD7E2", marginTop: 80}} />
        {/* ---------------------------------------------------- */}
        <Container style={{backgroundColor:"#fff",position:"relative"}}>
            <h2 style={styles.title}>Mahalle Evlerinde Neler Yapıyoruz ?</h2>
                {/* <img src={img_bg_img} style={{...styles.imgBg,transform:"translate(+40%, -40%)",right:0}}/> */}
                <Row style={{position:"relative",padding:40}}>
                    <Col md="6" style={{position:"relative",padding:45,display:"flex",alignItems:"center"}}>
                        <img src={img_clip} style={styles1.img}/>
                    </Col>
                    <Col md="6">
                        <Container style={{display:"flex",flexDirection:"column",position:"relative",height:"100%",justifyContent:"space-between",paddingLeft:"5%",backgroundColor:"#fff",padding:"45px 40px"}}>
                            {/* sub item 1 */}
                            <Row>
                                <span style={styles1.title}>Mahalle Evlerinde</span>
                            </Row>
                            <Row style={styles1.paragraph}>
                                <ul className="list-blue-bullet">
                                    <li>
                                        Mahalle Evi’nde her mahallenin ilgi ve ihtiyacına uygun etkinlikler yer almaktadır. Çocukların psikososyal gelişimlerine yönelik atölyeler, bilim, sanat ve spor etkinlikleri, ilköğretim ve lise çağındaki çocukların akademik başarılarına destek olmak için eğitim destek faaliyetleri ve farklı alanlarda bireysel gelişim programları gerçekleştirilmektedir.
                                    </li>
                                    <li>
                                        Mahalle Evi’nde kadınlara yönelik atölyeler ve eğitim faaliyetleri ile kadınların bireysel, sosyal ve ekonomik olarak güçlenmeleri hedeflenmektedir.
                                    </li>
                                    <li>
                                        Mahalle Evi’nde tüm mahallelinin kolayca ve ücretsiz bir şekilde faydalanabileceği sosyal alanlar, kitaplar, eğitici materyaller, bilgisayarlar ve internet erişimi bulunmaktadır.
                                    </li>
                                    <li>
                                        Mahalle Evi’nde mahalleyi ilgilendiren meselelerin, mahalleli ile birlikte ele alınması ve çözümler üretilmesi hedeflenmektedir.
                                    </li>
                                </ul>
                            </Row>
                            {/* sub item 2
                            <Row>
                                <span style={styles1.title}>Gönüllülük Süreci</span>
                            </Row>
                            <Row style={styles1.paragraph}>
                                <ul className="list-blue-bullet">
                                    <li>
                                        Mahalle Evi’nde gönüllü olmak için başvuran adaylar Gönüllü Tanışma Toplantısı’na davet edilir.
                                    </li>
                                    <li>
                                        Tanışma toplantısına katılan, belirlediği gün ve saatlerde düzenli katılımı kabul eden gönüllüler tercih ettikleri gönüllülük türünde, tercih ettikleri gün ve saatlerde destek vermeye başlar.
                                    </li>
                                </ul>
                            </Row> */}
                        </Container>
                    </Col>
                </Row>
                {/* <img src={img_bg_img} style={{...styles.imgBg,transform:"translate(-40%, -190%)",left:0}}/> */}
            </Container>
            {/* ---------------------------------------------------- */}
        <Footer/>
    </>
)
}

export default MahalleAbout;


const styles1 = {
    // blueTitleContainer: {
    //     width: "100% 0",
    //     textAlign: "center",
    //     margin: 100
    // },
    // //continue from here
    // lastFont: {
    //     fontSize: 40,
    //     fontWeight: 600,
    //     fontFamily: "Poppins",
    //     color: "#0088CC",
    //     width: "fit-content",
    //     margin: "auto",
    //     position: "relative"
    // },
    // hr1: {
    //     border: "2px solid #0088CC"
    // },
    // hr2: {
    //     position: "absolute",
    //     top: 44,
    //     left: "50%",
    //     transform: "translateX(-50%)",
    //     width: 50,
    //     border: "6px solid #0088CC",
    //     borderRadius: 6
    // },
    img: {
        width: "100%"
    },
    // imgBg: {
    //     position: "absolute",
    //     zIndex: -1,
    //     // transform: "translate(-40%, -40%)"
    // },
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
    }
}