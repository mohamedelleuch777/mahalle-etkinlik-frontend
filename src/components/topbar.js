import React, { useState, useEffect } from 'react';
import useWindowSize from '../hooks/resize'

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
  import beyazmasa from '../assets/img/logo_head@2x.png';
  import youtube from '../assets/img/youtube.svg';

  const TopBar = (props) => {
    const [width, height] = useWindowSize();
    const [isMobile, setismobile] = useState(false);

    const styles = {
        main: {
            height: 50,
            width: "100%",
            backgroundColor: "#1D428A",
            padding: 9
        },
        imgContainer: {
            height: 33,
            display: "flex",
            justifyContent: "space-between",
            width: 300,
            marginLeft: "auto",
            marginRight: "10%"
        },
        svgItems: {
            width: "unset",
            height: 20,
            marginTop: 6
        }
    }

    useEffect( ()=>{
        console.log("w",width,"h",height);
        if(width<=992) {
            setismobile(true);
        } else {
            setismobile(false);
        }
    },[width,height])

    return(
        <>
         {
            isMobile || <div style={styles.main}>
                <div style={styles.imgContainer}>
                    <img style={styles.svgItems} src={youtube} alt="beyazmasa logo" />
                    <img style={styles.svgItems} src={youtube} alt="beyazmasa logo" />
                    <img style={styles.svgItems} src={youtube} alt="beyazmasa logo" />
                    <img src={beyazmasa} alt="beyazmasa logo" />
                </div>
            </div>
         }
        </>
    )
  }

  export default TopBar;