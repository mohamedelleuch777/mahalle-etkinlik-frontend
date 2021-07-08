import React from 'react'
import TopBar from '../components/topbar'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Row, Col } from 'reactstrap';

import coverImg from '../assets/img/Rectangle 4@2x.png'
import img1 from '../assets/img/Rectangle 17@2x.png'
const HaberDetay = () => {



    return (
        <>
            <TopBar />
            <Menu />
            <Container className="newsDetail-container">
               <div className="newsDetail-coverImg">
                   <img className="newsDetail-coverImg" src={coverImg} alt="cover" ></img>
               </div>
               <Container className="newsDetail-inside-container">
                   
                <div className="newsDetail-title">
                    <h1>Zafer Mahalle evi açıldı</h1>
                </div>

                <div className="newsDetail-info">
                    <small>İBB / Haber ve Duyurular / 14.06.2021</small>
                </div>



                <div className="newsDetail-content-container">
                    <div className="newsDetail-header">
                        <h5>Lorem Ipsum Nedir ?</h5>
                    </div>
                    <div className="newsDetail-content">
                        <p>Lorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                    </div>
                </div>




                <div className="newsDetail-content-container">
                    <div className="newsDetail-header">
                        <h5>Neden Kullanırız ?</h5>
                    </div>
                    <div className="newsDetail-content">
                        <p>Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.</p>
                    </div>
                </div>




                <div className="newsDetail-content-container">
                    <div className="newsDetail-header">
                        <h5>Nereden Gelir ?</h5>
                    </div>
                    <div className="newsDetail-content">
                        <p>Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p>
                    </div>
                </div>


                <div className="newsDetail-content-container">
                    <p className="newsDetail-quote">
                    "1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir."
                    </p>
                </div>


                <Row className="newsDetail-images-container">
                    <Col xl="3" sm="1" md="1">
                        <img style={{maxWidth:"100%"}} src={img1} alt="test" ></img>
                    </Col>
                    <Col xl="3" sm="1" md="1">
                        <img style={{maxWidth:"100%"}} src={img1} alt="test" ></img>
                    </Col>
                    <Col xl="3" sm="1" md="1">
                        <img style={{maxWidth:"100%"}} src={img1} alt="test" ></img>
                    </Col>
                    <Col xl="3" sm="1" md="1">
                        <img style={{maxWidth:"100%"}} src={img1} alt="test" ></img>
                    </Col>
                    
                    
                </Row>






               </Container>
            </Container>
            <Footer/>
        </>
    )
}

export default HaberDetay
