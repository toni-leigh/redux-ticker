import React, { Component } from 'react';
import './App.css';
import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import trends from './reducers';

import fetch from 'cross-fetch';

import { getTrend } from './actions';

const store = createStore(
  trends, 
  { trends: [] }, 
  applyMiddleware(thunkMiddleware)
);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

setInterval(() => {
  store.dispatch(getTrend(fetch, 'http://127.0.0.1:3001/ticker'));
}, 30000);


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
