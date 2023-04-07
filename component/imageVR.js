import React, {useCallback, useEffect, useState} from 'react';
import styles from "../styles/Home.module.css";

const ImageVr = () => {

  const baseUrl = 'image/imageSpin/';
  const count = 36;

  const [currentImg, setCurrentImg] = useState(1);

  const nextCurrentImg = useCallback(() => {
      console.log(currentImg);
    if (currentImg === count) {
      setCurrentImg(1);
      return;
    }
    setCurrentImg(currentImg + 1);
  }, [currentImg]);

  const prevCurrentImg = useCallback(() => {
    if (currentImg === 1) {
      setCurrentImg(36);
      return;
    }
    setCurrentImg(currentImg - 1);
  }, [currentImg]);

  const onDrag = useCallback((e) => {
    // console.log("clientX", e.clientX);
    // console.log("pageX", e.pageX);
    nextCurrentImg();
  }, []);

  return (
    <div>
      <div className={styles.imgWrap}>
        <img onDrag={onDrag} style={{display: 'block'}} src={`image/imageSpin/${currentImg}.jpg`} alt=""/>
      </div>
      <button onClick={nextCurrentImg}>next</button>
      <button onClick={prevCurrentImg}>prev</button>
    </div>
  );
};

export default ImageVr;