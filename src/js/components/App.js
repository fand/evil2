import React, { Component } from 'react';
import EvilApp from './EvilApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
