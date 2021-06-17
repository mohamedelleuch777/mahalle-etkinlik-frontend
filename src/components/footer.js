import React, { useState } from 'react';

  import footer from '../assets/img/footer@2x.png';
  

  const Footer = (props) => {
    
    const styles = {
        image: {
            width: "100%",
            
        }
    }


    return(
        <>
            <img style={styles.image} src={footer} />
        </>
    )
  }

  export default Footer;