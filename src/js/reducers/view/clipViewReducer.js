'use strict';

// import Song from '../models/Song';

const CLIP_SELECTED = 'CLIP_SELECTED';

const DEFAULT = {
  clip        : undefined,
  notes       : [],
  zoomX       : 1.0,  // (1 / zoom) bars per window
  zoomY       : 1.0,  // 10px per note
  bars        : 2,
  beats       : 2,
  beatsPerBar : 4,
};

const isNoteOn  = m => 0x90 <= m && m < 0xA0;
const isNoteOff = m => 0x80 <= m && m < 0x90;

const midiToNotes = function (midi) {
  let notes = [];
  let rows = {};

  midi.forEach(function (m) {
    if (isNoteOn(m.data[0])) {
      rows[m.data[1]] = m;
    }
    if (isNoteOff(m.data[0])) {
      const n = rows[m.data[1]];
      const note = {
        left       : n.time / 0x100,
        width      : (m.time - n.time) / 0x100,
        noteNum    : n.data[1],
      };

      notes.push(note);
      rows[m.data[1]] = undefined;
    }
  });

  return notes;
};

const clipSelected = function (state, action) {
  state.clip = action.clip;
  state.notes = midiToNotes(state.clip.midi);
  return state;
};

const clipViewReducer = function (state=DEFAULT, action) {

  switch (action.type) {
  case CLIP_SELECTED:
    return clipSelected(state, action);

  default:
    return state;
  }

};

export default clipViewReducer;
