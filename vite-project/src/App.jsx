import React from 'react';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between my-3'>
        <h2 className='text-2xl'>Create Workorder</h2>
        <Button variant='contained'>Save</Button>
      </div>
      <GridContainer />
    </div>
  );
};

export default App;
