'use strict';

// import Song from '../models/Song';

const CLIP_UPDATED = 'CLIP_UPDATED';

const DEFAULT = {
  clip  : undefined,
  notes : {}
};

const clipUpdated = function (state, action) {
  state.clip = action.clip;
  let notes = [];

  return state;
};

const clipViewReducer = function (state=DEFAULT, action) {

  switch (action.type) {
  case CLIP_UPDATED:
    return clipUpdated(state, action);

  default:
    return state;
  }

};

export default clipViewReducer;
