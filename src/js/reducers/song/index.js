'use strict';

// import Song from '../models/Song';
import CONST from '../../CONST';

import sessionReducer from './sessionReducer';
import clipReducer from './clipReducer';
import infoReducer from './infoReducer';

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

const songReducer = function (state=CONST.DEFAULT_SONG, action) {

  switch (action.type) {
  case INIT_SONG:
    return initSong(state, action);

  default:
    // init clips first!
    const clipData    = clipReducer(state.clipData, action);
    const sessionData = sessionReducer(state.sessionData, action);
    const infoData    = infoReducer(state.infoData, action);
    return { sessionData, clipData, infoData };
  }

};

export default songReducer;
