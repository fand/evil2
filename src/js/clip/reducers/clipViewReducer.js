'use strict';

// import Song from '../models/Song';

const CLIP_SELECTED = 'CLIP_SELECTED';

const DEFAULT = {
  clip : undefined,
};

const clipSelected = function (state, action) {
  return {
    clip : action.clip,
  };
};

const clipViewReducer = function (state = DEFAULT, action) {

  switch (action.type) {
  case CLIP_SELECTED:
    return clipSelected(state, action);

  default:
    return state;
  }

};

export default clipViewReducer;
