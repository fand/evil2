'use strict';

import { Actions } from '../CONST';

const addScene = (sceneId) => ({
  type: Actions.ADD_SCENE,
  sceneId,
});

export default {
  addScene,
};
