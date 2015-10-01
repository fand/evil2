'use strict';

// TODO: focus on device/track

const DEFAULT_SELECTION = {
  currentClipId    : null,
  currentSceneId   : null,
  currentCellId    : null,
  selectedClipIds  : [],
  selectedSceneIds : [],
  selectedCellIds  : [],
  selectedNoteIds  : [],
};

const Actions = {
  FOCUS_CLIP          : 'SELECTION:FOCUS_CLIP',
  FOCUS_SCENE         : 'SELECTION:FOCUS_SCENE',
  SELECT_CLIP         : 'SELECTION:SELECT_CLIP',
  SELECT_SCENE        : 'SELECTION:SELECT_SCENE',
  SELECT_CELL         : 'SELECTION:SELECT_CELL',
  SELECT_NOTE         : 'SELECTION:SELECT_NOTE',
  DESELECT_CLIP       : 'SELECTION:DESELECT_CLIP',
  DESELECT_SCENE      : 'SELECTION:DESELECT_SCENE',
  DESELECT_CELL       : 'SELECTION:DESELECT_CELL',
  DESELECT_NOTE       : 'SELECTION:DESELECT_NOTE',
  DESELECT_ALL_CLIPS  : 'SELECTION:DESELECT_ALL_CLIPS',
  DESELECT_ALL_SCENES : 'SELECTION:DESELECT_ALL_SCENES',
  DESELECT_ALL_CELLS  : 'SELECTION:DESELECT_ALL_CELLS',
};

export default {
  Actions,
  DEFAULT_SELECTION,
};
