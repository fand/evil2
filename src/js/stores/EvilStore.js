'use strict';

import songStore from './SongStore';
import clipStore from './ClipStore';

const initialState = {
  songData: undefined,
  clipData: undefined
};

export default function evilStore(state = initialState, action) {
  const songData = songStore(state.songData, action);
  const clipData = clipStore(state.clipData, action);
  return { songData, clipData };
}
