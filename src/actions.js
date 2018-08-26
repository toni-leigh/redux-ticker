const GET_TREND = 'GET_TREND';
const RECEIVE_TREND = 'RECEIVE_TREND';

const getTrend = (fetchMethod, url) => {
  return function(dispatch) {
    return fetchMethod(url)
      .then(json => {
        dispatch(receiveTrend(json));
      }
    )
  }
};

const receiveTrend = json => ({
  type: RECEIVE_TREND,
  json
});

export {
  GET_TREND,
  RECEIVE_TREND,
  getTrend,
  receiveTrend
}
