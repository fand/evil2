import React, { Component } from 'react';
import EvilApp from './EvilApp';
import { createStore } from 'redux';
import { Provider } from 'redux/react';
import reducers from '../reducers/index';

const store = createStore({root : reducers});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
