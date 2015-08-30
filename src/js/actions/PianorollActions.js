'use strict';

export function dragStarted (pos) {
  return {
    type : 'DRAG_STARTED',
    pos,
  };
}

export function dragEnded (pos) {
  return {
    type : 'DRAG_ENDED',
    pos,
  };
}

export function dragMoved (pos) {
  return {
    type : 'DRAG_MOVED',
    pos,
  };
}

export function selectNote (note) {
  return {
    type : 'SELECT_NOTE',
    note,
  };
}

export function addSelectedNote (note) {
  return {
    type : 'ADD_SELECTED_NOTE',
    note,
  };
}

export function startMovingNoteOn () {
  return {
    type : 'START_MOVING_NOTE_ON',
  };
}
export function startMovingNoteOff () {
  return {
    type : 'START_MOVING_NOTE_OFF',
  };
}
export function startMovingNote () {
  return {
    type : 'START_MOVING_NOTE',
  };
}
