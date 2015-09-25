'use strict';

import { Actions } from '../CONST';

export function selectClip (clipId) {
  return {
    type   : Actions.SELECT_CLIP,
    clipId,
  };
}

export function selectCell (pos) {
  return {
    type : Actions.SELECT_CELL,
    pos,
  };
}

export function selectScene (index) {
  return {
    type : Actions.SELECT_SCENE,
    index,
  };
}
