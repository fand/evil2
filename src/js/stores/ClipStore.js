'use strict';

// import { SELECT_CLIP } from '../CONST';
const SELECT_CLIP = 'SELECT_CLIP';

let data = {
  clips       : {},
  currentClip : null
};

export default function clipStore (state=data, action) {
  console.log('>> clipStore');
  console.log(state);
  switch (action.type) {
  case SELECT_CLIP:
    state.currentClip = state.clips[action.clipId];
    return state;
  default:
    return state;
  }

}
