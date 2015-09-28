'use strict';

import uuid from 'uuid';
import CONST, { Actions, DragMode } from '../CONST';

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

const updateNote = function (state, action) {
  const { newNote } = action;
  for (let i = 0; i < state.notes.length; i++) {
    if (state.notes[i].uuid === newNote.uuid) {
      state.notes[i] = newNote;
      return {
        ...state,
      };
    }
  }

  return state;
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
  if (state.dragMode === DragMode.NOTE_ON) {
    return {
      ...state,
      x : dx,
      w : -dx,
    };
  }
  if (state.dragMode === DragMode.NOTE_OFF) {
    return {
      ...state,
      w : dx,
    };
  }
  if (state.dragMode === DragMode.NOTE) {
    const height = CONST.NOTE_HEIGHT * state.zoomY;
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
    dragMode : DragMode.NOTE_ON,
  };
};
const startMovingNoteOff = function (state, action) {
  return {
    ...state,
    dragMode : DragMode.NOTE_OFF
  };
};
const startMovingNote = function (state, action) {
  return {
    ...state,
    dragMode : DragMode.NOTE,
  };
};


const pianorollReducer = function (state=CONST.DEFAULT_PIANO, action) {
  switch (action.type) {
  case Actions.CLIP_SELECTED:
    return clipSelected(state, action);
  case Actions.DRAG_STARTED:
    return dragStarted(state, action);
  case Actions.DRAG_MOVED:
    return dragMoved(state, action);
  case Actions.DRAG_ENDED:
    return dragEnded(state, action);
  case Actions.SELECT_NOTE:
    return selectNote(state, action);
  case Actions.ADD_SELECTED_NOTE:
    return addSelectedNote(state, action);

  case Actions.START_MOVING_NOTE_ON:
    return startMovingNoteOn(state, action);
  case Actions.START_MOVING_NOTE_OFF:
    return startMovingNoteOff(state, action);
  case Actions.TART_MOVING_NOTE:
    return startMovingNote(state, action);

  case Actions.UPDATE_NOTE:
    return updateNote(state, action);

  default:
    return state;
  }
};

export default pianorollReducer;
