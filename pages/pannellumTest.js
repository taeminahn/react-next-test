import React, {useState, useEffect} from 'react';
import ReactPannellum, { getConfig, mouseEventToCoords } from "react-pannellum";
// import interior from "/interior.jpg";

const PannellumTest = () => {

  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);

  const hotSpots = [
    { id: 1, pitch: -34.33460508750484, yaw: -19.3287651419112, type: 'info', text: 'Welcome!' },
    { id: 2, pitch: -16.65415630910657, yaw: -19.82149106313828, type: 'info', text: 'Welcome!' },
    { id: 3, pitch: -52.58229852255731, yaw: 6.347267952332979, type: 'info', text: 'Welcome!' },
    // Add more hotspots here
  ];


  const config = {
    // autoRotate: -2,
    autoLoad: true,
    // hotSpotDebug: true,
    hotSpots,
  };

  const pitchSetting = (e) => {
    console.log(e);
    console.log(123)
  }

  return (
    <div>
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="interior.jpg"
        // imageSource="panorama_test.jpg"
        config={config}
      />
      <div onClick={pitchSetting}>Click me</div>
      <div>{yaw}</div>
      <div>{pitch}</div>
    </div>
  );
};

export default PannellumTest;