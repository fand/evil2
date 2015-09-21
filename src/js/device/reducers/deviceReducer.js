'use strict';

import CONST, { Actions } from '../CONST';

import RezSynth from '../models/RezSynth';

const initDevices = (state, action) => {
  return {
    ...state,
    devices : [
      new RezSynth()
    ],
  };
};

const deviceReducer = (state=CONST.DEFAULT_DEVICE, action) => {
  switch (action.type) {
  case Actions.INIT_DEVICES:
    return initDevices(state, action);
  case Actions.PLAY:
    return {...state, isPlaying : true};
  default:
    return state;
  }
};

export default deviceReducer;
