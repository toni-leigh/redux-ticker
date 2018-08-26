import {
  GET_TREND,
  RECEIVE_TREND,
  getTrend,
  receiveTrend
} from './actions.js';

describe('getTrend', () => {
  let dispatchSpy,
      fetchSpy,
      getTrendFunction,
      thenSpy,
      thenSpyCallback,
      url;

  beforeAll(() => {
    url = 'https://api.bitfinex.com/v1/pubticker/btcgbp';

    dispatchSpy = jest.fn();
    thenSpy = jest.fn();
    fetchSpy = jest.fn().mockReturnValue({ then: thenSpy });

    getTrendFunction = getTrend(fetchSpy, url);
    getTrendFunction(dispatchSpy);

    thenSpyCallback = thenSpy.mock.calls[0][0];
  });

  test('fetch call', () => {
    expect(fetchSpy).toHaveBeenCalledWith(url);
  });

  test('then call', () => {
    expect(thenSpy).toHaveBeenCalled();
  });

  test('dispatch call', () => {
    thenSpyCallback();
    expect(dispatchSpy).toHaveBeenCalled();
    const dispatchedAction = dispatchSpy.mock.calls[0][0];
    expect(dispatchedAction).toEqual(receiveTrend());
  });
});

test('receiveTrend', () => {
  expect(receiveTrend({ bar: 'baz' })).toEqual({
    type: RECEIVE_TREND,
    json: { bar: 'baz' }
  });
});