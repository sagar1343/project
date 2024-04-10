import React, { useState } from 'react';

const CheckBox = ({ check1, check2, handleActivityCheck }) => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
    handleActivityCheck();
  };
  return <></>;
};

export default CheckBox;
