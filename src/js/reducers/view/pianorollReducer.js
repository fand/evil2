'use strict';

import uuid from 'uuid';

const CLIP_SELECTED = 'CLIP_SELECTED';
const DRAG_STARTED  = 'DRAG_STARTED';
const DRAG_ENDED    = 'DRAG_ENDED';
const DRAG_MOVED    = 'DRAG_MOVED';
const SELECT_NOTE   = 'SELECT_NOTE';

const NOTE_HEIGHT = 10;


const DEFAULT = {
  notes : [],
  zoomX : 1.0, // (1 / zoom) bars per window
  zoomY : 1.0, // 10px per note
  clickPos : null,
  x : 0,
  y : 0,
  isDragging    : false,
  dragMode      : null,
  selectedNotes : {},
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
        uuid    : uuid.v4(),
        left    : n.time  / 0x100,
        width   : (m.time - n.time) / 0x100,
        noteNum : n.data[1],
        on  : n,
        off : m,
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

const updateNotes = function (state, action) {
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
  return {
    ...state,
    x : 0,
    y : 0,
    w : 0,
    isDragging : false,
    dragMode   : null,
  };
};

const dragMoved = function (state, action) {
  const dx = action.pos.x - state.clickPos.x;
  const dy = action.pos.y - state.clickPos.y;
  if (state.dragMode === 'NOTE_ON') {
    return {
      ...state,
      x : dx,
      w : -dx,
    };
  }
  if (state.dragMode === 'NOTE_OFF') {
    return {
      ...state,
      w : dx,
    };
  }
  if (state.dragMode === 'NOTE') {
    const height = NOTE_HEIGHT * state.zoomY;
    return {
      ...state,
      x : dx,
      y : Math.floor(dy / height) * height,
    };
  }

  return state;
};

const selectNote = function (state, action) {
  return {
    ...state,
    selectedNotes : { [action.note.uuid] : true }
  };
};

const addSelectedNote = function (state, action) {
  return {
    ...state,
    selectedNotes : {
      ...state.selectedNotes,
      [action.note.uuid] : true
    }
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
    return dragMoved(state, action);
  case DRAG_ENDED:
    return dragEnded(state, action);
  case SELECT_NOTE:
    return selectNote(state, action);
  case 'ADD_SELECTED_NOTE':
    return addSelectedNote(state, action);

  case 'START_MOVING_NOTE_ON':
    return startMovingNoteOn(state, action);
  case 'START_MOVING_NOTE_OFF':
    return startMovingNoteOff(state, action);
  case 'START_MOVING_NOTE':
    return startMovingNote(state, action);

  case 'UPDATE_NOTES':
    return updateNotes(state, action);

  default:
    return state;
  }
};

export default pianorollReducer;
