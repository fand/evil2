'use strict';

import { Actions } from '../CONST';

const DeviceActions = {

  play : () => ({
    type : Actions.PLAY,
  }),

  initDevices : () => ({
    type : Actions.INIT_DEVICES,
  }),

};

export default DeviceActions;
