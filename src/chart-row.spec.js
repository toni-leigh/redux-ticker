import React from 'react';
import renderer from 'react-test-renderer';

import ChartRow from './chart-row';

const runTest = bidDiff => {
  expect(renderer.create(
    <ChartRow 
      bid={ 5000 }
      bidDiff={ bidDiff }
      timestampe={ 1234 }
    />
  ).toJSON()).toMatchSnapshot();
}

test('<ChartRow /> with positive change below arrow threshold', () => runTest(0.2));
test('<ChartRow /> with positive change above arrow threshold', () => runTest(2.0));
test('<ChartRow /> with negative change below arrow threshold', () => runTest(-0.2));
test('<ChartRow /> with negative change above arrow threshold', () => runTest(-2.0));
test('<ChartRow /> with no change', () => runTest(0));