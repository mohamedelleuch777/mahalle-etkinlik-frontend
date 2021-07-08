import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/resize";
import { Button, Row, Container } from "reactstrap";
import ItemsCarousel from "react-items-carousel";

const MahalleGaleriSlider = (props) => {
  let { data, setCurrentImage } = props;
  const [isMobile, setismobile] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width <= 992) {
      setismobile(true);
    } else {
      setismobile(false);
    }
  }, [width, height]);

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <>
      <Container fluid="1" style={styles.container}>
        <Row>
          <div
            className="iletisim-slider-container galeri-slider-container"
            style={{ padding: "0 0px", maxWidth: "100%", margin: "0 auto" }}
          >
            <ItemsCarousel
              infiniteLoop={true}
              gutter={width * 0.026}
              activePosition={"center"}
              chevronWidth={isMobile ? 0 : 60}
              disableSwipe={false}
              alwaysShowChevrons={false}
              numberOfCards={isMobile ? 2 : 7}
              slidesToScroll={1}
              outsideChevron={true}
              showSlither={isMobile ? true : false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={(value) => setActiveItemIndex(value)}
              rightChevron={
                <Button
                  style={{
                    backgroundColor: "transparent",
                    padding: 0,
                    border: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? 20 : 40}
                    height={isMobile ? 20 : 40}
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Button>
              }
              leftChevron={
                <Button
                  style={{
                    backgroundColor: "transparent",
                    padding: 0,
                    border: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? 20 : 40}
                    height={isMobile ? 20 : 40}
                    fill="currentColor"
                    class="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </Button>
              }
            >
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={item.img}
                      alt={"sliderItem" + index}
                      style={styles.gallery_main}
                    ></img>
                  </div>
                );
              })}
            </ItemsCarousel>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MahalleGaleriSlider;

const styles = {
  container: {},
  columns: {
    textAlign: "center",
  },
  number: {
    color: "#475677",
    fontSize: 80,
    fontFamily: "Poppins",
    fontWeight: 900,
    justifyContent: "center",
  },
  description: {
    color: "#7D8597",
    fontSize: 18,
    fontWeight: 300,
    justifyContent: "center",
  },
  button: {
    padding: "14px 22px",
    backgroundColor: "#3A9544",
    borderRaidus: 6,
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: 700,
  },
  buttonParentRow: {
    justifyContent: "center",
    marginTop: 60,
  },
  bgDiv: {
    backgroundColor: "#F5F8FA",
    height: 180,
    width: "100%",
    border: "none",
    bottom: 0,
    position: "absolute",
    zIndex: -1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageHesKodu: {
    maxWidth: 500,
    width: "30%",
  },
  titleHesKodu: {
    color: "#3A9544",
    fontSize: 35,
    fontFamily: "Poppins",
    fontWeight: 700,
  },
  textHesKodu: {
    color: "#606060",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: 300,
    maxWidth: 820,
  },
  idv: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  gallery_main: {
    height: "128px",
    width: "140px",
    objectFit: "cover",
  },
};
