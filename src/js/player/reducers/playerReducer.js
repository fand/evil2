'use strict';

import CONST, { Actions } from '../CONST';

const tick = (state) => {
  const interval = state.interval;

  return {
    ...state,
    position : state.position + (interval / state.beatLength),
  };
};

const playerReducer = (state = CONST.DEFAULT_PLAY, action) => {
  switch (action.type) {
  case Actions.PLAY:
    return { ...state, isPlaying : true };
  case Actions.STOP:
    return { ...state, isPlaying : false };
  case Actions.TICK:
    return tick(state, action);
  default:
    return state;
  }
};

export default playerReducer;
