import React from 'react';
import styles from '../styles/Home.module.css'
import Link from "next/link";
import WindowTest from "./windowTest";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Link href="/drawing" className={styles.card}>
          <h2>Drawing Test &rarr;</h2>
          <p>드로잉 라이브러리 테스트</p>
        </Link>
        <Link href="/imageSpin" className={styles.card}>
          <h2>360-Deg image Test &rarr;</h2>
          <p>360도 이미지 테스트</p>
        </Link>
        <Link href="/watermark" className={styles.card}>
          <h2>Water Mark Test &rarr;</h2>
          <p>워터마크 테스트</p>
        </Link>
        <Link href="/test" className={styles.card}>
          <h2>Test &rarr;</h2>
          <p>테스트</p>
        </Link>
        <Link href="/windowTest" className={styles.card}>
          <h2>WindowTest &rarr;</h2>
          <p>윈도우 테스트</p>
        </Link>
        <Link href="/componentOrder" className={styles.card}>
          <h2>ComponentOrder &rarr;</h2>
          <p>컴포넌트 순서 배치</p>
        </Link>
        <Link href="/shape" className={styles.card}>
          <h2>shapeTest &rarr;</h2>
          <p>모형 테스트</p>
        </Link>
        <Link href="/square" className={styles.card}>
          <h2>squareTest &rarr;</h2>
          <p>반응형 정사각형 테스트</p>
        </Link>
        <Link href="/reacthookform" className={styles.card}>
          <h2>react-hook-from Test &rarr;</h2>
          <p>리액트 훅 폼 테스트</p>
        </Link>
        <Link href="/chartTest" className={styles.card}>
          <h2>Highcharts Test &rarr;</h2>
          <p>Highcharts 테스트</p>
        </Link>
        <Link href="/selectTest" className={styles.card}>
          <h2>Select Test &rarr;</h2>
          <p>Select 테스트</p>
        </Link>
        <Link href="/parallaxTest" className={styles.card}>
          <h2>Parallax Test &rarr;</h2>
          <p>Parallax 테스트</p>
        </Link>
        <Link href="/pannellumTest" className={styles.card}>
          <h2>Pannellum Test &rarr;</h2>
          <p>Pannellum 테스트</p>
        </Link>
        <Link href="/text3d" className={styles.card}>
          <h2>3D Text Test &rarr;</h2>
          <p>3D Text 테스트</p>
        </Link>
      </div>
    </div>
  )
}
