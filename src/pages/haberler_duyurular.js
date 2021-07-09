import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'


import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SliderTop from '../components/slider_top'
import { Container, Row, Col } from 'reactstrap';


import img_clip from '../assets/img/image 12.png'

const HaberlerDuyurular = (props) => {
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
        
            {/* ---------------------------------------------------- */}
        <Footer/>
    </>
)
}

export default HaberlerDuyurular;


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