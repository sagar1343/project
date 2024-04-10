import React from 'react';
import GridHead from './GridHead';
import GridChild from './GridChild';

const GridContainer = () => {
  return (
    <>
      <GridHead />
      <GridChild
        id='1'
        name='Civil 1'
        rate='200'
        total='200000'
      />
      <GridChild
        id='2'
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
