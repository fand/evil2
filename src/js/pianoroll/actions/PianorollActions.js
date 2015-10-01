'use strict';

import { Actions } from '../CONST';

export function dragStarted (pos) {
  return {
    type : Actions.DRAG_STARTED,
    pos,
  };
}

export function dragEnded (pos) {
  return {
    type : Actions.DRAG_ENDED,
    pos,
  };
}

export function dragMoved (pos) {
  return {
    type : Actions.DRAG_MOVED,
    pos,
  };
}

export function selectNote (noteId) {
  return {
    type : Actions.SELECT_NOTE,
    noteId,
  };
}

export function deselectNote (noteId) {
  return {
    type : Actions.DESELECT_NOTE,
    noteId,
  };
}

export function deselectAllNotes () {
  return {
    type : Actions.DESELECT_ALL_NOTES,
  };
}

export function startMovingNoteOn () {
  return {
    type : Actions.START_MOVING_NOTE_ON,
  };
}
export function startMovingNoteOff () {
  return {
    type : Actions.START_MOVING_NOTE_OFF,
  };
}
export function startMovingNote () {
  return {
    type : Actions.START_MOVING_NOTE,
  };
}

export function updateNote (newNote) {
  return {
    type : Actions.UPDATE_NOTE,
    newNote,
  };
}
