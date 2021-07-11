import React, {useRef} from 'react';

import img_arrow from '../assets/img/Group 6403.svg'

const Combobox = (props) => {
  const selectRef = useRef() 
  const styles = {
    selectBox: {
      width: "calc(100% + 20px)",
      height: 62,
      lineHeight: 62
    },
    container: {
      // background: "url(https://stackoverflow.com/favicon.ico) 96% / 20% no-repeat #EEE",
      overflow: "hidden",
      borderRight: "1px solid",
      position: "relative",
      width: "100%"
    },
    img:{
      position: "absolute",
      right: 0
    }
  }  

  const handleClick = (e) =>{
    // e.target.parentElement.getElementsByTagName("select")[0].click()
    // console.log(e.target.parentElement.getElementsByTagName("select")[0]);
    window.zebbi = e.target.parentElement.getElementsByTagName("select")[0]
    var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 5, 5, 0, 0, 0, false, false, false, false, 0, null);
        let worked = window.zebbi.dispatchEvent(e);
        console.log(worked);
  }

  return (
    <div style={{...styles.container,...props.style}}>
      <img style={styles.img} src={img_arrow} alt="nammi" onClick={handleClick} />
      <select ref={selectRef} style={styles.selectBox}>
        <option className="select-items" value="0">Mahalle evi arama</option>
        <option value="1">bahçelievler Mahalle Evi</option>
        <option value="2">bahçelievler Mahalle Evi</option>
        <option value="3">bahçelievler Mahalle Evi</option>
        <option value="4">bahçelievler Mahalle Evi</option>
        <option value="5">bahçelievler Mahalle Evi</option>
        <option value="6">bahçelievler Mahalle Evi</option>
        <option value="7">bahçelievler Mahalle Evi</option>
        <option value="8">bahçelievler Mahalle Evi</option>
        <option value="9">bahçelievler Mahalle Evi</option>
        <option value="10">bahçelievler Mahalle Evi</option>
        <option value="11">bahçelievler Mahalle Evi</option>
        <option value="12">bahçelievler Mahalle Evi</option>
      </select>    
    </div>
  )
}

export default Combobox