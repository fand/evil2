'use strict';

import CONST from '../CONST';

const SELECT_SCENE = 'SELECT_SCENE';
const SELECT_CELL = 'SELECT_CELL';

export default function sessionReducer (state=CONST.DEFAULT_SESSION, action) {

  switch (action.type) {
  case SELECT_CELL:
    state.currentCell = action.pos;
    return state;
  case SELECT_SCENE:
    state.currentScene = state.scenes[action.index];
    return state;
  default:
    return state;
  }

}
