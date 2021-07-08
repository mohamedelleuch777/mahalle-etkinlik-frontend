import React, { useState, useEffect } from "react";
import TopBar from "../components/topbar";
import Menu from "../components/menu";
import { Container, Row, Col } from "reactstrap";
import useWindowSize from "../hooks/resize";
import MahalleGaleriSlider from "../components/mahalle_gallery_slider";

import galery_main from "../assets/img/galery_main.png";
import img1 from "../assets/img/galery_main.png";
import img2 from "../assets/img/Mask Group 614@2x.png";
import img3 from "../assets/img/Mask Group 612@2x.png";
import img4 from "../assets/img/Image@2x.png";
import img5 from "../assets/img/girl-with-big-smile-classroom@2x.png";
import img6 from "../assets/img/Group 3106@2x.png";
import img7 from "../assets/img/Image@2x 2.png";

const MahalleGaleri = () => {
  const [width, height] = useWindowSize();
  let [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setismobile] = useState(false);

  useEffect(() => {
    if (width <= 992) {
      setismobile(true);
    } else {
      setismobile(false);
    }
  }, [width, height]);

  const styles = {
    title: {
      fontFamily: "Poppins",
      textAlign: "left",
      fontWeight: 600,
      paddingBottom: "40px",
      paddingTop: "40px",
    },
    titleMobile: {
        fontFamily: "Poppins",
        textAlign: "left",
        fontWeight: 600,
        paddingBottom: "0px",
        paddingTop: "40px",
      },
    gallery_main_container: {
      paddingBottom: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gallery_main: {
      objectFit: "contain",
      minWidth: "100%",
      height: "593px",
    },
    gallery_mainMobile: {
        objectFit: "contain",
        minWidth: "100%",
        height: "450px",
      },
  };

  const data = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
        img: img7,
    },
  ];

  return (
    <>
      <TopBar />
      <Menu />
      <Container
        fluid={1}
        style={{ backgroundColor: "#333333", color: "white" }}
      >
        <Container>
          <h2 style={isMobile ? styles.titleMobile : styles.title}>Zafer Mahalle Evi Galerisi</h2>

          <div style={styles.gallery_main_container}>
            <img
              src={data[currentImage].img}
              alt="main_galery"
              style={isMobile ? styles.gallery_mainMobile : styles.gallery_main}
            ></img>
          </div>

          <div style={{ paddingBottom: "40px" }}>
            <MahalleGaleriSlider
              data={data}
              setCurrentImage={setCurrentImage}
            />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default MahalleGaleri;
