import React from 'react';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import buttonLeft from '../public/button_left.png';
import buttonRight from '../public/button_right.png';


const Shape = () => {
  return (
    <div className={styles.shapeWrap}>
      {/*<div className={styles.shape}></div>*/}
      {/*<svg>*/}
      {/*  <path*/}
      {/*    d="M248.761,92c0,9.801-7.93,17.731-17.71,17.731c-0.319,0-0.617,0-0.935-0.021c-10.035,37.291-51.174,65.206-100.414,65.206 c-49.261,0-90.443-27.979-100.435-65.334c-0.765,0.106-1.531,0.149-2.317,0.149c-9.78,0-17.71-7.93-17.71-17.731 c0-9.78,7.93-17.71,17.71-17.71c0.787,0,1.552,0.042,2.317,0.149C39.238,37.084,80.419,9.083,129.702,9.083c49.24,0,90.379,27.937,100.414,65.228h0.021c0.298-0.021,0.617-0.021,0.914-0.021C240.831,74.29,248.761,82.22,248.761,92z"*/}
      {/*    fill="#f9ef21" stroke="#f9cf01" stroke-width="7" stroke-linejoin="round" />*/}
      {/*</svg>*/}
      <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
        {/*<rect width="480" height="240" fill="#3d87fb" x="0" y="0" rx="20" ry="20" />*/}
        {/*<polygon*/}
        {/*  points="50,5 100,5 125,30 125,80 100,105 50,105 25,80 25,30"*/}
        {/*  strokeLinejoin="round"*/}
        {/*  strokeWidth="5"*/}
        {/*  stroke="red"*/}
        {/*  fill="#FFF" />*/}
        <path xmlns="http://www.w3.org/2000/svg" d="M30.8476 1.85735C32.1087 0.973903 33.6111 0.5 35.1509 0.5H274C275.933 0.5 277.5 2.067 277.5 4V52.9795C277.5 55.4259 276.307 57.7185 274.303 59.1221L247.152 78.1427C245.891 79.0261 244.389 79.5 242.849 79.5H4C2.06701 79.5 0.5 77.933 0.5 76V27.0205C0.5 24.5741 1.69314 22.2815 3.69677 20.8779L30.8476 1.85735Z" stroke="white"/>
        <path xmlns="http://www.w3.org/2000/svg" d="M30.8476 1.85735C32.1087 0.973903 33.6111 0.5 35.1509 0.5H274C275.933 0.5 277.5 2.067 277.5 4V52.9795C277.5 55.4259 276.307 57.7185 274.303 59.1221L247.152 78.1427C245.891 79.0261 244.389 79.5 242.849 79.5H4C2.06701 79.5 0.5 77.933 0.5 76V27.0205C0.5 24.5741 1.69314 22.2815 3.69677 20.8779L30.8476 1.85735Z" stroke="#05141F" stroke-opacity="0.4"/>
      </svg>

      {/*<Image src={buttonLeft} alt=""/>*/}
      {/*<Image src={buttonRight} alt=""/>*/}
    </div>
  );
};

export default Shape;