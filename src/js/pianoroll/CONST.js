'use strict';

const DEFAULT_PIANO = {
};

const Actions = {
  DRAG_STARTED          : Symbol(),
  DRAG_ENDED            : Symbol(),
  DRAG_MOVED            : Symbol(),
  SELECT_NOTE           : Symbol(),
  ADD_SELECTED_NOTE     : Symbol(),
  START_MOVING_NOTE_ON  : Symbol(),
  START_MOVING_NOTE_OFF : Symbol(),
  START_MOVING_NOTE     : Symbol(),
  UPDATE_NOTE           : Symbol(),
};

export default {
  Actions,
  DEFAULT_PIANO,
};
