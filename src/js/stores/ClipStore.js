'use strict';

// import { SELECT_CLIP } from '../CONST';
const SELECT_CLIP   = 'SELECT_CLIP';
const SET_CLIP_NAME = 'SET_CLIP_NAME';

let data = {
  clips       : {},
  currentClip : null
};

export default function clipStore (state=data, action) {
  switch (action.type) {
  case SELECT_CLIP:
    state.currentClip = state.clips[action.clipId];
    return state;
  case SET_CLIP_NAME:
    let clip = state.clips[action.clipId];
    clip.name = action.name;
    return state;
  default:
    return state;
  }

}
