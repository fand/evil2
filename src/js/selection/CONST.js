'use strict';

// TODO: focus on device/track

const DEFAULT_SELECTION = {
  currentClipId     : null,
  currentSceneId    : null,
  currentCellId     : null,
  selectedClipIds   : [],
  selectedSceneIds  : [],
  selectedCellIds   : [],
  selectedNoteIds   : [],
};

const Actions = {
  FOCUS_CLIP          : Symbol(),
  FOCUS_SCENE         : Symbol(),
  SELECT_CLIP         : Symbol(),
  SELECT_SCENE        : Symbol(),
  SELECT_CELL         : Symbol(),
  SELECT_NOTE         : Symbol(),
  DESELECT_CLIP       : Symbol(),
  DESELECT_SCENE      : Symbol(),
  DESELECT_CELL       : Symbol(),
  DESELECT_NOTE       : Symbol(),
  DESELECT_ALL_CLIPS  : Symbol(),
  DESELECT_ALL_SCENES : Symbol(),
  DESELECT_ALL_CELLS  : Symbol(),
};

export default {
  Actions,
  DEFAULT_SELECTION,
};