import React, { Component } from 'react';
import EvilApp from './EvilApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import reducers from '../reducers/index';

const redux = createRedux({root : reducers});

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
