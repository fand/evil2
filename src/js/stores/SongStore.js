'use strict';

import Song from '../models/Song';

import CONST from '../CONST';


let data = {
  song : null
};

class SongStore {

  constructor () {

  }

  getCurrentSong () {
    if (! data.song) {
      data.song = this.createNewSong();
    }
    return data.song;
  }

  /**
   * Load song from data or create empty song.
   */
  createNewSong () {
    if (document.getElementById('SongData')) {
      return new Song(JSON.parse(document.getElementById('SongData').innerHTML));
    }
    else {
      return new Song(CONST.DEMO_SONG);
    }
  }

}

export default new SongStore();
