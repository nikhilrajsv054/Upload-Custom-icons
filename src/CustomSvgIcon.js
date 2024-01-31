// CustomSvgIcon.js
import React from 'react';

const CustomSvgIcon = ({ svgData }) => (
  <div dangerouslySetInnerHTML={{ __html: svgData }} />
);

export default CustomSvgIcon;
