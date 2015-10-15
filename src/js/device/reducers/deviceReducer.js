'use strict';

import CONST, { Actions } from '../CONST';
import DeviceFactory from '../models/DeviceFactory';

const initDevices = (state) => {

  const newDevices = { ... state.entities.devices };
  Object.keys(state.entities.devices).forEach((k) => {
    const data = state.entities.devices[k].data;
    newDevices[k] = {
      data,
      engine : DeviceFactory.create(data),
    };
  });

  return {
    ...state,
    entities : {
      ...state.entities,
      devices : newDevices,
    },
  };
};

const deviceReducer = (state = CONST.DEMO_DEVICE, action) => {
  switch (action.type) {
  case Actions.INIT_DEVICES:
    return initDevices(state, action);

  default:
    return state;
  }
};

export default deviceReducer;
