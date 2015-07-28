import React, { Component } from 'react';
import EvilApp from './EvilApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as reducers from '../reducers';

const redux = createRedux(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
