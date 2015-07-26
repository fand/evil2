'use strict';

// import { SELECT_CLIP } from '../CONST';
const SELECT_CLIP = 'SELECT_CLIP';

let data = {
  clips       : {},
  currentClip : null
};

export default function clipStore (state=data, action) {
  switch (action.type) {
  case SELECT_CLIP:
    console.log(state);
    console.log(action);
    state.currentClip = state.clips[action.clipId];
    console.log(state.currentClip);
    return state;
  default:
    return state;
  }

}
