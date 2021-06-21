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


const MahalleBasvuru = (props) => {

    const styles = {
        container: {
            margin: "60px auto"
        },
        columns: {
            textAlign: "center"
        },
        number: {
            color: "#475677",
            fontSize: 80,
            fontFamily: "Poppins",
            fontWeight: 900,
            justifyContent: "center"
        },
        description: {
            color: "#7D8597",
            fontSize: 18,
            fontWeight: 300,
            justifyContent: "center"
        },
        button: {
            padding: "14px 22px",
            backgroundColor: "#3A9544",
            borderRaidus: 6,
            fontSize: 24,
            fontFamily: 'Poppins',
            fontWeight: 700
        },
        buttonParentRow: {
            justifyContent: "center",
            marginTop: 60
        }
    }
    return(
        <>
            <Container style={styles.container}>
                <Row>
                    <Col style={styles.columns} md="3">
                        <Container>
                            <Row style={styles.number}>24</Row>
                            <Row style={styles.description}>Eğitim Atölyesi</Row>
                        </Container>
                    </Col>
                    <Col style={styles.columns} md="3">
                        <Container>
                            <Row style={styles.number}>8</Row>
                            <Row style={styles.description}>Mahalle Evi</Row>
                        </Container>
                    </Col>
                    <Col style={styles.columns} md="3">
                        <Container>
                            <Row style={styles.number}>150</Row>
                            <Row style={styles.description}>Eğitim Gönüllüsü</Row>
                        </Container>
                    </Col>
                    <Col style={styles.columns} md="3">
                        <Container>
                            <Row style={styles.number}>1820</Row>
                            <Row style={styles.description}>Mahalle Evi Sakini</Row>
                        </Container>
                    </Col>
                </Row>
                <Row style={styles.buttonParentRow}>
                    <Button style={styles.button}>
                        Mahalleli veya Gönüllü olmak için tıklayın
                    </Button>
                </Row>
            </Container>
            <hr style={{borderBottom: "5px solid #CBD7E2"}} />
        </>
    )
}

export default MahalleBasvuru;