import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';
import Activity from './Activity';
const GridChild = ({ id, name, total, rate }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='p-2 grid grid-cols-5 '>
        <div className=' col-span-2 '>
          <input
            type='checkbox'
            id={`checkbox${id}`}
          />
          <label
            className='m-2'
            htmlFor={`checkbox${id}`}
          >
            {name}
          </label>
        </div>
        <div>{rate}</div>
        <div>{total}</div>
        {!open && (
          <div
            className=' cursor-pointer'
            onClick={() => setOpen(true)}
          >
            <FaPlus className=' text-sky-400' />
          </div>
        )}
        {open && (
          <div
            className=' cursor-pointer'
            onClick={() => setOpen(false)}
          >
            <FaMinus className=' text-sky-400' />
          </div>
        )}
      </div>
      {open && (
        <div>
          <Activity number='1' />
          <Activity number='2' />
        </div>
      )}
    </>
  );
};

export default GridChild;
