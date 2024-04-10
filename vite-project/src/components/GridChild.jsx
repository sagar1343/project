import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Activity from './Activity';

const GridChild = ({
  name,
  total,
  rate,
  parentCheckboxState,
  handleParentCheckboxChange,
}) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    handleParentCheckboxChange(newValue);
  };

  React.useEffect(() => {
    setIsChecked(parentCheckboxState);
  }, [parentCheckboxState]);

  return (
    <>
      <div className='p-2 grid grid-cols-5'>
        <div className='col-span-2'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className='m-2'>{name}</label>
        </div>
        <div>{rate}</div>
        <div>{total}</div>
        {!open && (
          <div
            className='cursor-pointer'
            onClick={() => setOpen(true)}
          >
            <FaPlus className='text-sky-400' />
          </div>
        )}
        {open && (
          <div
            className='cursor-pointer'
            onClick={() => setOpen(false)}
          >
            <FaMinus className='text-sky-400' />
          </div>
        )}
      </div>
      {open && (
        <div>
          <Activity
            number='1'
            parentCheckboxState={isChecked}
          />
          <Activity
            number='2'
            parentCheckboxState={isChecked}
          />
        </div>
      )}
    </>
  );
};

export default GridChild;
