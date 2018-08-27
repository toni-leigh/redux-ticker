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
      thenDispatchSpy,
      thenDispatchSpyCallback,
      thenJSONSpy,
      thenJSONSpyCallback,      
      url;

  beforeAll(() => {
    url = 'https://api.bitfinex.com/v1/pubticker/btcgbp';

    dispatchSpy = jest.fn();
    thenDispatchSpy = jest.fn();
    thenJSONSpy = jest.fn().mockReturnValue({ then: thenDispatchSpy });
    fetchSpy = jest.fn().mockReturnValue({ then: thenJSONSpy });

    getTrendFunction = getTrend(fetchSpy, url);
    getTrendFunction(dispatchSpy);

    thenDispatchSpyCallback = thenDispatchSpy.mock.calls[0][0];
    thenJSONSpyCallback = thenJSONSpy.mock.calls[0][0];
  });

  test('fetch call', () => {
    expect(fetchSpy).toHaveBeenCalledWith(url);
  });

  test('then json call', () => {
    expect(thenJSONSpy).toHaveBeenCalled();
  });

  test('json call', () => {
    const jsonSpy = jest.fn();
    thenJSONSpyCallback({ json: jsonSpy });
    expect(jsonSpy).toHaveBeenCalled();
  });

  test('then dispatch call', () => {
    expect(thenDispatchSpy).toHaveBeenCalled();
  });

  test('dispatch call', () => {
    thenDispatchSpyCallback();
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