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
      return 'bar';
    default:
      return state
  }
}

export default trends; 