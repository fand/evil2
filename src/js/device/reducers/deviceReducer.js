'use strict';

import CONST, { Actions } from '../CONST';

const deviceReducer = (state=CONST.DEFAULT_DEVICE, action) => {
  switch (action.type) {
  case Actions.PLAY:
    return {...state, isPlaying : true};
  default:
    return state;
  }
};

export default deviceReducer;
