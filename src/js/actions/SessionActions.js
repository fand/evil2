'use strict';

// import { SELECT_CLIP } from '../CONST';

const SELECT_CLIP = 'SELECT_CLIP';

export function selectClip (clipId) {
  console.log('>>>>>>>>>>>>>>>>>');
  console.log(clipId);
  return {
    type   : SELECT_CLIP,
    clipId : clipId
  };
}
