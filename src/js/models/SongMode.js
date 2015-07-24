'use strict';

import { SONG_MODE } from '../CONST';

class SongMode {

  constructor (mode) {
    if (mode === SONG_MODE.CONSTSESSION_MODE || mode === SONG_MODE.ARRANGEMENT_MODE) {
      this.mode = mode;
    }
    else {
      this.mode = SONG_MODE.SESSION_MODE;
    }
  }

  toJSON () {
    return this.mode;
  }

}

export default SongMode;
