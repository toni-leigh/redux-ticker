import React from 'react';

import ChartRow from './chart-row';

const trends = _trends => {
  return _trends.map((trend, i) => {
    const bidDiff = _trends[i - 1] ? (trend.bid - _trends[i - 1].bid) : 0;
    return (
      <ChartRow 
        bid={ trend.bid }
        bidDiff={ bidDiff }
        timestamp={ trend.timestamp }
        key={ trend.timestamp }
      />
    )
  });
}

const Chart = props => 
  <div className='chart'>
    { trends(props.trends) }
  </div>
;

export default Chart;