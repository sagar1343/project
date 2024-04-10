import React, { useState } from 'react';
import GridHead from './GridHead';
import GridChild from './GridChild';

const GridContainer = () => {
  return (
    <>
      <GridHead />
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
