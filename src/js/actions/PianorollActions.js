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

export function addSelectedNote () {
  return {
    type : 'ADD_NOTE_SELECTED',
  };
}
