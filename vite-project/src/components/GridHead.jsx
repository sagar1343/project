import React from 'react';

const GridHead = () => {
  return (
    <div className='p-2 grid grid-cols-5 text-lg font-bold bg-sky-300'>
      <div className='col-span-2'>
        <div
          className='m-2'
          htmlFor='packageCheck'
        >
          Packages
        </div>
      </div>
      <div>Rate (in sqft)</div>
      <div>Total</div>
      <div></div>
    </div>
  );
};

export default GridHead;
