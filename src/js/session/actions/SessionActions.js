'use strict';

// import { SELECT_CLIP } from '../CONST';

const SELECT_CLIP  = 'SELECT_CLIP';
const SELECT_SCENE = 'SELECT_SCENE';
const SELECT_CELL  = 'SELECT_CELL';

export function selectClip (clipId) {
  return {
    type   : SELECT_CLIP,
    clipId,
  };
}

export function selectCell (pos) {
  return {
    type : SELECT_CELL,
    pos,
  };
}

export function selectScene (index) {
  return {
    type : SELECT_SCENE,
    index,
  };
}
