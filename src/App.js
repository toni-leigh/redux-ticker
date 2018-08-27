import fetch from 'cross-fetch';
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import trends from './reducers';
import { getTrend } from './actions';
import ConnectChart from './connect-chart';

import './App.css';

const store = createStore(
  trends, 
  { trends: [] }, 
  applyMiddleware(thunkMiddleware)
);

setInterval(() => {
  store.dispatch(getTrend(fetch, 'http://127.0.0.1:3001/ticker'));
}, 30000);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={ store }>
          <ConnectChart />
        </Provider>
      </div>
    );
  }
}

export default App;
