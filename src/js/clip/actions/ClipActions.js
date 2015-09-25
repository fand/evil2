'use strict';

import { Actions } from '../CONST';

export function selectClip (clipId) {
  return {
    type   : Actions.SELECT_CLIP,
    clipId : clipId
  };
}

export function setClipName (clipId, name) {
  return {
    type   : Actions.SET_CLIP_NAME,
    clipId : clipId,
    name   : name,
  };
}

export function clipSelected (clip) {
  return {
    type : Actions.CLIP_SELECTED,
    clip : clip
  };
}

export function updateClipMidi ({clipId, midiId, newMidi}) {
  return {
    type : Actions.UPDATE_CLIP_MIDI,
    clipId,
    midiId,
    newMidi,
  };
}
