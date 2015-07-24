'use strict';

import SongInfo from './SongInfo';
import SongEnv from './SongEnv';
import SongMode from './SongMode';

class Song {

  /**
   * @param {Array<Scene>}       scenes
   * @param {Array<Arrangement>} arrangements
   * @param {Object<Clip>}       clips
   * @param {SongEnv}            env
   * @param {SongInfo}           info
   * @param {SongMode}           mode
   */
  constructor (song) {
    if (!song) { throw 'song required'; }
    this.scenes       = song.scenes || [];
    this.arrangements = song.arrangements || [];
    this.clips        = song.clips || {};
    this.env          = new SongEnv(song.env);
    this.info         = new SongInfo(song.info);
    this.mode         = new SongMode(song.mode);
  }

  toJSON () {
    return JSON.stringify({
      scenes       : this.scenes,
      arrangements : this.arrangements,
      clips        : this.clips,
      env          : this.env,
      info         : this.info,
      mode         : this.mode
    });
  }

}

export default Song;
