import React, { Component } from 'react';
import EvilApp from './EvilApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
