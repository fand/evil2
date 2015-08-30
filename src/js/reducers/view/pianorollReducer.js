'use strict';

const CLIP_SELECTED = 'CLIP_SELECTED';
const DRAG_STARTED  = 'DRAG_STARTED';
const DRAG_ENDED    = 'DRAG_ENDED';
const DRAG_MOVED    = 'DRAG_MOVEED';
const SELECT_NOTE   = 'SELECT_NOTE';

const DEFAULT = {
  notes : [],
  zoomX : 1.0, // (1 / zoom) bars per window
  zoomY : 1.0, // 10px per note
  clickPos : null,
  x : 0,
  y : 0,
  isDragging : false,
  dragMode : null,
};

const isNoteOn  = m => 0x90 <= m && m < 0xA0;
const isNoteOff = m => 0x80 <= m && m < 0x90;

const midiToNotes = function (midi) {
  let notes = [];
  let rows  = {};

  midi.forEach(function (m) {
    if (isNoteOn(m.data[0])) {
      rows[m.data[1]] = m;
    }
    if (isNoteOff(m.data[0])) {
      const n = rows[m.data[1]];
      const note = {
        left    : n.time / 0x100,
        width   : (m.time - n.time) / 0x100,
        noteNum : n.data[1],
      };

      notes.push(note);
      rows[m.data[1]] = undefined;
    }
  });

  return notes;
};

const clipSelected = function (state, action) {
  return {
    ...state,
    notes : midiToNotes(action.clip.midi),
  };
};

const dragStarted = function (state, action) {
  return {
    ...state,
    clickPos   : action.pos,
    isDragging : true,
  };
};

const dragEnded = function (state, action) {
  console.log('########## ended');
  return {
    ...state,
    x : 0,
    y : 0,
    isDragging : false,
    dragMode : null,
  };
};

const dragMoved = function (state, action) {
  return {
    ...state,
    x : action.pos.x - state.clickPos.x,
    y : action.pos.y - state.clickPos.y
  };
};

const selectNote = function (state, action) {
  return {
    ...state,
    selectedNotes : { [action.note.uuid] : true }
  };
};


const startMovingNoteOn = function (state, action) {
  return {
    ...state,
    dragMode : 'NOTE_ON',
  };
};
const startMovingNoteOff = function (state, action) {
  return {
    ...state,
    dragMode : 'NOTE_OFF',
  };
};
const startMovingNote = function (state, action) {
  return {
    ...state,
    dragMode : 'NOTE',
  };
};


const pianorollReducer = function (state=DEFAULT, action) {
  switch (action.type) {
  case CLIP_SELECTED:
    return clipSelected(state, action);
  case DRAG_STARTED:
    return dragStarted(state, action);
  case DRAG_MOVED:
    return dragStarted(state, action);
  case DRAG_ENDED:
    return dragEnded(state, action);
  case SELECT_NOTE:
    return selectNote(state, action);

  case 'START_MOVING_NOTE_ON':
    return startMovingNoteOn(state, action);
  case 'START_MOVING_NOTE_OFF':
    return startMovingNoteOff(state, action);
  case 'START_MOVING_NOTE':
    return startMovingNote(state, action);

  default:
    return state;
  }
};

export default pianorollReducer;
