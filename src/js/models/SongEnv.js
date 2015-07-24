'use strict';

import Track from './Track';
import MasterTrack from './MasterTrack';

/**
 * SongEnv
 * for setup and manage devices wiring
 */
class SongEnv {

  /**
   * @param {Array<Track>} env.tracks
   * @param {MasterTrack}  env.master
   */
  constructor (env) {
    if (!env) { throw 'env required'; }
    this.setTracks(env.tracks);
    this.master = new MasterTrack(env.master);
  }

  setTracks (tracks) {
    tracks = tracks || [];
    this.track = tracks.map(t => new Track(t));
  }

  toJSON () {
    return '[' + this.tracks.map(t => t.toJSON()).join(',') + ']';
  }

}

export default SongEnv;
