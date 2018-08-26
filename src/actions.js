const GET_TREND = 'GET_TREND';
const RECEIVE_TREND = 'RECEIVE_TREND';

const getTrend = () => ({ 
  type: GET_TREND
});

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
