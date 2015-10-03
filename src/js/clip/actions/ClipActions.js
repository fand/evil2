'use strict';

import { Actions } from '../CONST';

const ClipActions = {

  selectClip (clipId) {
    return {
      type : Actions.SELECT_CLIP,
      clipId,
    };
  },

  setClipName (clipId, name) {
    return {
      type : Actions.SET_CLIP_NAME,
      clipId,
      name,
    };
  },

  clipSelected (clip) {
    return {
      type : Actions.CLIP_SELECTED,
      clip,
    };
  },

  updateNote (newNote) {
    return {
      type : Actions.UPDATE_NOTE,
      newNote,
    };
  },

};

export default ClipActions;
