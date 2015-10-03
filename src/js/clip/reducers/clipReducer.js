'use strict';

import CONST, { Actions } from '../CONST';

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

const updateNote = function (state, action) {
  const { newNote } = action;

  return {
    ...state,
    entities : {
      ...state.entities,
      notes : {
        ...state.entities.notes,
        [newNote.uuid] : newNote,
      },
    },
  };
};

export default function clipReducer (state = CONST.DEFAULT_CLIP, action) {
  switch (action.type) {
  case Actions.SELECT_CLIP:
    return selectClip(state, action);
  case Actions.SET_CLIP_NAME:
    return setClipName(state, action);
  case Actions.UPDATE_NOTE:
    return updateNote(state, action);

  default:
    return state;
  }

}
