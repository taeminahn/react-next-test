import React, { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
// import {SectionsContainer, Section} from 'react-fullpage';

const ParallaxTest = () => {

  // let options = {
  //   activeClass:          'active', // the class that is appended to the sections links
  //   anchors:              ['', '', ''], // the anchors for each sections
  //   arrowNavigation:      true, // use arrow keys
  //   className:            'SectionContainer', // the class name for the section container
  //   delay:                1000, // the scroll animation speed
  //   navigation:           true, // use dots navigatio
  //   scrollBar:            false, // use the browser default scrollbar
  //   sectionClassName:     'Section', // the section class name
  //   sectionPaddingTop:    '0', // the section top padding
  //   sectionPaddingBottom: '0', // the section bottom padding
  //   verticalAlign:        false, // align the content of each section vertical
  //   fitToSection: false,
  //   offsetSections: true,
  // };

  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      // 스크롤 행동 구현
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }  else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }else {
          // 현재 3페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }

    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={outerDivRef}>
      {/*<SectionsContainer {...options} fp-auto-height>*/}
      {/*  <Section className={`${styles.sction} ${styles.red}`}>Page 1</Section>*/}
      {/*  <Section className={`${styles.sction} ${styles.blue}`}>Page 2</Section>*/}
      {/*  <Section className={`${styles.sction} ${styles.green}`}>Page 3</Section>*/}
      {/*</SectionsContainer>*/}
      <section className={`${styles.sction} ${styles.red}`}>Page 1</section>
      <section className={`${styles.sction} ${styles.blue}`}>Page 2</section>
      <section className={`${styles.sction} ${styles.green}`}>Page 3</section>
      <section className={`${styles.sction} ${styles.purple}`}>Page 4</section>
    </div>
  );
};

export default ParallaxTest;