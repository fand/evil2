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
  DRAG_STARTED          : 'PIANOROLL:DRAG_STARTED',
  DRAG_ENDED            : 'PIANOROLL:DRAG_ENDED',
  DRAG_MOVED            : 'PIANOROLL:DRAG_MOVED',
  SELECT_NOTE           : 'PIANOROLL:SELECT_NOTE',
  DESELECT_NOTE         : 'PIANOROLL:DESELECT_NOTE',
  DESELECT_ALL_NOTES    : 'PIANOROLL:DESELECT_ALL_NOTES',
  START_MOVING_NOTE_ON  : 'PIANOROLL:START_MOVING_NOTE_ON',
  START_MOVING_NOTE_OFF : 'PIANOROLL:START_MOVING_NOTE_OFF',
  START_MOVING_NOTE     : 'PIANOROLL:START_MOVING_NOTE',
  UPDATE_NOTE           : 'PIANOROLL:UPDATE_NOTE',
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
