import React from 'react';



import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SliderTop from '../components/slider_top'
import { Container } from 'reactstrap';

const MainPage = (props) => {

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
            textAlign: "center"
        }
    }

return(
    <>
        <TopBar />
        <Menu />
        <SliderTop />
        <Container>
            <h2 style={styles.title}>Sevgili Mahallelimiz</h2>
            <p style={styles.paragraph}>
                Mahalle Evi aracılığı ile mahalle ölçeğinde kadın, çocuk, yaşlı ve gençlerin sosyal ve kültürel hayata katılımının arttırılması, eğitim destek, psikososyal gelişim ve kültür-sanat faaliyetlerinin İstanbul'un her noktasına yayılması, mahallelinin belediye hizmetleri ve sosyal hizmetlere hak temelli erişebilmesi, mahalle kültürünü canlandırarak toplumsal dayanışmanın güçlendirilmesi hedeflenmektedir.
            </p>
            <p style={styles.paragraph}>
                Tüm bu hedefler doğrultusunda gönüllüler, okullar ve sivil toplum kuruluşlarıyla işbirliği yapmaktayız. Gönüllülerimiz, fırsat eşitliği oluşturma yolunda daha fazla kadına, çocuğa, yaşlıya ve gence ulaşmamıza katkı sağlamakta ve bizlere destek vermekte; bu gönüllülerimize <strong>"İstanbul Gönüllüleri"</strong> gönüllü ağı üzerinden ulaşmaktayız.
            </p>
        </Container>
        <Footer/>
    </>
)
}

export default MainPage;