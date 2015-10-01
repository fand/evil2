'use strict';

import CONST from '../../CONST';
const INIT_SONG = 'INIT_SONG';

/**
 * Load song from data or create empty song.
 */
const initSong = function () {
  if (document.getElementById('SongData')) {
    return JSON.parse(document.getElementById('SongData').innerHTML);
  }
  return CONST.DEMO_SONG;
};

const songReducer = function (state = CONST.DEFAULT_SONG, action) {

  switch (action.type) {
  case INIT_SONG:
    return initSong(state, action);

  default:
    return state;
  }

};

export default songReducer;
