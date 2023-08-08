import React from 'react';
import Select from 'react-select';

const SelectTest = () => {

  let dummyData = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div>
      select 테스트
      <Select
      defaultValue={dummyData[0]}
      options={dummyData}
      // formatGroupLabel={formatGroupLabel}
      />
    </div>
  );
};

export default SelectTest;