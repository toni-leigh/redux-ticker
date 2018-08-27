import React from 'react';

const trends = _trends => {
  return _trends.map((trend) => {
    return (
      <div key={ trend.timestamp }>
        { trend.bid }
      </div>
    )
  });
}

const Chart = props => 
  <div className='chart'>
    { trends(props.trends) }
  </div>
;

export default Chart;