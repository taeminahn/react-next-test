import React, {Suspense, useEffect, useRef, useState} from 'react';
import dynamic from "next/dynamic";
import 'react-tridi/dist/index.css';
import ImageVr from "../component/imageVR";

const ImageSpin = () => {

  // const DynamicTridi = dynamic(() => import('react-tridi'), {
  //   ssr: false,
  // });
  //
  // const pins = [
  //   { "id": "kcyvybbrjkr8lz7w1j", "frameId": 0, "x": "0.664000", "y": "0.570922", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcyvybrdwmi3z1ig", "frameId": 1, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcyvybrmi3z1ig", "frameId": 2, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcyvybrdbqw1ig", "frameId": 3, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcyvybrdmi3z1ig", "frameId": 4, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcbqwmi3z1ig", "frameId": 5, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcyvybbqwmi3z1ig", "frameId": 6, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcyvybrdbqwz1ig", "frameId": 7, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  //   { "id": "kcybrdi3z1ig", "frameId": 8, "x": "0.340000", "y": "0.500000", "recordingSessionId": "klbp4jr3r7vyy5nnmkg" },
  // ]
  //
  // const tridiRef = useRef(null);
  //
  // const recordStartHandler = (recordingSessionId) =>
  //   console.log('on record start', { recordingSessionId, pins });
  //
  // const recordStopHandler = (recordingSessionId) =>
  //   console.log('on record stop', { recordingSessionId, pins });
  //
  // const pinClickHandler = (pin) => {
  //   console.log('on pin click', pin);
  //   tridiRef.current.toggleRecording(true, pin.recordingSessionId);
  // };
  return (
    <div>
      {/*<DynamicTridi*/}
      {/*  ref={tridiRef}*/}
      {/*  location="/image/imageSpin/"*/}
      {/*  format="jpg"*/}
      {/*  count="36"*/}
      {/*  onRecordStart={recordStartHandler}*/}
      {/*  onRecordStop={recordStopHandler}*/}
      {/*  onPinClick={pinClickHandler}*/}
      {/*  pins={pins}*/}
      {/*/>*/}
      {/*<img src="image/imageSpin/kr_g80_rg3-00000.jpg" alt=""/>*/}
      <ImageVr />
    </div>
  );
};

export default ImageSpin;