import React from 'react'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import { Container, Row, Col } from 'reactstrap';
import useWindowSize from '../hooks/resize'

import galery_main from '../assets/img/galery_main.png'

const MahalleGaleri = () => {
    const [width, height] = useWindowSize();

    const styles = {
        title: {
            fontFamily: 'Poppins',
            textAlign: "left",
            fontWeight: 600,
            paddingBottom: "40px",
            paddingTop: "40px",
        },
        gallery_main:{
            width: "100%"
        }
    }
    
    return (
        <>
            <TopBar />
            <Menu />
            <Container fluid={1} style={{backgroundColor:"#333333", color:'white'}}>
                <Container>
                    <h2 style={styles.title}>Zafer Mahalle Evi Galerisi</h2>

                    <div>
                        <img src={galery_main} alt="main_galery" style={styles.gallery_main}></img>
                    </div>


                </Container>
            </Container>
        </>
    )
}

export default MahalleGaleri
