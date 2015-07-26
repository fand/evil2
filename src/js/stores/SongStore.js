'use strict';

import Song from '../models/Song';
import CONST from '../CONST';

const INIT_SONG   = 'INIT_SONG';
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
  case INIT_SONG:
    let song = createNewSong();
    state.songs[song.uuid] = song;
    state.currentSong = song;
    return state;
  case SELECT_SONG:
    state.currentSong = state.songs[action.songId];
    return state;
  default:
    return state;
  }

};

export default SongStore;
