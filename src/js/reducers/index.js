'use strict';

import songReducer from '../song/reducers/songReducer';
import viewReducer from './view';

const DEFAULT = {
  song : {},
  view : {}
};

export default function state (state=DEFAULT, action) {
  const song = songReducer(state.song, action);
  const view = viewReducer(state.view, action);
  return { song, view };
}
