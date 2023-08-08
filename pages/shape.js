import React from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const PolygonButton = styled.button`
 background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='56' viewBox='0 0 400 56' fill='none'%3E%3Cpath d='M22.2367 1.76158C23.4693 0.938995 24.918 0.5 26.3999 0.5H396C397.933 0.5 399.5 2.067 399.5 4V35.7209C399.5 38.2273 398.248 40.5681 396.163 41.9594L377.763 54.2384C376.531 55.061 375.082 55.5 373.6 55.5H3.99999C2.067 55.5 0.5 53.933 0.5 52V20.2791C0.5 17.7727 1.75202 15.4319 3.83682 14.0406L22.2367 1.76158Z' stroke='%2305141F' stroke-opacity='0.4'/%3E%3C/svg%3E");
 background-size: auto;
 background-position: center;
 background-repeat: no-repeat;
`

const Shape = () => {
  return (
    <div className={styles.shapeWrap}>
      {/*<button className={styles.testButtonTwo}></button>*/}
      {/*<PolygonButton />*/}
      <div className={styles.canvas}></div>
    </div>
  );
};

export default Shape;