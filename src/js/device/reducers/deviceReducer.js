'use strict';

import CONST, { Actions } from '../CONST';

import DeviceFactory from '../models/DeviceFactory';

const initDevices = (state, action) => {
  let newDevices = {};

  Object.keys(state.device).forEach((k) => {
    newDevices[k] = {
      data   : { ...state.device[k].data },
      entity : DeviceFactory.create(state.device[k].data),
    };
  });

  return {
    ...state,
    device : newDevices,
  };
};

const deviceReducer = (state=CONST.DEMO_DEVICE, action) => {
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