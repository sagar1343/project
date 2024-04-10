// Activity.js
import React, { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const Activity = ({ number, parentCheckboxState }) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  React.useEffect(() => {
    setIsChecked(parentCheckboxState);
  }, [parentCheckboxState]);

  return (
    <>
      <div className='p-2 grid grid-cols-5'>
        <div className='ml-3 col-span-2'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className='m-2'>{`Activity ${number}`}</label>
        </div>
        <div>200</div>
        <div>200000</div>
        <div>
          <div
            className='cursor-pointer'
            onClick={() => setOpen(true)}
          >
            {!open && <BsChevronDown />}
          </div>
          <div
            className='cursor-pointer'
            onClick={() => setOpen(false)}
          >
            {open && <BsChevronUp />}
          </div>
        </div>
      </div>
      {open && (
        <div>
          <div className='p-2 grid grid-cols-5'>
            <div className='ml-8 col-span-2'>
              <input
                type='checkbox'
                checked={isChecked}
              />
              <label className='m-2'>Work Item 1</label>
            </div>
            <div></div>
            <div>200000</div>
          </div>
          <div className='p-2 grid grid-cols-5'>
            <div className='ml-8 col-span-2'>
              <input
                type='checkbox'
                checked={isChecked}
              />
              <label className='m-2'>Work Item 2</label>
            </div>
            <div></div>
            <div>200000</div>
          </div>
          <div className='p-2 grid grid-cols-5'>
            <div className='ml-8 col-span-2'>
              <input
                type='checkbox'
                checked={isChecked}
              />
              <label className='m-2'>Work Item 3</label>
            </div>
            <div></div>
            <div>200000</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Activity;
