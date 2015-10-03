'use strict';

import CONST, { Actions } from '../CONST';

const addScene = (state) => {
  return state;
};

const sessionReducer = (state = CONST.DEFAULT_SESSION, action) => {

  switch (action.type) {
  case Actions.ADD_SCENE:
    return addScene(state, action);

  default:
    return state;
  }

};

export default sessionReducer;
