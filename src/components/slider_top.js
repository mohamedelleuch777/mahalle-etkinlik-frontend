import React from 'react'
// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    Table,
    Container,
  } from "reactstrap";
import Carousel from 'react-bootstrap/Carousel'

import slider_image1 from '../assets/img/slider1@2x.png'
import slider_image2 from '../assets/img/slider1@2x.png'
import slider_image3 from '../assets/img/slider1@2x.png'

const SliderTop = (props) => {
    return (
        <Container style={{margin:0,maxWidth:9999999}}>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider_image1} alt="First slide" />
                        <Carousel.Caption>
                        <h3>Bahçelievler Mahalle Evi Açıldı</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider_image2} alt="Second slide" />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider_image3} alt="Third slide"/>

                        <Carousel.Caption>
                        <h3>This is the third slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

        </Container>
    )
}

export default SliderTop;