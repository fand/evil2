'use strict';

/*
interface NoteMIDI {
  data : []
}
*/

class NoteMIDI /* implements NoteMIDI */ {

  constructor (note) {
    if (!note) { throw 'note required'; }

    /**
     * 1 beat === 0xFF
     */
    this.time = note.time || 0x00;

    /**
     * [
     *   event    : 0x90(note on) | 0x90(note off)
     *   note     : 0-127
     *   velocity : 0-127
     * ]
     */
    this.midi = note.midi || [];
  }

  toJSON () {
    return JSON.stringify({
      time : this.time,
      midi : this.midi
    });
  }

}

export default NoteMIDI;
