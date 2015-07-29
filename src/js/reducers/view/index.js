'use strict';

import clipViewReducer from './clipViewReducer';

export default function (state, action) {
  const clipView = clipViewReducer(state.clipView, action);
  return { clipView };
}
