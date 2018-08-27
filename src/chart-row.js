import React from 'react';

import './chart-row.css';

const arrows = (diff) => {
  const count = Math.abs(diff / 0.3);
  const arrowIcon = diff >= 0 ? '\u2191' : '\u2193';
  return arrowIcon.repeat(count);
}

const ChartRow = props => {
  const chartRowClass = props.bidDiff > 0 ? 'chart-row--up' : 'chart-row--down';
  
  return (
    <div 
      className={ `chart-row ${chartRowClass}`} 
      key={ props.timestamp }
    >
      <span className='chart-row__bid'>{ props.bid }</span>
      <span className='chart-row__extra'>[{ (props.bidDiff).toPrecision(2) }, { `${(props.bidDiff / props.bid * 100).toPrecision(2)}%` }]</span>
      <span className='chart-row__arrows'>{ arrows(props.bidDiff) }</span>
    </div>
  );
};

export default ChartRow;