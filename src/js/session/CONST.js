'use strict';

const Actions = {
  ADD_SCENE : Symbol(),
};

const DEFAULT_SESSION = {
  sceneIds : [],
};

const DEMO_SESSION = {
  sceneIds : ['scene1', 'scene2'],
};

export default {
  Actions,
  DEFAULT_SESSION,
  DEMO_SESSION,
};
