'use strict';

import clipViewReducer from './clipViewReducer';
import pianorollReducer from '../../pianoroll/reducers/pianorollReducer';

export default function (state, action) {
  const clipView = clipViewReducer(state.clipView, action);
  const pianoroll = pianorollReducer(state.pianoroll, action);
  return { clipView, pianoroll };
}
