'use strict';

import uuid from 'uuid';

// TODO: focus on device/track

const DEFAULT_SELECTION = {
  currentClipId     : null,
  currentSceneId    : null,
  currentCellId     : null,
  selectedClipIds   : [],
  selectedSceneIds  : [],
  selectedCellIds   : [],
};

const Actions = {
  FOCUS_CLIP     : Symbol(),
  FOCUS_SCENE    : Symbol(),
  SELECT_CLIP    : Symbol(),
  SELECT_SCENE   : Symbol(),
  SELECT_CELL    : Symbol(),
  DESELECT_CLIP  : Symbol(),
  DESELECT_SCENE : Symbol(),
  DESELECT_CELL  : Symbol(),
};

export default {
  Actions,
  DEFAULT_SELECTION,
};
