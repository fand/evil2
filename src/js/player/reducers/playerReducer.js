'use strict';

import CONST, { Actions } from '../CONST';

const playerReducer = (state=CONST.DEFAULT_PLAY, action) => {
  switch (action.type) {
  case Actions.PLAY:
    return {...state, isPlaying : true};
  case Actions.STOP:
    return {...state, isPlaying : false};
  default:
    return state;
  }
};

export default playerReducer;
