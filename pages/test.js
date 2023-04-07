import React from 'react';

const Test = () => {

  const windowClose = () => {
    // window.open("about:blank", "_self");
    // window.close();
    window.open("", "_self");
    window.close();
  }

  return (
    <div>
      <button onClick={windowClose}>윈도우 창 닫기</button>
      <div className="selectBox">
        <select name="fruits" className="select">
          <option disabled selected>fruits 🍊</option>
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="grape">grape</option>
          <option value="melon">melon</option>
        </select>
        <span className="icoArrow"><img
          src="https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Test;