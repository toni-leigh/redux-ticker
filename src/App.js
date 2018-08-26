import React, { Component } from 'react';
import './App.css';
import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import trends from './reducers';

import fetch from 'cross-fetch';

import {
  getTrend,
  receiveTrend
} from './actions';

const store = createStore(
  trends, 
  { items: [] }, 
  applyMiddleware(thunkMiddleware)
);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(getTrend(fetch, 'https://api.bitfinex.com/v1/pubticker/btcgbp'));
store.dispatch(receiveTrend());

class App extends Component {
  render() {
    return (
      <div className="App">
        Test
      </div>
    );
  }
}

unsubscribe();

export default App;
