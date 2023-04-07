import React from 'react';
import Image from "next/image";

const SystemImage = (props) => {

  return (
    <div>
      <Image src={props.data} alt="test image"/>
    </div>
  );
};

export default SystemImage;