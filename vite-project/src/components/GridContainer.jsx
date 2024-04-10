// GridContainer.js
import React, { useState } from 'react';
import GridHead from './GridHead';
import GridChild from './GridChild';

const GridContainer = () => {
  const [parentCheckboxState, setParentCheckboxState] = useState(false);

  const handleParentCheckboxChange = (isChecked) => {
    setParentCheckboxState(isChecked);
  };

  return (
    <>
      <GridHead handleParentCheckboxChange={handleParentCheckboxChange} />
      <GridChild
        name='Civil 1'
        rate='200'
        total='200000'
      />
      <GridChild
        name='Civil 2'
        rate='200'
        total='200000'
      />
      <GridChild
        id='3'
        name='Civil 3'
        rate='200'
        total='200000'
      />
    </>
  );
};

export default GridContainer;
