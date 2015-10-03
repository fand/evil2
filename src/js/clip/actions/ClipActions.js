'use strict';

import { Actions } from '../CONST';

export function selectClip (clipId) {
  return {
    type   : Actions.SELECT_CLIP,
    clipId,
  };
}

export function setClipName (clipId, name) {
  return {
    type   : Actions.SET_CLIP_NAME,
    clipId,
    name,
  };
}

export function clipSelected (clip) {
  return {
    type : Actions.CLIP_SELECTED,
    clip,
  };
}

export function updateNote (newNote) {
  return {
    type : Actions.UPDATE_NOTE,
    newNote,
  };
}
