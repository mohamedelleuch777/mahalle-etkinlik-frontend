import React from 'react';
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


  import TopBar from '../components/topbar'
  import Menu from '../components/menu'

  const Page1 = (props) => {


    return(
        <>
            <TopBar />
            <Menu />
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="6">
                        test col 1
                    </Col>
                    <Col className="ml-auto mr-auto" md="6">
                        test col 2
                    </Col>
                </Row>
            </Container>
        </>
    )
  }

  export default Page1;