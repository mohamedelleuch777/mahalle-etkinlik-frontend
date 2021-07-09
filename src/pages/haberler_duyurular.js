import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/resize'


import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SliderTop from '../components/slider_top'
import { Container, Row, Col } from 'reactstrap';


import img_clip from '../assets/img/image 12.png'
import rectangle from '../assets/img/Rectangle 4@2x.png'

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
            color: "#666666",
            fontFamily: 'Poppins',
            textAlign: "regular",
            // margin: "40px 0",
            fontSize: 14,
            marginTop:-15

        },
        img: {
            width: "100%",
            height: 'auto',
            marginTop: 100,
        },
        path: {
            listStyle: "none",
            display: "flex",
            padding: 0
        },
        item: {
            // marginLeft: 15,
            color: "#999999",
            fontSize: 12,
            fontFamily: 'Poppins',
            textAlign: "center",
            // margin: "60px 0",
            fontWeight: 500
        },
        quote:{
            color: "#0187CB",
            fontSize:22,
            fontFamily: 'Poppins',
            marginTop:26.7
            
        },
        bold:{
            color: "#0187CB",
            fontSize:60,
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight:"bold",
            lineHeight:"60px"

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
        <Container style={{boxShadow:"#0000001A 0px 0px 15px 0px", padding:0}}>
            <img src={rectangle} style={styles.img}/>
            <Container style={{margin:"0 5%",width:"90%"}} >
                <h3 style={{marginTop:"43.2px"}}>Zafer mahalle evi açıldı</h3>
                <ul style={styles.path}>
                    <li style={styles.item}>IBB</li>
                    <li className="path-item" style={styles.item}>Haber ve Duyurular</li>
                    <li className="path-item" style={styles.item}>14.06.2021</li>
                </ul>
                <p style={styles1.title}>Lorem Ipsum Nedir?</p>
                <p style={styles.paragraph}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                <p style={styles1.title}>Neden Kullanırız?</p>
                <p style={styles.paragraph}>Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.</p>
                <p style={styles1.title}>Nereden Gelir?</p>
                <p style={styles.paragraph}>Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p>
                <p className="paragraph-indented" style={styles.quote}>&#8222;1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir.</p>
            </Container>
        </Container>
        
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
        fontSize: 14,
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