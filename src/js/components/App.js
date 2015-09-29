import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

import reducer from '../reducer';
import EvilApp from './EvilApp';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <EvilApp />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
