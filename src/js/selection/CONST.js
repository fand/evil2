'use strict';

import uuid from 'uuid';

// TODO: focus on device/track

const DEFAULT_SELECTION = {
  currentClipId     : null,
  currentSceneId    : null,
  selectedClipIds   : [],
  selectedSceneIds  : [],
};

const Actions = {
  FOCUS_CLIP     : Symbol(),
  FOCUS_SCENE    : Symbol(),
  SELECT_CLIP    : Symbol(),
  SELECT_SCENE   : Symbol(),
  DESELECT_CLIP  : Symbol(),
  DESELECT_SCENE : Symbol(),
};

export default {
  Actions,
  DEFAULT_SELECTION,
};
