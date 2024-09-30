import { Svg, Path } from '@react-pdf/renderer';
import React from 'react';

const PieChart: React.FC = () => (
  <Svg viewBox='-576,-250,1152,500'>
    <Path
      fill='#4269d0'
      d='M0,-240A240,240,0,0,1,228.254,-74.164L171.19,-55.623A180,180,0,0,0,0,-180Z'
    />
    <Path
      fill='#efb118'
      d='M228.254,-74.164A240,240,0,0,1,141.068,194.164L105.801,145.623A180,180,0,0,0,171.19,-55.623Z'
    />
    <Path
      fill='#ff725c'
      d='M141.068,194.164A240,240,0,0,1,-141.068,194.164L-105.801,145.623A180,180,0,0,0,105.801,145.623Z'
    />
    <Path
      fill='#6cc5b0'
      d='M-141.068,194.164A240,240,0,0,1,-228.254,-74.164L-171.19,-55.623A180,180,0,0,0,-105.801,145.623Z'
    />
    <Path
      fill='#3ca951'
      d='M-228.254,-74.164A240,240,0,0,1,0,-240L0,-180A180,180,0,0,0,-171.19,-55.623Z'
    />
  </Svg>
);

export default PieChart;
