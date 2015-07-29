'use strict';

import { DEFAULT_INFO } from '../../CONST';

const SET_ARTIST = 'SET_ARTIST';

export default function infoReducer (state=DEFAULT_INFO, action) {

  switch (action.type) {
  case SET_ARTIST:
    state.artist = action.artist;
    return state;
  default:
    return state;
  }

}
