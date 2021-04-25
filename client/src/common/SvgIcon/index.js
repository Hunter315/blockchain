import React from 'react';

const SvgIcon = ({ src, width, height }) => (

  <img src={`../../assets/${src}`} alt={src} with={width} height={height} />
);

export default SvgIcon;
