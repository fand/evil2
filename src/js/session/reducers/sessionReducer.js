'use strict';

import CONST, { Actions } from '../CONST';

const addScene = (state, action) => {
  return state;
};

export default function sessionReducer (state=CONST.DEFAULT_SESSION, action) {

  switch (action.type) {
  case Actions.ADD_SCENE:
    return addScene(state, action);

  default:
    return state;
  }

}
