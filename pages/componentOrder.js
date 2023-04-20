import React from 'react';
import SystemImage from "../component/SystemImage";
import SystemTitle from "../component/SystemTitle";
import SystemContents from "../component/SystemContents";

const ComponentOrder = () => {

  // 임시 데이터
  const dummyData = [
    {order: 1, flag: "Image", url: '../public/motor.png'},
    {order: 4, flag: "Contents", text: '컨텐츠 설명입니다2.'},
    {order: 3, flag: "Contents", text: '컨텐츠 설명입니다1.'},
    {order: 2, flag: "Title", text: '타이틀입니다2.'},
    {order: 0, flag: "Title", text: '타이틀입니다1.'},
  ];

  console.log(dummyData);

  // dummyData.map((v) => {
  //   console.log(v);
  // });

  return (
    <div>
      {/*<SystemImage />*/}
      {/*<SystemTitle />*/}
      {dummyData.map((data, i) => (
        <div key={data.order + i}>
          {data.flag === "Title" ? (
            <SystemTitle title={data.text}/>
          ) : null}
          {data.flag === "Image" ? (
            <SystemImage data={testImage}/>
          ) : null}
          {data.flag === "Contents" ? (
            <SystemContents contents={data.text}/>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ComponentOrder;