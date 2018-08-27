import React from 'react';
import renderer from 'react-test-renderer';

import Chart from './chart';

test('<Chart />', () => {
  const trends = [{ 
    bid: 1,
    timestamp: 3
  }, { 
    bid: 2,
    timestamp: 4
  }];

  expect(renderer.create(
    <Chart trends={ trends }/>
  ).toJSON()).toMatchSnapshot();
});