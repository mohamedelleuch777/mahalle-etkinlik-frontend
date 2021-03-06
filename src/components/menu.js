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
    NavbarBrand,
    UncontrolledCollapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    TabContent,
    TabPane,
    Row,
    Col,
    Table,
    Container,
    Navbar,
    Collapse, 
    NavbarToggler
  } from "reactstrap";
  import ibb_logo from '../assets/img/ibb-logo.svg';
  import mah_ev_logo from '../assets/img/mah-ev-logo.svg';
  import icon_search from '../assets/img/icon_search.svg';

  const Menu = (props) => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [selectedMenu, setselectedMenu] = useState(1);
    const [isMobile, setismobile] = useState(false);
    const [width, height] = useWindowSize();
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);


    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    const updateSelectedItem = (val) => {
        setselectedMenu(val);
    }

    useEffect( ()=>{
        // console.log("w",width,"h",height);
        if(width<=992) {
            setismobile(true);
        } else {
            setismobile(false);
        }
    },[width,height])


    useEffect(()=>{
        switch(window.location.pathname)
        {
            case "/welcome": {
                setselectedMenu(1)
                break;
            }
            case "/president": {
                setselectedMenu(2)
                break;
            }
            case "/about": {
                setselectedMenu(3)
                break;
            }
            case "/mahol": {
                setselectedMenu(4)
                break;
            }
            case "/mahalleevlerimiz": {
                setselectedMenu(4)
                break;
            }
            case "/haberler": {
                setselectedMenu(3)
                break;
            }
        }
    },[])


    return(
        <>
            {/* normal menu for desktop */}
            {
                isMobile || <Navbar style={{padding:0,height:120,borderBottom: "5px solid #CBD7E2",zIndex:100}}>
            
                    <div style= {styles.divContainer}>
                    {/* <Container> */}
                        <div style={styles.main}>
                            <img style={{...styles.svgItems}} src={mah_ev_logo} alt="mah ev logo" />
                            {width>=1100 && <div style={{display:"flex",flexDirection: "column",fontFamily:"Poppins",fontSize: 12,fontWeight: 600,color:"#CE1432"}}>
                                <span>MAHALLE EV??</span>
                                <span style={{width:150,whiteSpace: "pre-wrap",fontFamily:"Poppins",fontWeight: 600,color:"#1D428A"}}>??BB SOSYAL H??ZMETLER M??D??RL??????</span>
                            </div>}
                        </div>
                        <Dropdown onClick={()=>updateSelectedItem(1)}>
                            <DropdownToggle 
                                style={{
                                    ...styles.dropdown,
                                    backgroundColor: selectedMenu == 1 && "#F8FAFD" || "#00000000",
                                    color: selectedMenu == 1 && "#7294D5" || "#000",
                                    border: selectedMenu == 1 && "1px solid #CBD7E2" || "none"
                                }}
                                onClick={ () => {
                                    window.location.href = "/welcome"
                                }}
                            >
                                Ana Sayfa
                                {selectedMenu == 1 && <hr style={styles.bar}></hr>}
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown onClick={()=>updateSelectedItem(2)}>
                            <DropdownToggle 
                                style={{
                                    ...styles.dropdown,
                                    backgroundColor: selectedMenu == 2 && "#F8FAFD" || "#00000000",
                                    color: selectedMenu == 2 && "#7294D5" || "#000",
                                    border: selectedMenu == 2 && "1px solid #CBD7E2" || "none"
                                }}
                                onClick={ () => {
                                    window.location.href = "/president"
                                }}
                            >
                                Ba??kan??n Mesaj??
                                {selectedMenu == 2 && <hr style={styles.bar}></hr>}
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown isOpen={dropdownOpen1} toggle={toggle1} onClick={()=>updateSelectedItem(3)}>
                            <DropdownToggle style={{
                                    ...styles.dropdown,
                                    backgroundColor: selectedMenu == 3 && "#F8FAFD" || "#00000000",
                                    color: selectedMenu == 3 && "#7294D5" || "#000",
                                    border: selectedMenu == 3 && "1px solid #CBD7E2" || "none"
                                }}
                                caret>
                                Mahalle Evleri
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                        onClick={ () => {
                                            window.location.href = "/about"
                                        }}
                                >Hakk??m??zda</DropdownItem>
                                <DropdownItem
                                        onClick={ () => {
                                            window.location.href = "/mahalleevlerimiz"
                                        }}
                                >Mahalle Evlerimiz</DropdownItem>
                                <DropdownItem
                                        onClick={ () => {
                                            window.location.href = "/about"
                                        }}
                                >Neler Yap??yoruz</DropdownItem>
                                <DropdownItem
                                        onClick={ () => {
                                            window.location.href = "/haberler"
                                        }}
                                >Haberler ve Duyurlar</DropdownItem>
                                <DropdownItem
                                        onClick={ () => {
                                            window.location.href = "/haberler"
                                        }}
                                >??lkelerimiz</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2} onClick={()=>updateSelectedItem(4)}>
                            <DropdownToggle style={{
                                    ...styles.dropdown,
                                    backgroundColor: selectedMenu == 4 && "#F8FAFD" || "#00000000",
                                    color: selectedMenu == 4 && "#7294D5" || "#000",
                                    border: selectedMenu == 4 && "1px solid #CBD7E2" || "none"
                                }}
                                caret>
                                Ba??vuru Yap
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                    onClick={ () => {
                                        window.location.href = "/mahol"
                                    }}
                                >Mahalleli Ol</DropdownItem>
                                <DropdownItem>G??n??ll?? Ol</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown onClick={()=>updateSelectedItem(5)}>
                            <DropdownToggle style={{
                                    ...styles.dropdown,
                                    backgroundColor: selectedMenu == 5 && "#F8FAFD" || "#00000000",
                                    color: selectedMenu == 5 && "#7294D5" || "#000",
                                    border: selectedMenu == 5 && "1px solid #CBD7E2" || "none"
                                }}>
                                S.S.S
                                {selectedMenu == 5 && <hr style={styles.bar}></hr>}
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown onClick={()=>updateSelectedItem(6)}>
                            <DropdownToggle style={{
                                    ...styles.dropdown,
                                    backgroundColor: selectedMenu == 6 && "#F8FAFD" || "#00000000",
                                    color: selectedMenu == 6 && "#7294D5" || "#000",
                                    border: selectedMenu == 6 && "1px solid #CBD7E2" || "none"
                                }}>
                                ??leti??im
                                {selectedMenu == 6 && <hr style={styles.bar}></hr>}
                            </DropdownToggle>
                        </Dropdown>
                        <Button style={styles.button}>Giri?? yap</Button>
                        <div style={{position:"relative"}}>
                            <Input id="input-search" style={styles.input} placeholder="Arama..."/>
                            <img style={{position:"absolute",top:10,right:10,width:16}} src={icon_search} alt="search icon" />
                        </div>

                    </div>
                    {/* </Container> */}
                </Navbar>
            }
            {/* hamburger menu for mobile */}
            {
                isMobile && <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">
                    <div style={styles.main}>
                        <img style={{...styles.svgItems}} src={mah_ev_logo} alt="mah ev logo" />
                        <div style={{display:"flex",flexDirection: "column",fontFamily:"Poppins",fontSize: 12,fontWeight: 600,color:"#CE1432"}}>
                            <span>MAHALLE EV??</span>
                            <span style={{width:150,whiteSpace: "pre-wrap",fontFamily:"Poppins",fontWeight: 600,color:"#1D428A"}}>??BB SOSYAL H??ZMETLER M??D??RL??????</span>
                        </div>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="hamburger-button" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar style={{width:"100vw", height: "100vh", zIndex: 899, position: "fixed", top: 80, left: 0, backgroundColor: "#fff"}}>
                        <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
              </Navbar>
            }
        </>
    )
  }

  export default Menu;



  const styles = {
    main: {
        // height: 120,
        // width: "100%",
        backgroundColor: "#FFFFFF",
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        alignItems: "center"
    },
    imgContainer: {
        height: 33,
        display: "flex",
        justifyContent: "space-between",
        width: 300,
        marginLeft: "auto",
        marginRight: "10%"
    },
    divContainer: {
        margin: "0px 2%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    svgItems: {
        width: 74,
        height: 74
    },
    dropdown: {
        // backgroundColor: "#00000000",
        // border: "1px solid #CBD7E2",
        // color: "#7294D5",
        height: 35,
        paddingLeft: 10,
        paddingRight: 10,
        // padding: 0,
        paddingTop: 6.5,
        paddingBottom: 6.5,
        outline: "none",
        boxShadow: "none",
        // minWidth: 140,
        fontFamily: "poppins",
        fontSize: 14,
        whiteSpace: "noWrap"
    },
    bar: {
        border: "3px solid #7294D5",
        backgroundColor: "#7294D5",
        borderRadius: 3,
        // minWidth: 60,
        // maxWidth: 60
        width: "45%"
    },
    button: {
        fontFamily: "poppins",
        fontSize: 14,
        width: 120,
        height: 35,
        color: "#fff",
        backgroundColor: "#1D428A",
        margin: "0 10px"
    },
    input: {
        maxWidth: 256,
        border: "1px solid #D0DBE4",
        borderRadius: 0,
        // margin: "0 10px"
        paddingRight: 30
    }
}