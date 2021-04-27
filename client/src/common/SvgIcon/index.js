import React from 'react';
import FakeCoin_Minimal from '../../assets/FakeCoin-Minimal.svg'

import FakeCoin_Logo_Full from '../../assets/FakeCoin_Logo_Full.svg';
import FakeCoin_Minimal_Logo_Blue from '../../assets/FakeCoin_Minimal_Logo_Blue.svg';
import FakeCoin_Minimal_Circle_Blue from '../../assets/FakeCoin_Minimal_Circle_Blue.svg';


let source;

const SvgIcon = ({ src, width, height }) => {

  switch (src) {
    case 'Minimal_Logo': source = FakeCoin_Minimal_Logo_Blue;
      break;
    case 'Minimal_Circle': source = FakeCoin_Minimal_Circle_Blue;
      break;
    default: source = FakeCoin_Minimal;
  }
  return (

    // <img src={`../../assets/${src}`} alt={src} width={width} height={height} />
    <img src={source} alt={src} width={width} height={height} />

  );
}
export default SvgIcon;
