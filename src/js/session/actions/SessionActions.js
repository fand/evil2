'use strict';

import { Actions } from '../CONST';

const SessionActions = {

  addScene : (sceneId) => ({
    type : Actions.ADD_SCENE,
    sceneId,
  }),

};

export default SessionActions;
