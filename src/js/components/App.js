import React, { Component } from 'react';
import EvilApp from './EvilApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
