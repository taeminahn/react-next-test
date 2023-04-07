import React, {useRef, useState} from "react";
import {ReactSketchCanvas} from 'react-sketch-canvas';
import html2canvas from "html2canvas";
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import cls from 'classnames';

const styles = {
  border: '1px solid #9c9c9c',
  width: '100%',
  height: '100%',
  position: "relative",
  zIndex: "1000",
  // position: "absolute",
  // top: 0,
  // left: 0,
};


const Drawing = () => {

  const canvasRef = useRef();

  const [dataURI, setDataURI] = useState();
  const [onDrawing, setOnDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [canvasColor, setCanvasColor] = useState("transparent");

  const changeOnDrawing = () => {
    setOnDrawing(true);
  }

  const changeOffDrawing = () => {
    setOnDrawing(false);
  }

  const changeStrokeColor = (e) => {
    setStrokeColor(e.target.value);
  }

  const changeCanvasColor = (e) => {
    setCanvasColor(e.target.value);
  }

  const changeTransparentCanvasColor = () => {
    setCanvasColor("transparent");
  }

  const undoHandler = async () => {
    const undo = await canvasRef.current?.undo;

    if (undo) {
      undo();
    }
  };

  const redoHandler = async () => {
    const redo = await canvasRef.current?.redo;

    if (redo) {
      redo();
    }
  };

  const clearHandler = async () => {
    const clearCanvas = await canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };

  const resetCanvasHandler = async () => {
    const resetCanvas = await canvasRef.current?.resetCanvas;

    if (resetCanvas) {
      resetCanvas();
    }
  };

  const saveHandler = async () => {
    // const exportedDataURI = await canvasRef.current?.exportImage?.();

    // if (exportedDataURI) {
    //   setDataURI(exportedDataURI);
    //
    //   const downloadImage = document.createElement("a");
    //   downloadImage.href = exportedDataURI;
    //   downloadImage.download = "paint_image";
    //   downloadImage.click();
    // }
    html2canvas(document.getElementById('sketchCanvas')).then(canvas => {
      onSaveAs(canvas.toDataURL('image/png'), 'image-download.png')
    });
  };

  const onSaveAs = (uri, filename) => {
    let link = document.createElement('a');
    link.href = uri;
    link.download = filename;
    link.click();
  }

  const text = "DEV";

  const options = {
    chunkWidth: 200,
    chunkHeight: 60,
    textAlign: "left",
    textBaseline: "bottom",
    globalAlpha: 1,
    font: "20px arial",
    rotateAngle: -0.26,
    fillStyle: "#E07900"
  };

  return (
    <div className="flex w-screen h-screen absolute top-0 left-0 justify-between">
      <div className="">
        <div className="flex flex-col item-center bg-white h-full px-5 py-4">
          <div>
            <h1 className="text-lg font-bold text-black mb-3">On / Off</h1>
            <button className={cls(`mt-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3`,
              {'bg-slate-900': onDrawing}
            )} onClick={changeOnDrawing}>onDrawing
            </button>
            <button className={cls(`mt-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3`,
              {'bg-slate-900': !onDrawing}
            )} onClick={changeOffDrawing}>offDrawing
            </button>
          </div>
          <div>
            <h1 className="text-lg font-bold text-black mb-3">Props</h1>
            <h2 className="text-black">StrokeColor</h2>
            <input type="color" onChange={changeStrokeColor}/>
            <h1 className="text-black">CanvasColor</h1>
            <input type="color" onChange={changeCanvasColor}/>
            <h1 className="text-black">CanvasColor : Transparent</h1>
            <button className="my-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3"
                    onClick={changeTransparentCanvasColor}>Transparent
            </button>
          </div>
        </div>
      </div>

        <div className="w-full h-full bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url("/motor.png")`}}
             id="sketchCanvas"
        >
          {/*<h1>Canvas</h1>*/}
          {onDrawing &&
            <ReactSketchCanvas
              ref={canvasRef}
              style={styles}
              width="1000"
              height="1000"
              strokeWidth={4}
              strokeColor={strokeColor}
              canvasColor={canvasColor}
            />
          }

        </div>
      <div className="">
        <div className="flex flex-col item-center b bg-white h-full px-5 py-4">
          <h1 className="text-lg font-bold text-black">Func</h1>
          <button className="mt-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3"
                  onClick={undoHandler}>Undo
          </button>
          <button className="mt-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3"
                  onClick={redoHandler}>Redo
          </button>
          <button className="mt-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3"
                  onClick={clearHandler}>Clear All
          </button>
          <button className="mt-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3"
                  onClick={resetCanvasHandler}>Reset All
          </button>
          <button className="my-3 w-28 hover:bg-slate-900 bg-gray-400 rounded-full px-4 py-3"
                  onClick={saveHandler}>Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawing;