'use strict';

// import Song from '../models/Song';
import CONST from '../CONST';

import sessionStore from './SessionStore';
import clipStore from './ClipStore';
import infoStore from './InfoStore';

const INIT_SONG   = 'INIT_SONG';

/**
 * Load song from data or create empty song.
 */
const initSong = function (state, action) {
  if (document.getElementById('SongData')) {
    return JSON.parse(document.getElementById('SongData').innerHTML);
  }
  return CONST.DEMO_SONG;
};

const SongStore = function (state=CONST.DEFAULT_SONG, action) {

  switch (action.type) {
  case INIT_SONG:
    return initSong(state, action);

  default:
    // init clips first!
    const clipData    = clipStore(state.clipData, action);
    const sessionData = sessionStore(state.sessionData, action);
    const infoData    = infoStore(state.infoData, action);
    return { sessionData, clipData, infoData };
  }

};

export default SongStore;
