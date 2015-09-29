'use strict';

const NOTE_HEIGHT = 10;

const DEFAULT_PIANO = {
  notes         : [],
  zoomX         : 1.0, // (1 / zoom) bars per window
  zoomY         : 1.0, // 10px per note
  clickPos      : null,
  x             : 0,
  y             : 0,
  isDragging    : false,
  dragMode      : null,
  selectedNotes : {},
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

const DragMode = {
  NOTE_ON  : Symbol(),
  NOTE_OFF : Symbol(),
  NOTE     : Symbol(),
};

export default {
  Actions,
  DragMode,
  DEFAULT_PIANO,
  NOTE_HEIGHT,
};
