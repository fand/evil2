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

export function selectNote (note) {
  return {
    type : Actions.SELECT_NOTE,
    note,
  };
}

export function addSelectedNote (note) {
  return {
    type : Actions.ADD_SELECTED_NOTE,
    note,
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
