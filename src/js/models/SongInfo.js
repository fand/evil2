'use strict';

import { DEFAULT_INFO } from '../CONST';

/**
 * Metadata for a Song.
 *
 * @param {UUID}   userId
 * @param {string} title
 * @param {string} artist
 * @param {Date}   created
 * @param {Date}   updated
 */
class SongInfo {

  /**
   * @param {UUID}      userId
   * @param {string}    title
   * @param {string}    artist
   * @param {ISOString} created
   * @param {ISOString} updated
   */
  constructor (info) {
    if (!info) { throw 'info required'; }
    this.userId  = info.userId || DEFAULT_INFO.userId;
    this.title   = info.title  || DEFAULT_INFO.title;
    this.artist  = info.artist || DEFAULT_INFO.artist;
    this.setCreated(info.created);
    this.setUpdated(info.updated);
  }

  setCreated (created) {
    this.created = new Date(created);
    if (this.created.toISOString() !== created) {
      this.created = new Date();
    }
  }

  setUpdated (updated) {
    this.updated = new Date(updated);
    if (this.updated.toISOString() !== updated) {
      this.updated = new Date();
    }
  }

  toJSON () {
    return JSON.stringify({
      userId  : this.userId,
      title   : this.title,
      artist  : this.artist,
      created : this.created.toISOString(),
      updated : this.updated.toISOString()
    });
  }
}

export default SongInfo;
