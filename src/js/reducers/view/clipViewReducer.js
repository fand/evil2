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

const clipSelected = function (state, action) {
  state.clip = action.clip;

  let notes = [];
  let rows = {};

  state.clip.midi.forEach(function (m) {
    if (isNoteOn(m.data[0])) {
      rows[m.data[1]] = m;
    }
    if (isNoteOff(m.data[0])) {
      notes.push([rows[m.data[1]], m]);
      rows[m.data[1]] = undefined;
    }
  });

  state.notes = notes;

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
