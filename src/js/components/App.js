import React from 'react';
import EvilApp from './EvilApp';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducer';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <EvilApp />}
      </Provider>
    );
  }
}
