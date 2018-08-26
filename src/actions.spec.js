import {
  GET_TREND,
  RECEIVE_TREND,
  getTrend,
  receiveTrend
} from './actions.js';

test('getTrend', () => {
  expect(getTrend()).toEqual({
    type: GET_TREND
  });
});

test('receiveTrend', () => {
  expect(receiveTrend({ bar: 'baz' })).toEqual({
    type: RECEIVE_TREND,
    json: { bar: 'baz' }
  });
});