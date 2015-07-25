'use strict';

import Song from '../models/Song';
import CONST from '../CONST';

const SELECT_SONG = 'SELECT_SONG';

/**
 * Load song from data or create empty song.
 */
let createNewSong = function () {
  if (document.getElementById('SongData')) {
    return new Song(JSON.parse(document.getElementById('SongData').innerHTML));
  }
  else {
    return new Song(CONST.DEMO_SONG);
  }
};

let data = {
  songs       : {},
  currentSong : createNewSong()
};

const SongStore = function (state=data, action) {

  switch (action.type) {
  case SELECT_SONG:
    state.currentSong = state.songs[action.songId];
    return state;
  default:
    return state;
  }

};


export default SongStore;
