// CustomIconUpload.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomIcons } from './Redux/actions';

const CustomIconUpload = () => {
  const dispatch = useDispatch();
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newIcons = Array.from(files).map((file) => URL.createObjectURL(file));
    dispatch(setCustomIcons(newIcons));
    setFileInputKey(fileInputKey + 1);
  };

  return (
    <input
      type="file"
      key={fileInputKey}
      accept=".svg"
      onChange={handleFileUpload}
      style={{ margin: '10px 0' }}
    />
  );
};

export default CustomIconUpload;
