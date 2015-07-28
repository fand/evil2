'use strict';

// import { SELECT_CLIP } from '../CONST';
const SELECT_SCENE = 'SELECT_SCENE';
const SELECT_CELL = 'SELECT_CELL';

let data = {
  scenes       : [],
  currentScene : null,
  currentCell  : null,
};

export default function sessionReducer (state=data, action) {

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
