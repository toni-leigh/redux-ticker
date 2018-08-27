import trends from './reducers';

import {
  GET_TREND,
  RECEIVE_TREND
} from './actions';

describe('trends', () => {
  test('is initialising', () => {
    expect(trends(undefined, { type: 'FOO'} )).toEqual({ trends: [] });
  });
  test('when action type is GET_TREND', () => {
    expect(trends({}, { type: GET_TREND} )).toEqual('foo');
  });
  test('when action type is RECEIVE_TREND', () => {
    expect(trends(
      { trends: [] }, 
      { json: { foo: 'bar' }, type: RECEIVE_TREND } 
    )).toEqual(
      { trends: [{ foo: 'bar' }]}
    );
  });
});