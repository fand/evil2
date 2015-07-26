'use strict';

// import { SELECT_CLIP } from '../CONST';
const SELECT_SCENE = 'SELECT_SCENE';

let data = {
  scenes       : [],
  currentScene : null
};

export default function sessionStore (state=data, action) {

  console.log('>> sessionStore');
  console.log(state);

  switch (action.type) {
  case SELECT_SCENE:
    state.currentScene = state.scenes[action.index];
    return state;
  default:
    return state;
  }

}
