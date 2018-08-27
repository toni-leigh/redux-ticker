import { 
  GET_TREND,
  RECEIVE_TREND 
} from './actions';

const initialState = {
  trends: []
};

const trends = (state = initialState, action) => {
  switch(action.type) {
    case GET_TREND:
      return 'foo';
    case RECEIVE_TREND:
      const trends = state.trends;
      trends.push(action.json);
      return Object.assign({}, state, { trends });
    default:
      return state
  }
}

export default trends; 