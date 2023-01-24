import React from 'react'
import { useState } from "react";
import image from '../assets/proflight_logo.png'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import styles from './carrousel.module.css'

const Carrousel = () => {

const [current, setCurrent]=useState(0);

  const handleClickLeft=()=>{
    if (current === 0) setCurrent(3);
    else setCurrent(current-1);
  }

  const handleClickRight=()=>{
    if (current === 3) setCurrent(0);
    else setCurrent(current+1);
  }
    
  return (
    <div className={styles.main}>
    <div className={styles.container}>
        < SlArrowLeft onClick={handleClickLeft} className={styles.left}/>
        <img src={image} alt='imagen de prueba' className={(current === 0)?styles.selected:styles.unselected} />
        <img src={image} alt='imagen de prueba' className={(current === 1)?styles.selected:styles.unselected} />
        <img src={image} alt='imagen de prueba' className={(current === 2)?styles.selected:styles.unselected} />
        <img src={image} alt='imagen de prueba' className={(current === 3)?styles.selected:styles.unselected} />
        <SlArrowRight onClick={handleClickRight} className={styles.right}/>
    </div>
    </div>
  )
}

export default Carrousel