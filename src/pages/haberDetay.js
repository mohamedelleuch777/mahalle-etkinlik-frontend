import React from "react";
import TopBar from "../components/topbar";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { Container, Row, Col } from "reactstrap";

import coverImg from "../assets/img/Rectangle 4@2x.png";
import img1 from "../assets/img/Rectangle 17@2x.png";
import img2 from "../assets/img/Rectangle 17.png";
import img3 from "../assets/img/meeting.png";
import img4 from "../assets/img/bando.png";

const HaberDetay = () => {
  return (
    <>
      <TopBar />
      <Menu />
      <Container className="newsDetail-container">
        <div className="newsDetail-coverImg">
          <img className="newsDetail-coverImg" src={coverImg} alt="cover"></img>
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
              <p>
                Lorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde
                kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
                galerisini alarak karıştırdığı 1500'lerden beri endüstri
                standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
                boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
                değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem
                Ipsum pasajları da içeren Letraset yapraklarının yayınlanması
                ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri
                içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
              </p>
            </div>
          </div>

          <div className="newsDetail-content-container">
            <div className="newsDetail-header">
              <h5>Neden Kullanırız ?</h5>
            </div>
            <div className="newsDetail-content">
              <p>
                Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı
                bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli
                'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla
                daha dengeli bir harf dağılımı sağlayarak okunurluğu
                artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web
                sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem
                Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum'
                anahtar sözcükleri ile arama yapıldığında henüz tasarım
                aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen
                kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli
                sürümleri geliştirilmiştir.
              </p>
            </div>
          </div>

          <div className="newsDetail-content-container">
            <div className="newsDetail-header">
              <h5>Nereden Gelir ?</h5>
            </div>
            <div className="newsDetail-content">
              <p>
                Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                Virginia'daki Hampden-Sydney College'dan Latince profesörü
                Richard McClintock, bir Lorem Ipsum pasajında geçen ve
                anlaşılması en güç sözcüklerden biri olan 'consectetur'
                sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin
                bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve
                Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
                tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
                pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                sayılı bölümdeki bir satırdan gelmektedir.
              </p>
            </div>
          </div>

          <div className="newsDetail-content-container">
            <p className="newsDetail-quote">
              "1500'lerden beri kullanılmakta olan standard Lorem Ipsum
              metinleri ilgilenenler için yeniden üretilmiştir. Çiçero
              tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
              çevirisinden alınan İngilizce sürümleri eşliğinde özgün biçiminden
              yeniden üretilmiştir."
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-1 pt-5">
              <img style={{ maxWidth: "100%" }} src={img1} alt="test"></img>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-1 pt-5">
              <img style={{ maxWidth: "100%" }} src={img2} alt="test"></img>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-1 pt-5">
              <img style={{ maxWidth: "100%" }} src={img3} alt="test"></img>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-1 pt-5">
              <img style={{ maxWidth: "100%" }} src={img4} alt="test"></img>
            </div>
          </div>

          <div className="share-on-socails-container">
            <div className="share-on-socails-header">Haberi Paylaş:</div>
            <div className="share-on-socails">
              <button className="share-on-socails-btn share-on-socails-fb ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <div>Facebook</div>
              </button>

              <button className="share-on-socails-btn share-on-socails-tw ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>

                <div>Twitter</div>
              </button>
              <button className="share-on-socails-btn share-on-socails-wp ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <div>Whatsapp</div>
              </button>
            </div>
          </div>

          <hr></hr>

          <div className="newsDetail-title">
            <h3>Diğer Haberler</h3>
          </div>

          <div className="otherNews-container">
            <div className="row">

              <div className="col-xl-4 col-lg-6 col-md-12 newsDetail-item-container">
                  <div className="newsDetail-item">
                    <img src={img1} className="newsDetail-img"></img>
                    <small className="newsDetail-small">14.06.2021</small>
                    <h6 className="newsDetail-header">Cumhuriyet mahalle evinde Dans ve Ritm atölye eğitimlerimiz başladı.</h6>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-12 newsDetail-item-container">
                  <div className="newsDetail-item">
                    <img src={img2} className="newsDetail-img"></img>
                    <small className="newsDetail-small">13.06.2021</small>
                    <h6 className="newsDetail-header">Pazariçi mahalle evinde çocuklara yönelik dans eğitimlerimiz başladı.</h6>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-12 newsDetail-item-container">
                  <div className="newsDetail-item">
                    <img src={img3} className="newsDetail-img"></img>
                    <small className="newsDetail-small">15.06.2021</small>
                    <h6 className="newsDetail-header">Cumhuriyet mahalle evinde yetişkinlere yönelik "Aile Ekonomisi Eğitimleri"miz başladı.</h6>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-12 newsDetail-item-container">
                  <div className="newsDetail-item">
                    <img src={img4} className="newsDetail-img"></img>
                    <small className="newsDetail-small">14.06.2021</small>
                    <h6 className="newsDetail-header">Cumhuriyet mahalle evinde Dans ve Ritm atölye eğitimlerimiz başladı.</h6>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-12 newsDetail-item-container">
                  <div className="newsDetail-item">
                    <img src={img1} className="newsDetail-img"></img>
                    <small className="newsDetail-small">13.06.2021</small>
                    <h6 className="newsDetail-header">Pazariçi mahalle evinde çocuklara yönelik dans eğitimlerimiz başladı.</h6>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-12 newsDetail-item-container">
                  <div className="newsDetail-item">
                    <img src={img2} className="newsDetail-img"></img>
                    <small className="newsDetail-small">15.06.2021</small>
                    <h6 className="newsDetail-header">Cumhuriyet mahalle evinde yetişkinlere yönelik "Aile Ekonomisi Eğitimleri"miz başladı.</h6>
                  </div>
              </div>
              

            </div>
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default HaberDetay;
