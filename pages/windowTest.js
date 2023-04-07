import React from 'react';
import Link from "next/link";

const WindowTest = () => {

  const windowOpen = () => {
    window.open('http://localhost:3001/test');
    // window.open('www.ventrane.com');
  }

  const windowClose = () => {
    // window.open("about:blank", "_self");
    // window.close();
    window.open("", "_self");
    window.close();
  }

  return (
    <div>
      <button onClick={windowOpen}>새창 열기</button>
      <br />
      <button onClick={windowClose}>윈도우 창 닫기</button>
    </div>
  );
};

export default WindowTest;