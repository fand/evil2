'use strict';

// import { SELECT_CLIP } from '../CONST';

const SELECT_CLIP   = 'SELECT_CLIP';
const SET_CLIP_NAME = 'SET_CLIP_NAME';

export function selectClip (clipId) {
  return {
    type   : SELECT_CLIP,
    clipId : clipId
  };
}

export function setClipName (clipId, name) {
  return {
    type   : SET_CLIP_NAME,
    clipId : clipId,
    name   : name,
  };
}

export function clipSelected (clip) {
  return {
    type : 'CLIP_SELECTED',
    clip : clip
  };
}
