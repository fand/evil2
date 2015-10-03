'use strict';

import CONST, { Actions, DragMode } from '../CONST';

const dragStarted = function (state, action) {
  return {
    ...state,
    clickPos   : action.pos,
    isDragging : true,
  };
};

const dragEnded = function (state) {
  return {
    ...state,
    dx         : 0,
    dy         : 0,
    dw         : 0,
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
      dx : dx,
      dw : -dx,
    };
  }
  if (state.dragMode === DragMode.NOTE_OFF) {
    return {
      ...state,
      dw : dx,
    };
  }
  if (state.dragMode === DragMode.NOTE) {
    const height = CONST.NOTE_HEIGHT * state.zoomY;

    return {
      ...state,
      dx : dx,
      dy : Math.floor(dy / height) * height,
    };
  }

  return state;
};

const selectNote = function (state, action) {
  return {
    ...state,
    selectedNotes : {
      ...state.selectedNotes,
      [action.noteId] : true,
    },
  };
};

const deselectNote = function (state, action) {
  return {
    ...state,
    selectedNotes : {
      ...state.selectedNotes,
      [action.noteId] : false,
    },
  };
};

const deselectAllNotes = (state) => ({
  ...state,
  selectedNotes : {},
});

const startMovingNoteOn = (state) => ({
  ...state,
  dragMode : DragMode.NOTE_ON,
});
const startMovingNoteOff = (state) => ({
  ...state,
  dragMode : DragMode.NOTE_OFF,
});
const startMovingNote = (state) => ({
  ...state,
  dragMode : DragMode.NOTE,
});

const updateNote = function (state, action) {
  const { newNote } = action;
  const newNotes = [];

  for (let i = 0; i < state.notes.length; i++) {
    if (state.notes[i].uuid === newNote.uuid) {
      newNotes.push(newNote);
    }
    newNotes.push(state.notes[i]);
  }

  return {
    ...state,
    notes : newNotes,
  };
};

const pianorollReducer = (state = CONST.DEFAULT_PIANO, action) => {
  switch (action.type) {
  case Actions.DRAG_STARTED:
    return dragStarted(state, action);
  case Actions.DRAG_MOVED:
    return dragMoved(state, action);
  case Actions.DRAG_ENDED:
    return dragEnded(state, action);
  case Actions.SELECT_NOTE:
    return selectNote(state, action);
  case Actions.DESELECT_NOTE:
    return deselectNote(state, action);
  case Actions.DESELECT_ALL_NOTES:
    return deselectAllNotes(state, action);

  case Actions.START_MOVING_NOTE_ON:
    return startMovingNoteOn(state, action);
  case Actions.START_MOVING_NOTE_OFF:
    return startMovingNoteOff(state, action);
  case Actions.START_MOVING_NOTE:
    return startMovingNote(state, action);

  case Actions.UPDATE_NOTE:
    return updateNote(state, action);

  default:
    return state;
  }
};

export default pianorollReducer;
