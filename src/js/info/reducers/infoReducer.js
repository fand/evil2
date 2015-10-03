'use strict';

import { Actions, DEFAULT_INFO } from '../../CONST';

const infoReducer = (state = DEFAULT_INFO, action) => {

  switch (action.type) {
  case Actions.SET_ARTIST:
    return {
      ...state,
      artist : action.artist,
    };

  default:
    return state;
  }

};

export default infoReducer;
