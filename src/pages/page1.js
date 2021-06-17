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

  const Page1 = (props) => {


    return(
        <>
            <TopBar />
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