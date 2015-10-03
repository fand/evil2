'use strict';

import { Actions } from '../CONST';

const PianorollActions = {

  dragStarted (pos) {
    return {
      type : Actions.DRAG_STARTED,
      pos,
    };
  },

  dragEnded (pos) {
    return {
      type : Actions.DRAG_ENDED,
      pos,
    };
  },

  dragMoved (pos) {
    return {
      type : Actions.DRAG_MOVED,
      pos,
    };
  },

  selectNote (noteId) {
    return {
      type : Actions.SELECT_NOTE,
      noteId,
    };
  },

  deselectNote (noteId) {
    return {
      type : Actions.DESELECT_NOTE,
      noteId,
    };
  },

  deselectAllNotes () {
    return {
      type : Actions.DESELECT_ALL_NOTES,
    };
  },

  startMovingNoteOn () {
    return {
      type : Actions.START_MOVING_NOTE_ON,
    };
  },

  startMovingNoteOff () {
    return {
      type : Actions.START_MOVING_NOTE_OFF,
    };
  },

  startMovingNote () {
    return {
      type : Actions.START_MOVING_NOTE,
    };
  },

};

export default PianorollActions;
