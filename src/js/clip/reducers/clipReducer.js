'use strict';

import CONST, { Actions } from '../CONST';

const updateClipMidi = function (state, action) {
  const { clipId, midiId, newMidi } = action;

  const clip = state.clips[clipId];

  for (let i = 0; i < clip.midi.length; i++) {
    if (clip.midi[i].uuid === midiId) {
      clip.midi[i] = newMidi;
      break;
    }
  }

  return {
    ...state,
    clips : {
      ...state.clips,
      [clipId] : clip,
    },
  };
};

const setClipName = (state, action) => {
  let clip = state.clips[action.clipId];
  clip.name = action.name;

  return {
    ...state,
    clips : {
      ...state.clips,
      [action.clipId] : clip,
    },
  };
};

const selectClip = (state, action) => {
  return {
    ...state,
    currentClipId: action.clipId,
  };
};

export default function clipReducer (state=CONST.DEFAULT_CLIP, action) {
  switch (action.type) {
  case Actions.SELECT_CLIP:
    return selectClip(state, action);
  case Actions.SET_CLIP_NAME:
    return setClipName(state, action);
  case Actions.UPDATE_CLIP_MIDI:
    return updateClipMidi(state, action);

  default:
    return state;
  }

}
