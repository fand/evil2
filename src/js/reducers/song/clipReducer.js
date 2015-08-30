'use strict';

// import { SELECT_CLIP } from '../CONST';
const SELECT_CLIP   = 'SELECT_CLIP';
const SET_CLIP_NAME = 'SET_CLIP_NAME';

let data = {
  clips         : {},
  currentClipId : null
};

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

export default function clipReducer (state=data, action) {
  switch (action.type) {
  case SELECT_CLIP:
    return {
      ...state,
      currentClipId: action.clipId,
    };
  case SET_CLIP_NAME:
    let clip = state.clips[action.clipId];
    clip.name = action.name;

    return {
      ...state,
      clips : {
        ...state.clips,
        [action.clipId] : clip,
      }
    };

  case 'UPDATE_CLIP_MIDI':
    return updateClipMidi(state, action);

  default:
    return state;
  }

}
