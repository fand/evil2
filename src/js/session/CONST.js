'use strict';

import uuid from 'uuid';

const Actions = {
  SELECT_CLIP  : 'SELECT_CLIP',
  SELECT_SCENE : 'SELECT_SCENE',
  SELECT_CELL  : 'SELECT_CELL',
};

const DEFAULT_SESSION = {
  scenes : [],
  selectedSceneId : null,
  currentSceneId  : null,
};

const DEMO_SESSION = {
  scenes : ['scene1', 'scene2'],
  selectedSceneId : 'scene1',
  currentSceneId  : 'scene1',
};

export default {
  Actions,
  DEFAULT_SESSION,
  DEMO_SESSION,
};
