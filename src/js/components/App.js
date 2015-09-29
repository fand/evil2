import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from '../reducer';
import EvilApp from './EvilApp';

let createStoreForEnv, renderDevTools;

if (process.env.NODE_ENV === 'development') {
  const { devTools, persistState }           = require('redux-devtools');
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

  createStoreForEnv = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);

  renderDevTools = () => (
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  );
}

if (process.env.NODE_ENV === 'production') {
  createStoreForEnv = compose(
    applyMiddleware(thunkMiddleware),
  )(createStore);

  renderDevTools = () => {};
}


const store = createStoreForEnv(reducer);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <EvilApp />}
        </Provider>
        {renderDevTools()}
      </div>
    );
  }
}
