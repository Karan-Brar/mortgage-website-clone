import React from 'react'

const PhoneDropDown = ({
  onClick = () => {
    return null;
  },
}) => {
  return (
    <div className="dropdown !bg-blue-200 z-20" onClick={onClick}>
      <span className="text-lg font-bold text-slate-50">(431) 997-1277</span>
    </div>
  );
};

export default PhoneDropDown