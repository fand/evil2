'use strict';

// import { SELECT_CLIP } from '../CONST';

const SELECT_CLIP = 'SELECT_CLIP';
const SELECT_CELL = 'SELECT_CELL';

export function selectClip (clipId) {
  return {
    type   : SELECT_CLIP,
    clipId : clipId
  };
}

export function selectCell (pos) {
  return {
    type : SELECT_CELL,
    pos  : pos
  };
}
