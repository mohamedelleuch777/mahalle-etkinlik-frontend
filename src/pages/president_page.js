import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'



import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container } from 'reactstrap';

import img_signature from '../assets/img/Group 6399.svg'
import img_blue from '../assets/img/Path 761.svg'
import img_orange from '../assets/img/Path 1517.svg'
import img_ekrem from '../assets/img/ekrem_imamoglu_portre@2x.png'

const PresidentPage = (props) => {
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();
    

    const styles = {
        title: {
            color: "#475677",
            fontSize: width<1568?(width>=1308?50:40):60,
            fontFamily: 'Poppins',
            textAlign: "left",
            margin: "60px 0",
            fontWeight: 600,
            marginLeft: 0,
            marginRight: "auto"
        },
        paragraph: {
            fontSize: width<1568?(width>=1308?20:17):22,
            fontWeight: 300,
            color: "#7D8597",
            fontFamily: 'Poppins',
            textAlign: "left",
            marginBottom: width<=1920?"3vw":70
        },
        signature: {
            marginTop: 20,
            width: "50%"
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
        <Container className="full-width" style={{display:"flex",position:"relative",margin:0}}>
            <div 
                style={{
                    width:"50%",
                    margin: "0 10%",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <h2 style={styles.title}>De??erli ??stanbullular,</h2>
                <p style={styles.paragraph}>
                    Mahalle Evi projesini ba??ar??yla hayata ge??irmenin ve f??rsat e??itli??i sa??layacak mahalle evlerimizin sizlerle bulu??mas??n??n mutlulu??unu ya????yorum.
                </p>
                <p style={styles.paragraph}>
                    Mahalle Evleri; sevgi dolu ??al????anlar??, yepyeni binalar?? ve rengarenk etkinlik alanlar?? ile hizmete a????l??yor. Bir ??ok yeni merkezimiz ise tamamlanmak ??zere.
                </p>
                <p style={styles.paragraph}>
                    G??n gelecek, size s??z verdi??im gibi ??stanbul???un her mahallesinde ??ocuklar, gen??ler, yeti??kinler mahalle evleriyle bulu??acak. F??rsat e??itli??inden mahrum kalan vatanda??lar??m??z i??in de her ??ey ??ok g??zel olacak.
                </p>
                <img style={styles.signature} src={img_signature} />
            </div>
            <div style={{position:"relative",width:"47%",display:"flex"}}>
                <img src={img_orange} style={{position:"absolute",top:0,left:"-15%",width:"130%",margin:"auto"}} />
                <img src={img_blue} style={{position:"absolute",top:-40,left:"-25%",bottom:0,width:"150%",margin:"auto"}} />
                <img src={img_ekrem} style={{position:"relative",top:0,left:0,width:"100%",margin:"auto"}} />
            </div>
        </Container>
        {/* ---------------------------------------------------- */}
        {/* <Footer/> */}
    </>
)
}

export default PresidentPage;