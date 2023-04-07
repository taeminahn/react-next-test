import React from 'react';
import WatermarkTest from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };

const Watermark = () => {
  return (
    <WatermarkTest
      height={32}
      width={165}
      image="https://uiwjs.github.io/react-watermark/watermark-example.svg"
    >
        <img src="image/imageSpin/1.jpg" alt=""/>
      {/*<textarea  spellCheck={false} defaultValue={'asdasd'} />*/}
    </WatermarkTest>
  );
};

export default Watermark;